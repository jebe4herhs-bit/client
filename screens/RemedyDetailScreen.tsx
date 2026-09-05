import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Body, Bullet, Button, Card, HerbTile, Hero, SafetyBanner, SectionTitle, usePalette } from '../components/ui';
import { herbById } from '../lib/herbs';
import { RootStackParamList } from '../lib/nav';
import { formulaById } from '../lib/remedies';

type Nav = NativeStackNavigationProp<RootStackParamList>;
type Rt = RouteProp<RootStackParamList, 'RemedyDetail'>;

export default function RemedyDetailScreen() {
  const p = usePalette();
  const insets = useSafeAreaInsets();
  const nav = useNavigation<Nav>();
  const route = useRoute<Rt>();

  const f = formulaById(route.params.id);

  if (!f) {
    return (
      <View style={{ flex: 1, backgroundColor: p.bg, padding: 20, paddingTop: insets.top + 40 }}>
        <Body>This formula could not be found.</Body>
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
      <Hero colors={[p.primaryDeep, p.primary]} style={{ paddingTop: 16 + insets.top * 0.5 }}>
        <Pressable
          onPress={() => nav.goBack()}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          style={({ pressed }) => [styles.roundBtn, { opacity: pressed ? 0.7 : 1 }]}
        >
          <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.kicker}>ÒGÙN ÀJÉ · FORMULA</Text>
        <Text style={styles.title}>{f.name}</Text>
        <Text style={styles.yoruba}>{f.yoruba}</Text>
        <Text style={styles.goal}>{f.goal}</Text>
        <View style={styles.metaRow}>
          <View style={styles.metaChip}>
            <Ionicons name="speedometer-outline" size={13} color="rgba(255,255,255,0.92)" />
            <Text style={styles.metaText}>{f.level}</Text>
          </View>
          <View style={[styles.metaChip, { marginLeft: 8 }]}>
            <Ionicons name="time-outline" size={13} color="rgba(255,255,255,0.92)" />
            <Text style={styles.metaText}>{f.time}</Text>
          </View>
        </View>
      </Hero>

      <View style={{ marginTop: 16 }}>
        <SafetyBanner tone="gold" text="Food-first, traditional and supportive. For severe or persistent symptoms, book clinical care." onPress={() => nav.navigate('Safety')} />
      </View>

      <SectionTitle title="Herbs in this formula" icon="leaf-outline" />
      <View style={styles.herbRow}>
        {f.herbIds.map((hid) => {
          const h = herbById(hid);
          if (!h) return null;
          return (
            <Pressable
              key={hid}
              onPress={() => nav.navigate('HerbDetail', { id: hid })}
              accessibilityRole="button"
              style={({ pressed }) => [
                styles.herbChip,
                { backgroundColor: p.surface, borderColor: p.border, opacity: pressed ? 0.8 : 1 },
              ]}
            >
              <HerbTile id={hid} name={h.yoruba} size={38} radius={13} />
              <View style={{ marginLeft: 10, flex: 1 }}>
                <Text style={{ fontSize: 13.5, fontWeight: '800', color: p.text }} numberOfLines={1}>
                  {h.yoruba}
                </Text>
                <Text style={{ fontSize: 11.5, color: p.textFaint }} numberOfLines={1}>
                  {h.common}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={15} color={p.textFaint} />
            </Pressable>
          );
        })}
      </View>

      <SectionTitle title="Ìṣèlú ṣiṣẹ́" kicker="method" icon="list-outline" />
      <Card>
        {f.steps.map((s, i) => (
          <Bullet key={s} text={s} index={i + 1} />
        ))}
      </Card>

      <View style={{ flexDirection: 'row', marginTop: 12 }}>
        <Card style={{ flex: 1, marginRight: 10 }}>
          <Text style={[styles.smallKicker, { color: p.gold }]}>DOSE</Text>
          <Text style={[styles.smallText, { color: p.text }]}>{f.dose}</Text>
        </Card>
        <Card style={{ flex: 1 }}>
          <Text style={[styles.smallKicker, { color: p.gold }]}>COURSE</Text>
          <Text style={[styles.smallText, { color: p.text }]}>{f.course}</Text>
        </Card>
      </View>

      <SectionTitle title="Àṣìhò" kicker="cautions" icon="alert-circle-outline" />
      <Card tone="danger">
        {f.cautions.map((c, i) => (
          <Bullet key={c} text={c} tone="danger" index={i + 1} />
        ))}
      </Card>

      <Card tone="danger" style={{ marginTop: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <Ionicons name="medkit-outline" size={17} color={p.danger} />
          <Text style={{ marginLeft: 8, fontSize: 15, fontWeight: '800', color: p.danger }}>When to seek care</Text>
        </View>
        <Text style={{ fontSize: 14, lineHeight: 21, color: p.danger }}>{f.seekCare}</Text>
      </Card>

      <Button
        label="Open safety guidance"
        icon="shield-checkmark-outline"
        variant="ghost"
        style={{ marginTop: 20 }}
        onPress={() => nav.navigate('Safety')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  roundBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  kicker: { color: 'rgba(255,255,255,0.82)', fontSize: 10.5, fontWeight: '900', letterSpacing: 1.6 },
  title: { color: '#FFFFFF', fontSize: 26, fontWeight: '900', marginTop: 6 },
  yoruba: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontStyle: 'italic', marginTop: 3 },
  goal: { color: 'rgba(255,255,255,0.94)', fontSize: 14, lineHeight: 21, marginTop: 12 },
  metaRow: { flexDirection: 'row', marginTop: 14 },
  metaChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: 999,
    paddingHorizontal: 11,
    paddingVertical: 6,
  },
  metaText: { color: '#FFFFFF', fontSize: 12, fontWeight: '700', marginLeft: 6 },
  herbRow: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -5 },
  herbChip: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '47%',
    marginHorizontal: '1.5%',
    marginBottom: 10,
    borderRadius: 16,
    borderWidth: 1,
    padding: 10,
  },
  smallKicker: { fontSize: 10.5, fontWeight: '900', letterSpacing: 1.3, marginBottom: 6 },
  smallText: { fontSize: 13.5, lineHeight: 20, fontWeight: '600' },
});
