import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { GlyphName, Hero, usePalette } from '../components/ui';
import { useStore } from '../lib/store';

const PROMISES: { icon: GlyphName; title: string; body: string }[] = [
  {
    icon: 'scan-outline',
    title: 'Identify before you use',
    body: 'Field markers — leaf shape, margin, scent, flower and habit — are matched against a curated ethnobotanical record, with a confidence score and the reasoning shown.',
  },
  {
    icon: 'book-outline',
    title: 'Monographs, not myths',
    body: 'Each herb carries its Yoruba name, botanical identity, traditional use, gentle preparations, nutrition, cautions and interaction profile.',
  },
  {
    icon: 'shield-checkmark-outline',
    title: 'Supports healthcare, never replaces it',
    body: 'This app is an ally to your clinic, not a rival to it. Red flags, escalation advice and medicine-interaction warnings appear on every monograph.',
  },
  {
    icon: 'sparkles-outline',
    title: 'The spiritual dimension, held respectfully',
    body: 'Òrìṣà correspondences, world traditions and the ethics of sacred plants — taught as context, with the boundaries of initiated practice kept intact.',
  },
];

export default function OnboardingScreen() {
  const p = usePalette();
  const insets = useSafeAreaInsets();
  const { acknowledge } = useStore();
  const [agreed, setAgreed] = useState(false);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: p.bg }}
      contentContainerStyle={{ padding: 20, paddingTop: insets.top + 18, paddingBottom: insets.bottom + 34 }}
      showsVerticalScrollIndicator={false}
    >
      <Hero colors={[p.primaryDeep, p.primary]} style={{ padding: 24, marginBottom: 22 }}>
        <View style={styles.markRow}>
          <View style={styles.mark}>
            <Ionicons name="leaf" size={22} color="#FFFFFF" />
          </View>
          <Text style={styles.markLabel}>YORUBA HERBAL PRACTICE</Text>
        </View>
        <Text style={styles.title}>Ìmọ̀ Ewé</Text>
        <Text style={styles.subtitle}>Knowledge of the leaf — identification, remedies and reverence, held safely.</Text>
        <View style={styles.heroFoot}>
          <Ionicons name="heart-circle-outline" size={15} color="rgba(255,255,255,0.9)" />
          <Text style={styles.heroFootText}>Built for practitioners, students and households</Text>
        </View>
      </Hero>

      {PROMISES.map((item, i) => (
        <Animated.View
          key={item.title}
          entering={FadeInDown.delay(120 * i).duration(360).springify().damping(18)}
          style={[styles.promise, { backgroundColor: p.surface, borderColor: p.border, shadowColor: p.shadow }]}
        >
          <View style={[styles.promiseIcon, { backgroundColor: p.primarySoft }]}>
            <Ionicons name={item.icon} size={20} color={p.primary} />
          </View>
          <View style={{ flex: 1, marginLeft: 13 }}>
            <Text style={[styles.promiseTitle, { color: p.text }]}>{item.title}</Text>
            <Text style={[styles.promiseBody, { color: p.textMuted }]}>{item.body}</Text>
          </View>
        </Animated.View>
      ))}

      <View style={[styles.notice, { backgroundColor: p.dangerSoft, borderColor: p.dangerSoft }]}>
        <Ionicons name="medkit-outline" size={20} color={p.danger} style={{ marginRight: 10, marginTop: 1 }} />
        <Text style={[styles.noticeText, { color: p.danger }]}>
          This app does not diagnose, prescribe or replace emergency care. If you are severely unwell — high fever, difficulty breathing, chest pain, heavy bleeding, confusion — go to a health facility now.
        </Text>
      </View>

      <Pressable
        onPress={() => setAgreed((v) => !v)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: agreed }}
        style={({ pressed }) => [styles.agree, { opacity: pressed ? 0.8 : 1 }]}
      >
        <Ionicons
          name={agreed ? 'checkbox' : 'square-outline'}
          size={24}
          color={agreed ? p.green : p.textFaint}
        />
        <Text style={[styles.agreeText, { color: p.textMuted }]}>
          I understand this is educational and supportive material, and that serious illness needs a qualified clinician.
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          if (agreed) void acknowledge();
        }}
        disabled={!agreed}
        accessibilityRole="button"
        style={({ pressed }) => [
          styles.cta,
          {
            backgroundColor: agreed ? p.primary : p.surfaceAlt,
            borderColor: agreed ? p.primary : p.border,
            opacity: pressed ? 0.9 : 1,
          },
        ]}
      >
        <Text style={[styles.ctaText, { color: agreed ? p.onPrimary : p.textFaint }]}>Bóyá — enter the app</Text>
        <Ionicons name="arrow-forward" size={18} color={agreed ? p.onPrimary : p.textFaint} />
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  markRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  mark: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  markLabel: { color: 'rgba(255,255,255,0.85)', fontSize: 11, fontWeight: '800', letterSpacing: 1.6 },
  title: { color: '#FFFFFF', fontSize: 36, fontWeight: '900', letterSpacing: 0.4 },
  subtitle: { color: 'rgba(255,255,255,0.9)', fontSize: 14.5, lineHeight: 21, marginTop: 8, fontWeight: '500' },
  heroFoot: { flexDirection: 'row', alignItems: 'center', marginTop: 18 },
  heroFootText: { color: 'rgba(255,255,255,0.88)', fontSize: 12.5, marginLeft: 7, fontWeight: '600' },
  promise: {
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
    padding: 15,
    marginBottom: 12,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 1,
  },
  promiseIcon: { width: 42, height: 42, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  promiseTitle: { fontSize: 15.5, fontWeight: '800', marginBottom: 4 },
  promiseBody: { fontSize: 13.2, lineHeight: 19.5 },
  notice: { flexDirection: 'row', borderRadius: 16, padding: 14, marginTop: 10 },
  noticeText: { flex: 1, fontSize: 12.8, lineHeight: 19, fontWeight: '600' },
  agree: { flexDirection: 'row', alignItems: 'center', marginTop: 18, marginBottom: 14 },
  agreeText: { flex: 1, marginLeft: 10, fontSize: 13, lineHeight: 19 },
  cta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 999,
    borderWidth: 1.5,
  },
  ctaText: { fontSize: 15.5, fontWeight: '800', marginRight: 8 },
});
