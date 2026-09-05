import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useMemo, useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { HerbCard } from '../components/HerbCard';
import { Chip, EmptyState, ScreenHeader, SafetyBanner, usePalette } from '../components/ui';
import { allTags, herbs } from '../lib/herbs';
import { RootStackParamList } from '../lib/nav';
import { useStore } from '../lib/store';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function LibraryScreen() {
  const p = usePalette();
  const nav = useNavigation<Nav>();
  const { isSaved, toggleSave, saved } = useStore();
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState<string | null>(null);
  const [savedOnly, setSavedOnly] = useState(false);

  const data = useMemo(() => {
    const q = query.trim().toLowerCase();
    return herbs.filter((h) => {
      if (savedOnly && !isSaved(h.id)) return false;
      if (tag && !h.tags.includes(tag)) return false;
      if (!q) return true;
      return (
        h.yoruba.toLowerCase().includes(q) ||
        h.common.toLowerCase().includes(q) ||
        h.botanical.toLowerCase().includes(q) ||
        h.family.toLowerCase().includes(q) ||
        h.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, tag, savedOnly, isSaved]);

  return (
    <View style={{ flex: 1, backgroundColor: p.bg }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 18, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View>
            <ScreenHeader title="Ìwé Ewé" subtitle={`${herbs.length} monographs · Yoruba practice`} />
            <SafetyBanner tone="gold" text="Every monograph records uses, nutrition, cautions and escalation advice. Supportive care only." />

            <View style={[styles.searchBox, { backgroundColor: p.surface, borderColor: p.border }]}>
              <Ionicons name="search" size={18} color={p.textFaint} />
              <TextInput
                value={query}
                onChangeText={setQuery}
                placeholder="Search Yoruba, botanical or use…"
                placeholderTextColor={p.textFaint}
                style={[styles.searchInput, { color: p.text }]}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="search"
                clearButtonMode="while-editing"
              />
              {query.length ? (
                <Pressable onPress={() => setQuery('')} hitSlop={10} accessibilityLabel="Clear search">
                  <Ionicons name="close-circle" size={18} color={p.textFaint} />
                </Pressable>
              ) : null}
            </View>

            <View style={{ marginTop: 14 }}>
              <FlatList
                horizontal
                data={['All', ...allTags]}
                keyExtractor={(t) => t}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Chip
                    label={item}
                    selected={item === 'All' ? !tag && !savedOnly : tag === item}
                    onPress={() => {
                      setSavedOnly(false);
                      setTag(item === 'All' ? null : item);
                    }}
                  />
                )}
              />
            </View>

            <Pressable
              onPress={() => setSavedOnly((v) => !v)}
              accessibilityRole="button"
              accessibilityState={{ selected: savedOnly }}
              style={({ pressed }) => [
                styles.savedToggle,
                {
                  backgroundColor: savedOnly ? p.primary : p.surface,
                  borderColor: savedOnly ? p.primary : p.border,
                  opacity: pressed ? 0.85 : 1,
                },
              ]}
            >
              <Text
                style={{
                  color: savedOnly ? p.onPrimary : p.textMuted,
                  fontSize: 13,
                  fontWeight: '800',
                }}
              >
                Bookmarked ({saved.length})
              </Text>
            </Pressable>

            <Text style={[styles.count, { color: p.textFaint }]}>
              {data.length} {data.length === 1 ? 'record' : 'records'}
            </Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <HerbCard
            herb={item}
            delay={Math.min(index, 8) * 35}
            saved={isSaved(item.id)}
            onSave={() => toggleSave(item.id)}
            onPress={() => nav.navigate('HerbDetail', { id: item.id })}
          />
        )}
        ListEmptyComponent={
          <EmptyState
            icon={savedOnly ? 'bookmark-outline' : 'leaf-outline'}
            title={savedOnly ? 'No bookmarks yet' : 'Nothing matches that search'}
            message={
              savedOnly
                ? 'Tap the bookmark on any monograph to keep it here for quick reference in the field.'
                : 'Try a Yoruba name such as ewuro, a botanical name, or a use keyword such as skin, fever or cough.'
            }
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 14,
    height: 52,
  },
  searchInput: { flex: 1, marginLeft: 4, fontSize: 14.5, fontWeight: '600', height: '100%' },
  savedToggle: {
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 999,
    borderWidth: 1,
    marginTop: 4,
  },
  count: { fontSize: 12, fontWeight: '700', marginTop: 14, marginBottom: 4 },
});
