import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Herb } from '../lib/herbs';
import { radii } from '../lib/theme';
import { GlyphName, HerbTile, Tag, usePalette } from './ui';

export function HerbCard({
  herb,
  onPress,
  saved,
  onSave,
  delay = 0,
  score,
  matched,
}: {
  herb: Herb;
  onPress: () => void;
  saved?: boolean;
  onSave?: () => void;
  delay?: number;
  score?: number;
  matched?: string[];
}) {
  const p = usePalette();
  return (
    <Animated.View entering={FadeInDown.delay(delay).duration(300).springify().damping(18)}>
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`${herb.yoruba}, ${herb.common} monograph`}
        style={({ pressed }) => [
          styles.wrap,
          {
            backgroundColor: p.surface,
            borderColor: p.border,
            shadowColor: p.shadow,
            opacity: pressed ? 0.92 : 1,
            transform: [{ scale: pressed ? 0.995 : 1 }],
          },
        ]}
      >
        <HerbTile id={herb.id} name={herb.yoruba} size={58} />
        <View style={{ flex: 1, marginLeft: 13 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.yoruba, { color: p.text }]} numberOfLines={1}>
              {herb.yoruba}
            </Text>
            {saved ? <Ionicons name="bookmark" size={14} color={p.gold} style={{ marginLeft: 6 }} /> : null}
          </View>
          <Text style={[styles.common, { color: p.textMuted }]} numberOfLines={1}>
            {herb.common}
          </Text>
          <Text style={[styles.botanical, { color: p.textFaint }]} numberOfLines={1}>
            {herb.botanical}
          </Text>
          {typeof score === 'number' ? (
            <View style={{ marginTop: 8 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                <Ionicons name="sparkles" size={12} color={p.gold} />
                <Text style={{ marginLeft: 5, fontSize: 12, fontWeight: '800', color: p.gold }}>
                  {Math.round(score * 100)}% match
                </Text>
                {matched && matched.length ? (
                  <Text numberOfLines={1} style={{ marginLeft: 6, flex: 1, fontSize: 11.5, color: p.textFaint }}>
                    {matched.slice(0, 3).join(' · ')}
                  </Text>
                ) : null}
              </View>
            </View>
          ) : null}
          <View style={styles.tagRow}>
            {herb.tags.slice(0, 3).map((t) => (
              <Tag key={t} label={t} />
            ))}
          </View>
        </View>
        {onSave ? (
          <Pressable
            onPress={onSave}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel={saved ? 'Remove bookmark' : 'Bookmark herb'}
            style={{ alignSelf: 'flex-start', padding: 2 }}
          >
            <Ionicons
              name={(saved ? 'bookmark' : 'bookmark-outline') as GlyphName}
              size={20}
              color={saved ? p.gold : p.textFaint}
            />
          </Pressable>
        ) : (
          <Ionicons name="chevron-forward" size={18} color={p.textFaint} />
        )}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    borderRadius: radii.lg,
    borderWidth: 1,
    marginBottom: 12,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 1,
  },
  yoruba: { fontSize: 16.5, fontWeight: '800', maxWidth: '86%' },
  common: { fontSize: 13.5, fontWeight: '600', marginTop: 1 },
  botanical: { fontSize: 12, fontStyle: 'italic', marginTop: 1 },
  tagRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 7 },
});
