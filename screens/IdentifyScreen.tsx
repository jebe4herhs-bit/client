import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

import { HerbCard } from '../components/HerbCard';
import { Button, Card, Chip, EmptyState, GlyphName, SafetyBanner, ScreenHeader, usePalette } from '../components/ui';
import { ANALYSIS_STEPS, MatchResult, matchByName, matchByTraits, TraitKey, traitGroups } from '../lib/matcher';
import { herbs } from '../lib/herbs';
import { RootStackParamList } from '../lib/nav';
import { useStore } from '../lib/store';

type Nav = NativeStackNavigationProp<RootStackParamList>;
type Phase = 'idle' | 'scanning' | 'results';

export default function IdentifyScreen() {
  const p = usePalette();
  const nav = useNavigation<Nav>();
  const { addRecent, recents, clearRecents, isSaved, toggleSave } = useStore();

  const [mode, setMode] = useState<'traits' | 'name'>('traits');
  const [sel, setSel] = useState<Partial<Record<TraitKey, string>>>({});
  const [phase, setPhase] = useState<Phase>('idle');
  const [step, setStep] = useState(0);
  const [results, setResults] = useState<MatchResult[]>([]);
  const [query, setQuery] = useState('');

  const answered = traitGroups.filter((g) => sel[g.key]).length;

  const finish = useCallback(
    (chosen: Partial<Record<TraitKey, string>>) => {
      const r = matchByTraits(chosen);
      setResults(r);
      setPhase('results');
      if (r[0]) addRecent(r[0].herb.id, r[0].herb.common);
    },
    [addRecent],
  );

  useEffect(() => {
    if (phase !== 'scanning') return undefined;
    let i = 0;
    setStep(0);
    const id = setInterval(() => {
      i += 1;
      if (i >= ANALYSIS_STEPS.length) {
        clearInterval(id);
        finish(sel);
      } else {
        setStep(i);
      }
    }, 460);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const nameResults = mode === 'name' ? matchByName(query) : [];

  const toggleTrait = (key: TraitKey, value: string) => {
    setPhase('idle');
    setResults([]);
    setSel((prev) => ({ ...prev, [key]: prev[key] === value ? undefined : value }));
  };

  const reset = () => {
    setSel({});
    setResults([]);
    setPhase('idle');
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: p.bg }}
      contentContainerStyle={{ paddingHorizontal: 18, paddingBottom: 46 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <ScreenHeader title="EweScan" subtitle="AI-assisted identification, field-first" />

      <View style={[styles.segment, { backgroundColor: p.surfaceAlt, borderColor: p.border }]}>
        {(['traits', 'name'] as const).map((m) => (
          <Pressable
            key={m}
            onPress={() => setMode(m)}
            accessibilityRole="tab"
            accessibilityState={{ selected: mode === m }}
            style={[
              styles.segmentItem,
              mode === m && { backgroundColor: p.surface, borderColor: p.border, shadowColor: p.shadow },
            ]}
          >
            <Ionicons
              name={m === 'traits' ? 'leaf-outline' : 'search-outline'}
              size={15}
              color={mode === m ? p.text : p.textFaint}
              style={{ marginRight: 6 }}
            />
            <Text style={[styles.segmentText, { color: mode === m ? p.text : p.textFaint }]}>
              {m === 'traits' ? 'Field markers' : 'Name / keywords'}
            </Text>
          </Pressable>
        ))}
      </View>

      {mode === 'name' ? (
        <Animated.View entering={FadeIn.duration(240)}>
          <View style={[styles.searchBox, { backgroundColor: p.surface, borderColor: p.border }]}>
            <Ionicons name="search" size={18} color={p.textFaint} />
            <TextInput
              value={query}
              onChangeText={(t) => setQuery(t)}
              placeholder="E.g. scent leaf, ewuro, Ocimum, cough…"
              placeholderTextColor={p.textFaint}
              style={[styles.searchInput, { color: p.text }]}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="search"
              clearButtonMode="while-editing"
            />
            {query.length > 0 ? (
              <Pressable onPress={() => setQuery('')} hitSlop={10} accessibilityLabel="Clear search">
                <Ionicons name="close-circle" size={18} color={p.textFaint} />
              </Pressable>
            ) : null}
          </View>

          {nameResults.length > 0 ? (
            <View style={{ marginTop: 16 }}>
              <Text style={[styles.resultsKicker, { color: p.gold }]}>CANDIDATE MONOGRAPHS</Text>
              {nameResults.map((r, i) => (
                <View key={r.herb.id} style={{ marginTop: 12 }}>
                  <HerbCard
                    herb={r.herb}
                    score={r.score}
                    delay={i * 40}
                    saved={isSaved(r.herb.id)}
                    onSave={() => toggleSave(r.herb.id)}
                    onPress={() => nav.navigate('HerbDetail', { id: r.herb.id })}
                  />
                </View>
              ))}
            </View>
          ) : query.trim().length >= 2 ? (
            <EmptyState
              icon="search-outline"
              title="No record matches that"
              message="Try the Yoruba name, the English name, the botanical name, or a use keyword such as cough, skin or fever."
            />
          ) : (
            <EmptyState
              icon="sparkles-outline"
              title="Search the knowledge base"
              message={`Type at least two characters. The index covers ${herbs.length} Yoruba monographs with uses, cautions and tradition notes.`}
            />
          )}
        </Animated.View>
      ) : (
        <Animated.View entering={FadeIn.duration(240)}>
          <SafetyBanner
            tone="green"
            text="Record what you can actually observe: leaf shape, edge, colour, scent when crushed, flower and growth habit. Never taste an unknown plant."
          />

          {traitGroups.map((group, gi) => (
            <Card key={group.key} delay={gi * 40} style={{ marginTop: 12 }}>
              <View style={styles.groupHead}>
                <Text style={[styles.groupTitle, { color: p.text }]}>{group.title}</Text>
                {sel[group.key] ? (
                  <Pressable
                    onPress={() => toggleTrait(group.key, sel[group.key] as string)}
                    hitSlop={8}
                    accessibilityLabel={`Clear ${group.title}`}
                  >
                    <Ionicons name="close-circle" size={17} color={p.textFaint} />
                  </Pressable>
                ) : null}
              </View>
              <View style={styles.chipRow}>
                {group.options.map((o) => (
                  <Chip
                    key={o.value}
                    label={o.label}
                    icon={group.icon as GlyphName}
                    selected={sel[group.key] === o.value}
                    onPress={() => toggleTrait(group.key, o.value)}
                  />
                ))}
              </View>
            </Card>
          ))}

          <View style={{ marginTop: 18 }}>
            <Button
              label={answered < 2 ? `Select at least 2 markers (${answered}/2)` : 'Analyse specimen'}
              icon="sparkles-outline"
              disabled={answered < 2 || phase === 'scanning'}
              onPress={() => {
                setResults([]);
                setPhase('scanning');
              }}
            />
            {answered > 0 ? (
              <Pressable onPress={reset} style={{ alignSelf: 'center', marginTop: 12 }} accessibilityRole="button">
                <Text style={{ color: p.textFaint, fontSize: 13, fontWeight: '700' }}>Clear all markers</Text>
              </Pressable>
            ) : null}
          </View>

          {phase === 'scanning' ? (
            <Animated.View entering={FadeIn.duration(220)} style={[styles.scan, { backgroundColor: p.primarySoft, borderColor: p.primary }]}>
              <View style={styles.scanHead}>
                <Ionicons name="hardware-chip-outline" size={18} color={p.primary} />
                <Text style={[styles.scanTitle, { color: p.text }]}>EweScan engine</Text>
              </View>
              <Text style={[styles.scanStep, { color: p.textMuted }]}>{ANALYSIS_STEPS[step]}</Text>
              <View style={[styles.scanTrack, { backgroundColor: p.surface }]}>
                <Animated.View
                  entering={FadeIn}
                  style={{
                    width: `${((step + 1) / ANALYSIS_STEPS.length) * 100}%`,
                    height: '100%',
                    backgroundColor: p.primary,
                    borderRadius: 8,
                  }}
                />
              </View>
            </Animated.View>
          ) : null}

          {phase === 'results' ? (
            <View style={{ marginTop: 22 }}>
              <View style={styles.resultsHead}>
                <Text style={[styles.resultsKicker, { color: p.gold }]}>RANKED CANDIDATES</Text>
                <Text style={{ fontSize: 12, color: p.textFaint, fontWeight: '600' }}>
                  {results.length} of 22 records
                </Text>
              </View>

              {results.length === 0 ? (
                <EmptyState
                  icon="help-circle-outline"
                  title="No confident match"
                  message="These markers do not fit any record in the knowledge base closely enough. Add more markers — scent and flower colour sharpen the ranking — or search by name."
                />
              ) : (
                results.map((r, i) => (
                  <View key={r.herb.id} style={{ marginTop: 12 }}>
                    <HerbCard
                      herb={r.herb}
                      score={r.score}
                      matched={r.matched}
                      delay={i * 40}
                      saved={isSaved(r.herb.id)}
                      onSave={() => toggleSave(r.herb.id)}
                      onPress={() => nav.navigate('HerbDetail', { id: r.herb.id })}
                    />
                  </View>
                ))
              )}

              <SafetyBanner
                tone="danger"
                text="A match is a candidate, not a verdict. Confirm against a living plant guide or a knowledgeable elder before ingesting anything — many medicinal plants have toxic look-alikes."
              />
            </View>
          ) : null}
        </Animated.View>
      )}

      {recents.length > 0 ? (
        <View style={{ marginTop: 26 }}>
          <View style={styles.resultsHead}>
            <Text style={[styles.resultsKicker, { color: p.textFaint }]}>RECENT MATCHES</Text>
            <Pressable onPress={clearRecents} hitSlop={8} accessibilityRole="button">
              <Text style={{ fontSize: 12, color: p.textFaint, fontWeight: '700' }}>Clear</Text>
            </Pressable>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingTop: 10 }}>
            {recents.map((r) => (
              <Pressable
                key={r.id}
                onPress={() => nav.navigate('HerbDetail', { id: r.id })}
                style={({ pressed }) => [
                  styles.recentChip,
                  { backgroundColor: p.surface, borderColor: p.border, opacity: pressed ? 0.75 : 1 },
                ]}
              >
                <Ionicons name="leaf-outline" size={14} color={p.green} style={{ marginRight: 6 }} />
                <Text style={{ color: p.text, fontSize: 13, fontWeight: '700' }}>{r.label}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  segment: {
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    padding: 4,
    marginBottom: 4,
  },
  segmentItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  segmentText: { fontSize: 13, fontWeight: '800' },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 14,
    height: 52,
    marginTop: 14,
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 14.5, fontWeight: '600', height: '100%' },
  groupHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },
  groupTitle: { fontSize: 14.5, fontWeight: '800' },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -4 },
  scan: { borderRadius: 18, borderWidth: 1.5, padding: 16, marginTop: 18 },
  scanHead: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  scanTitle: { fontSize: 14, fontWeight: '800', marginLeft: 8 },
  scanStep: { fontSize: 13, marginBottom: 12, minHeight: 18 },
  scanTrack: { height: 8, borderRadius: 8, overflow: 'hidden' },
  resultsHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 },
  resultsKicker: { fontSize: 10.5, fontWeight: '900', letterSpacing: 1.5 },
  recentChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 999,
    borderWidth: 1,
    marginRight: 8,
  },
});
