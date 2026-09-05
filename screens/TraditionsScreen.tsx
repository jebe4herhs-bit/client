import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Body, Card, SafetyBanner, ScreenHeader, SectionTitle, usePalette } from '../components/ui';
import { RootStackParamList } from '../lib/nav';
import { traditions } from '../lib/traditions';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function TraditionsScreen() {
  const p = usePalette();
  const nav = useNavigation<Nav>();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: p.bg }}
      contentContainerStyle={{ paddingHorizontal: 18, paddingBottom: 46 }}
      showsVerticalScrollIndicator={false}
    >
      <ScreenHeader title="Ìṣẹ̀ Ìmọ̀" subtitle="Plants in the world’s sacred traditions" />

      <SafetyBanner
        tone="green"
        text="The spiritual dimension of herbs is real to the people who hold it. It is presented here as context and respect — never as a substitute for medical care, and never as material stripped from its lineage."
      />

      <Card tone="gold">
        <Text style={[styles.cardTitle, { color: p.text }]}>How this app holds tradition</Text>
        <Body style={{ marginTop: 8 }}>
          Every monograph carries three layers: the plant’s chemistry, the household practice around it, and the meaning it holds within its lineage. Where knowledge is restricted — initiation, oríkì, shrine protocol — we say so plainly and point you to the people who carry it.
        </Body>
        <View style={{ marginTop: 12 }}>
          <Body style={{ fontSize: 13, fontStyle: 'italic' }}>
            Take the ethic, not the costume. Practise reciprocity. Buy nothing marketed as sacred.
          </Body>
        </View>
      </Card>

      <SectionTitle title="Seven lineages" icon="sparkles-outline" />

      {traditions.map((t, i) => (
        <Animated.View key={t.id} entering={FadeInDown.delay(i * 45).duration(320).springify().damping(18)}>
          <Pressable
            onPress={() => nav.navigate('TraditionDetail', { id: t.id })}
            accessibilityRole="button"
            accessibilityLabel={`${t.name} tradition`}
            style={({ pressed }) => [
              styles.card,
              { backgroundColor: p.surface, borderColor: p.border, shadowColor: p.shadow, opacity: pressed ? 0.92 : 1 },
            ]}
          >
            <View style={{ flexDirection: 'row' }}>
              <View style={[styles.stripe, { backgroundColor: t.accent }]} />
              <View style={{ flex: 1, marginLeft: 13 }}>
                <Text style={[styles.name, { color: p.text }]}>{t.name}</Text>
                <Text style={[styles.region, { color: p.textFaint }]}>{t.region}</Text>
                <Text style={[styles.subtitle, { color: p.textMuted }]}>{t.subtitle}</Text>
                <View style={styles.metaRow}>
                  <Ionicons name="leaf-outline" size={13} color={t.accent} />
                  <Text style={[styles.metaText, { color: p.textFaint }]}>
                    {t.herbs.length} plants · {t.principles.length} principles
                  </Text>
                  <Ionicons name="chevron-forward" size={15} color={p.textFaint} style={{ marginLeft: 'auto' }} />
                </View>
              </View>
            </View>
          </Pressable>
        </Animated.View>
      ))}

      <Card delay={80} style={{ marginTop: 6 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <Ionicons name="hand-left-outline" size={17} color={p.terracotta} />
          <Text style={{ marginLeft: 8, fontSize: 14.5, fontWeight: '800', color: p.text }}>A note on borrowing</Text>
        </View>
        <Body>
          Yoruba practice, Ayurveda, TCM, Unani and Indigenous American traditions are living systems with living teachers. Reading about them is welcome; practising them responsibly means study, relationship and, where the tradition requires it, initiation. When a plant matters to you, learn it from the people it belongs to.
        </Body>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardTitle: { fontSize: 16, fontWeight: '800' },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 15,
    marginTop: 12,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 1,
  },
  stripe: { width: 5, borderRadius: 4 },
  name: { fontSize: 16, fontWeight: '800' },
  region: { fontSize: 11.5, marginTop: 2, fontWeight: '600' },
  subtitle: { fontSize: 13.5, marginTop: 7, lineHeight: 20 },
  metaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  metaText: { fontSize: 12, marginLeft: 6, fontWeight: '700' },
});
