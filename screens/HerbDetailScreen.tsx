import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Body,
  Bullet,
  Button,
  Card,
  Divider,
  GlyphName,
  Hero,
  SafetyBanner,
  SectionTitle,
  Tag,
  usePalette,
} from '../components/ui';
import { herbById } from '../lib/herbs';
import { RootStackParamList } from '../lib/nav';
import { useStore } from '../lib/store';

type Nav = NativeStackNavigationProp<RootStackParamList>;
type Rt = RouteProp<RootStackParamList, 'HerbDetail'>;

export default function HerbDetailScreen() {
  const p = usePalette();
  const insets = useSafeAreaInsets();
  const nav = useNavigation<Nav>();
  const route = useRoute<Rt>();
  const { isSaved, toggleSave } = useStore();

  const herb = herbById(route.params.id);

  if (!herb) {
    return (
      <View style={{ flex: 1, backgroundColor: p.bg, padding: 20, paddingTop: insets.top + 40 }}>
        <Body>This monograph could not be found.</Body>
        <Button label="Go back" icon="arrow-back" onPress={() => nav.goBack()} style={{ marginTop: 18 }} />
      </View>
    );
  }

  const saved = isSaved(herb.id);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: p.bg }}
      contentContainerStyle={{ padding: 18, paddingBottom: insets.bottom + 40 }}
      showsVerticalScrollIndicator={false}
    >
      <Hero colors={[p.primaryDeep, p.primary]} style={{ paddingTop: 16 + insets.top * 0.5 }}>
        <View style={styles.heroTop}>
          <Pressable
            onPress={() => nav.goBack()}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel="Go back"
            style={({ pressed }) => [styles.roundBtn, { opacity: pressed ? 0.7 : 1 }]}
          >
            <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
          </Pressable>
          <Pressable
            onPress={() => toggleSave(herb.id)}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel={saved ? 'Remove bookmark' : 'Bookmark herb'}
            style={({ pressed }) => [styles.roundBtn, { opacity: pressed ? 0.7 : 1 }]}
          >
            <Ionicons name={saved ? 'bookmark' : 'bookmark-outline'} size={19} color="#FFFFFF" />
          </Pressable>
        </View>

        <Text style={styles.heroYoruba}>{herb.yoruba}</Text>
        <Text style={styles.heroCommon}>{herb.common}</Text>
        <Text style={styles.heroBotanical}>{herb.botanical}</Text>
        <View style={styles.heroMeta}>
          <View style={styles.metaChip}>
            <Ionicons name="flask-outline" size={13} color="rgba(255,255,255,0.92)" />
            <Text style={styles.metaText}>{herb.family}</Text>
          </View>
        </View>
        <View style={styles.heroTagRow}>
          {herb.parts.map((part) => (
            <View key={part} style={styles.partChip}>
              <Text style={styles.partText}>{part}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.heroPron}>“{herb.pron}”</Text>
      </Hero>

      <View style={{ marginTop: 16 }}>
        <SafetyBanner
          tone="gold"
          text="Supportive care: this monograph does not replace diagnosis, prescribed medicine or emergency treatment."
          onPress={() => nav.navigate('Safety')}
        />
      </View>

      <SectionTitle title="Ìwò ewé" kicker="field identification" icon="scan-outline" />
      <Card>
        <CueRow icon="leaf-outline" label="Leaves" text={herb.idCues.leaves} p={p} />
        <CueRow icon="flower-outline" label="Flowers / fruit" text={herb.idCues.flowers} p={p} />
        <CueRow icon="flask-outline" label="Scent" text={herb.idCues.scent} p={p} />
        <CueRow icon="body-outline" label="Habit" text={herb.idCues.habit} p={p} />
        <CueRow icon="sparkles-outline" label="Field tip" text={herb.idCues.tip} p={p} last />
      </Card>

      <SectionTitle title="Àṣà ìtò" kicker="traditional practice" icon="book-outline" />
      <Card>
        <Body>{herb.traditional}</Body>
      </Card>

      <SectionTitle title={`Home preparations (${herb.remedies.length})`} icon="flask-outline" />
      {herb.remedies.map((r, i) => (
        <Card key={r.name} delay={i * 50} style={{ marginBottom: 12 }}>
          <Text style={[styles.remedyName, { color: p.text }]}>
            {i + 1}. {r.name}
          </Text>
          <Label text="PREPARATION" p={p} />
          <Body>{r.prepare}</Body>
          <Label text="USED FOR" p={p} />
          <Body>{r.use}</Body>
          {r.caution ? (
            <View style={[styles.miniCaution, { backgroundColor: p.dangerSoft }]}>
              <Ionicons name="warning-outline" size={15} color={p.danger} style={{ marginRight: 8, marginTop: 2 }} />
              <Text style={{ flex: 1, fontSize: 13, lineHeight: 19, color: p.danger, fontWeight: '600' }}>{r.caution}</Text>
            </View>
          ) : null}
        </Card>
      ))}

      <SectionTitle title="Oúnje ayé" kicker="nutrition" icon="nutrition-outline" />
      <Card style={{ marginTop: 12, backgroundColor: p.greenSoft, borderColor: p.greenSoft }}>
        {herb.nutrition.map((n, i) => (
          <Bullet key={n} text={n} tone="green" index={i + 1} />
        ))}
      </Card>

      <SectionTitle title="Àṣìhò & interactions" kicker="safety" icon="alert-circle-outline" />
      <Card tone="danger">
        {herb.cautions.map((c, i) => (
          <Bullet key={c} text={c} tone="danger" index={i + 1} />
        ))}
      </Card>

      <Card delay={60} style={{ marginTop: 12 }}>
        <View style={styles.evidenceHead}>
          <Ionicons name="stats-chart-outline" size={17} color={p.primary} />
          <Text style={[styles.evidenceTitle, { color: p.text }]}>What research says</Text>
        </View>
        <Body style={{ marginTop: 8 }}>{herb.evidence}</Body>
      </Card>

      <SectionTitle title="Ohun ìpànìyìn" kicker="spiritual dimension" icon="sparkles-outline" />
      <Card tone="gold">
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 4 }}>
          {(herb.orisha.length ? herb.orisha : ['—']).map((o) => (
            <Tag key={o} label={o === '—' ? 'No specific Òrìṣà correspondence recorded' : `Òrìṣà: ${o}`} tone="gold" />
          ))}
        </View>
        <Label text="IN YORUBA PRACTICE" p={p} />
        <Body>{herb.spiritual.yoruba}</Body>
        <Label text="ELSEWHERE IN THE WORLD" p={p} />
        <Body>{herb.spiritual.global}</Body>
        <Divider />
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="lock-closed-outline" size={15} color={p.textMuted} style={{ marginRight: 8, marginTop: 2 }} />
          <Text style={{ flex: 1, fontSize: 12.5, lineHeight: 19, color: p.textMuted }}>
            Ritual application belongs to initiated practitioners. This app offers context and respect — not restricted protocol.
          </Text>
        </View>
      </Card>

      <View style={{ marginTop: 22 }}>
        <Button label="Safety guidance" icon="shield-checkmark-outline" onPress={() => nav.navigate('Safety')} />
        <Button
          label="Identify another specimen"
          icon="scan-outline"
          variant="ghost"
          style={{ marginTop: 10 }}
          onPress={() => nav.navigate('Tabs', { screen: 'Identify' })}
        />
      </View>
    </ScrollView>
  );
}

