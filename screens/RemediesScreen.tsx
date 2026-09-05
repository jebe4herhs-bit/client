import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Body, GlyphName, HerbTile, SafetyBanner, ScreenHeader, Tag, usePalette } from '../components/ui';
import { herbById } from '../lib/herbs';
import { RootStackParamList } from '../lib/nav';
import { formulas } from '../lib/remedies';

type Nav = NativeStackNavigationProp<RootStackParamList>;

const LEVEL_TONE: Record<string, 'green' | 'gold' | 'danger'> = {
  'Gentle food': 'green',
  Household: 'gold',
  Practitioner: 'danger',
};

export default function RemediesScreen() {
  const p = usePalette();
  const nav = useNavigation<Nav>();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: p.bg }}
      contentContainerStyle={{ paddingHorizontal: 18, paddingBottom: 46 }}
      showsVerticalScrollIndicator={false}
    >
      <ScreenHeader title="Ògùn Àjé" subtitle="Household formulas · food-first preparations" />

      <SafetyBanner
        tone="gold"
        text="Formulas are gentle and traditional. They support recovery and comfort — they do not treat infection, replace testing, or substitute for prescribed therapy."
      />

      {formulas.map((f, i) => (
        <Animated.View key={f.id} entering={FadeInDown.delay(i * 45).duration(320).springify().damping(18)}>
          <Pressable
            onPress={() => nav.navigate('RemedyDetail', { id: f.id })}
            accessibilityRole="button"
            accessibilityLabel={`${f.name} formula`}
            style={({ pressed }) => [
              styles.card,
              { backgroundColor: p.surface, borderColor: p.border, shadowColor: p.shadow, opacity: pressed ? 0.92 : 1 },
            ]}
          >
            <View style={styles.cardHead}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.name, { color: p.text }]}>{f.name}</Text>
                <Text style={[styles.yoruba, { color: p.textFaint }]}>{f.yoruba}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={p.textFaint} />
            </View>

            <Text style={[styles.goal, { color: p.textMuted }]}>{f.goal}</Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
              <Tag label={f.level} tone={LEVEL_TONE[f.level]} />
              <Tag label={`⏱ ${f.time}`} />
              <Tag label={`${f.herbIds.length} herbs`} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 6 }}>
              {f.herbIds.slice(0, 5).map((hid) => {
                const h = herbById(hid);
                if (!h) return null;
                return (
                  <View key={hid} style={{ marginRight: -8 }}>
                    <HerbTile id={hid} name={h.yoruba} size={32} radius={11} />
                  </View>
                );
              })}
            </View>
          </Pressable>
        </Animated.View>
      ))}

      <View style={{ marginTop: 6 }}>
        <Body style={{ fontSize: 12.5, textAlign: 'center' }}>
          Level guide — Gentle food: everyday culinary strength. Household: concentrated decoctions. Practitioner: potent or tradition-bound preparations requiring guidance.
        </Body>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 22,
    borderWidth: 1,
    padding: 16,
    marginTop: 12,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 1,
  },
  cardHead: { flexDirection: 'row', alignItems: 'center' },
  name: { fontSize: 16.5, fontWeight: '800' },
  yoruba: { fontSize: 12.5, marginTop: 2, fontStyle: 'italic' },
  goal: { fontSize: 13.5, lineHeight: 20, marginTop: 9 },
});
