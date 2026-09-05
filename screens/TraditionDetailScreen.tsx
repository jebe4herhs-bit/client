import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Body, Bullet, Button, Card, Hero, SafetyBanner, SectionTitle, usePalette } from '../components/ui';
import { RootStackParamList } from '../lib/nav';
import { traditionById } from '../lib/traditions';

type Nav = NativeStackNavigationProp<RootStackParamList>;
type Rt = RouteProp<RootStackParamList, 'TraditionDetail'>;

function shade(hex: string, amount: number): string {
  const clean = hex.replace('#', '');
  const num = parseInt(clean, 16);
  const r = Math.max(0, Math.min(255, ((num >> 16) & 0xff) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0xff) + amount));
  const b = Math.max(0, Math.min(255, (num & 0xff) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export default function TraditionDetailScreen() {
  const p = usePalette();
  const insets = useSafeAreaInsets();
  const nav = useNavigation<Nav>();
  const route = useRoute<Rt>();

  const t = traditionById(route.params.id);

  if (!t) {
    return (
      <View style={{ flex: 1, backgroundColor: p.bg, padding: 20, paddingTop: insets.top + 40 }}>
        <Body>This tradition could not be found.</Body>
        <Button label="Go back" icon="arrow-back" onPress={() => nav.goBack()} style={{ marginTop: 18 }} />
      </View>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: p.bg }}
      contentContainerStyle={{ padding: 18, paddingBottom: insets.bottom + 40 }}
      showsVerticalScrollIndicator={false}
    >
      <Hero colors={[shade(t.accent, -60), t.accent]} style={{ paddingTop: 16 + insets.top * 0.5 }}>
        <Pressable
          onPress={() => nav.goBack()}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          style={({ pressed }) => [styles.roundBtn, { opacity: pressed ? 0.7 : 1 }]}
        >
          <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.kicker}>ÌTÀN ÌGBÀGBỌ́ · TRADITION</Text>
        <Text style={styles.title}>{t.name}</Text>
        <Text style={styles.region}>{t.region}</Text>
        <Text style={styles.subtitle}>{t.subtitle}</Text>
      </Hero>

      <View style={{ marginTop: 16 }}>
        <SafetyBanner tone="gold" text="Spiritual practice supports the person; it does not replace testing, medication or emergency care." onPress={() => nav.navigate('Safety')} />
      </View>

      <SectionTitle title="Ìtàn" kicker="background" icon="book-outline" />
      <Card>
        <Body>{t.intro}</Body>
      </Card>

      <SectionTitle title="Core principles" icon="compass-outline" />
      <Card>
        {t.principles.map((pr, i) => (
          <Bullet key={pr} text={pr} index={i + 1} />
        ))}
      </Card>

      <SectionTitle title="Plants named here" icon="leaf-outline" />
      {t.herbs.map((h, i) => (
        <Card key={h.name} delay={i * 40} style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
            <View style={[styles.dot, { backgroundColor: t.accent }]} />
            <Text style={[styles.herbName, { color: p.text }]}>{h.name}</Text>
          </View>
          <Body style={{ fontSize: 13.5 }}>{h.role}</Body>
        </Card>
      ))}

      <Card tone="danger" style={{ marginTop: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <Ionicons name="lock-closed-outline" size={17} color={p.danger} />
          <Text style={{ marginLeft: 8, fontSize: 15, fontWeight: '800', color: p.danger }}>Where the boundary lies</Text>
        </View>
        <Text style={{ fontSize: 14, lineHeight: 21, color: p.danger }}>{t.boundary}</Text>
      </Card>

      <Button
        label="Back to traditions"
        icon="arrow-back"
        variant="ghost"
        style={{ marginTop: 18 }}
        onPress={() => nav.goBack()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  roundBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  kicker: { color: 'rgba(255,255,255,0.85)', fontSize: 10.5, fontWeight: '900', letterSpacing: 1.6 },
  title: { color: '#FFFFFF', fontSize: 25, fontWeight: '900', marginTop: 6, lineHeight: 31 },
  region: { color: 'rgba(255,255,255,0.85)', fontSize: 12.5, marginTop: 6, fontWeight: '600' },
  subtitle: { color: 'rgba(255,255,255,0.95)', fontSize: 14, marginTop: 12, lineHeight: 21 },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: 9 },
  herbName: { fontSize: 14.5, fontWeight: '800' },
});