function Label({ text, p }: { text: string; p: ReturnType<typeof usePalette> }) {
  return (
    <Text style={{ fontSize: 10.5, fontWeight: '900', letterSpacing: 1.3, color: p.gold, marginTop: 14, marginBottom: 5 }}>
      {text}
    </Text>
  );
}

function CueRow({
  icon,
  label,
  text,
  p,
  last,
}: {
  icon: GlyphName;
  label: string;
  text: string;
  p: ReturnType<typeof usePalette>;
  last?: boolean;
}) {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: last ? 0 : 14, marginBottom: last ? 0 : 14, borderBottomWidth: last ? 0 : 1, borderBottomColor: p.border }}>
      <View style={{ width: 34 }}>
        <Ionicons name={icon} size={17} color={p.primary} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 12, fontWeight: '900', letterSpacing: 1, color: p.textFaint, marginBottom: 4 }}>
          {label.toUpperCase()}
        </Text>
        <Text style={{ fontSize: 14, lineHeight: 21, color: p.textMuted }}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 },
  roundBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroYoruba: { color: '#FFFFFF', fontSize: 32, fontWeight: '900', letterSpacing: 0.3 },
  heroCommon: { color: 'rgba(255,255,255,0.94)', fontSize: 16, fontWeight: '700', marginTop: 3 },
  heroBotanical: { color: 'rgba(255,255,255,0.82)', fontSize: 13.5, fontStyle: 'italic', marginTop: 3 },
  heroMeta: { flexDirection: 'row', marginTop: 14, flexWrap: 'wrap' },
  metaChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: 999,
    paddingHorizontal: 11,
    paddingVertical: 6,
  },
  metaText: { color: 'rgba(255,255,255,0.95)', fontSize: 12, fontWeight: '700', marginLeft: 6 },
  heroTagRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 },
  partChip: {
    backgroundColor: 'rgba(255,255,255,0.14)',
    borderRadius: 999,
    paddingHorizontal: 11,
    paddingVertical: 5,
    marginRight: 7,
    marginBottom: 6,
  },
  partText: { color: '#FFFFFF', fontSize: 11.5, fontWeight: '700' },
  heroPron: { color: 'rgba(255,255,255,0.75)', fontSize: 12.5, marginTop: 8, fontStyle: 'italic' },
  remedyName: { fontSize: 15.5, fontWeight: '800' },
  miniCaution: { flexDirection: 'row', borderRadius: 12, padding: 11, marginTop: 14 },
  evidenceHead: { flexDirection: 'row', alignItems: 'center' },
  evidenceTitle: { fontSize: 15, fontWeight: '800', marginLeft: 8 },
});
