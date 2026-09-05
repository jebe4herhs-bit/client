import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Button, Card, GlyphName, HerbTile, SafetyBanner, SectionTitle, usePalette } from '../components/ui';
import { herbs, SUPPORT_LINE } from '../lib/herbs';
import { RootStackParamList, TabParamList } from '../lib/nav';
import { formulas } from '../lib/remedies';
import { useStore } from '../lib/store';
import { useThemeMeta } from '../lib/themeContext';
import { traditions } from '../lib/traditions';

type Nav = NativeStackNavigationProp<RootStackParamList>;

const WISDOM = [
  'Ewé kan kì í ṣe ògùn gbogbo — one leaf is never the cure for everything.',
  'Ògùn tuntun kì í faṣẹ̀ tó jẹ́ — new medicine does not erase the old; it joins it.',
  'Bí a bá ṣe ìwò ewé láì mọ̀ orí rẹ̀, a lè fa ìbà ara — misused leaf invites illness.',
  'Oníṣègùn dára kì í gbé kí ìwòsàn máa wá — a good practitioner does not stand between you and the hospital.',
  'Oyin kì í jẹ́ bí ewuro — honey is not bitter leaf; each has its own work.',
  'Àṣà kì í ṣubú ìlera — tradition should never cost you your health.',
];

const ACTIONS: { icon: GlyphName; label: string; sub: string; tab: keyof TabParamList }[] = [
  { icon: 'scan-outline', label: 'Identify', sub: 'Field markers → match', tab: 'Identify' },
  { icon: 'leaf-outline', label: 'Library', sub: `${herbs.length} monographs`, tab: 'Library' },
  { icon: 'flask-outline', label: 'Remedies', sub: `${formulas.length} formulas`, tab: 'Remedies' },
  { icon: 'sparkles-outline', label: 'Traditions', sub: `${traditions.length} lineages`, tab: 'Traditions' },
];

function dayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now.getTime() - start.getTime()) / 86400000);
}

export default function HomeScreen() {
  const p = usePalette();
  const insets = useSafeAreaInsets();
  const nav = useNavigation<Nav>();
  const { saved, recents } = useStore();
  const { isDark, setMode } = useThemeMeta();

  const hour = new Date().getHours();
  const greeting = hour < 11 ? 'E káàárọ̀' : hour < 17 ? 'Ẹ kú iṣẹ́' : hour < 21 ? 'E kú ilé' : 'E kú rọ̀';
  const dof = dayOfYear();
  const herb = herbs[dof % herbs.length];
  const wisdom = WISDOM[dof % WISDOM.length];

  const goTab = (name: keyof TabParamList) => {
    nav.navigate('Tabs', { screen: name });
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: p.bg }}
      contentContainerStyle={{ paddingHorizontal: 18, paddingTop: insets.top + 10, paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topRow}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.greet, { color: p.textMuted }]}>{greeting}</Text>
          <Text style={[styles.appName, { color: p.text }]}>Ìmọ̀ Ewé</Text>
        </View>
        <Pressable
          onPress={() => setMode(isDark ? 'light' : 'dark')}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel="Toggle colour theme"
          style={({ pressed }) => [styles.iconBtn, { backgroundColor: p.surfaceAlt, borderColor: p.border, opacity: pressed ? 0.7 : 1 }]}
        >
          <Ionicons name={isDark ? 'sunny-outline' : 'moon-outline'} size={19} color={p.text} />
        </Pressable>
        <Pressable
          onPress={() => nav.navigate('Safety')}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel="Safety guidance"
          style={({ pressed }) => [
            styles.iconBtn,
            { backgroundColor: p.surfaceAlt, borderColor: p.border, marginLeft: 10, opacity: pressed ? 0.7 : 1 },
          ]}
        >
          <Ionicons name="shield-checkmark-outline" size={19} color={p.text} />
        </Pressable>
      </View>

      <SafetyBanner text={SUPPORT_LINE} onPress={() => nav.navigate('Safety')} tone="gold" />

      <Animated.View entering={FadeInDown.duration(360).springify().damping(18)}>
        <View
          style={[styles.heroCard, { backgroundColor: p.surface, borderColor: p.border, shadowColor: p.shadow }]}
        >
          <View style={styles.heroHead}>
            <Text style={[styles.heroKicker, { color: p.gold }]}>EWÉ ÓÒJÍ · HERB OF THE DAY</Text>
            <Ionicons name="sparkles" size={15} color={p.gold} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
            <HerbTile id={herb.id} name={herb.yoruba} size={68} radius={20} />
            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={[styles.heroName, { color: p.text }]}>{herb.yoruba}</Text>
              <Text style={[styles.heroCommon, { color: p.textMuted }]}>
                {herb.common} · <Text style={{ fontStyle: 'italic' }}>{herb.botanical}</Text>
              </Text>
              <Text style={[styles.heroPron, { color: p.textFaint }]}>{herb.pron}</Text>
            </View>
          </View>
          <Text style={[styles.heroTagline, { color: p.textMuted }]}>{herb.tagline}</Text>
          <View style={{ flexDirection: 'row', marginTop: 14 }}>
            <Button
              label="Open monograph"
              icon="book-outline"
              onPress={() => nav.navigate('HerbDetail', { id: herb.id })}
              style={{ flex: 1, paddingVertical: 12 }}
            />
            <Button
              label="Identify"
              icon="scan-outline"
              variant="ghost"
              onPress={() => goTab('Identify')}
              style={{ flex: 1, marginLeft: 10, paddingVertical: 12 }}
            />
          </View>
        </View>
      </Animated.View>

      <SectionTitle title="Quick actions" icon="grid-outline" />
      <View style={styles.grid}>
        {ACTIONS.map((a, i) => (
          <Animated.View
            key={a.label}
            entering={FadeInDown.delay(80 * i).duration(320).springify().damping(18)}
            style={[styles.gridItem, { backgroundColor: p.surface, borderColor: p.border, shadowColor: p.shadow }]}
          >
            <Pressable
              onPress={() => goTab(a.tab)}
              style={({ pressed }) => ({ opacity: pressed ? 0.75 : 1, flex: 1 })}
              accessibilityRole="button"
            >
              <View style={[styles.gridIcon, { backgroundColor: p.primarySoft }]}>
                <Ionicons name={a.icon} size={19} color={p.primary} />
              </View>
              <Text style={[styles.gridLabel, { color: p.text }]}>{a.label}</Text>
              <Text style={[styles.gridSub, { color: p.textFaint }]}>{a.sub}</Text>
            </Pressable>
          </Animated.View>
        ))}
      </View>

      <SectionTitle title="Ìràwó ìwé" kicker="your practice" icon="bookmark-outline" />
      <Card tone="alt">
        <View style={styles.statsRow}>
          <Stat value={saved.length} label="saved herbs" p={p} />
          <View style={[styles.statDivider, { backgroundColor: p.border }]} />
          <Stat value={recents.length} label="recent matches" p={p} />
          <View style={[styles.statDivider, { backgroundColor: p.border }]} />
          <Stat value={herbs.length} label="monographs" p={p} />
        </View>
        <Pressable
          onPress={() => goTab('Library')}
          style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1, marginTop: 14 })}
          accessibilityRole="button"
        >
          <View style={[styles.linkRow, { borderColor: p.border, backgroundColor: p.surface }]}>
            <Ionicons name="leaf-outline" size={16} color={p.primary} />
            <Text style={[styles.linkText, { color: p.text }]}>
              {saved.length ? 'Review your saved monographs' : 'Bookmark herbs you work with often'}
            </Text>
            <Ionicons name="chevron-forward" size={16} color={p.textFaint} />
          </View>
        </Pressable>
      </Card>

      <SectionTitle title="Ọ̀rọ̀ ọjọ́" kicker="word for today" icon="chatbubble-ellipses-outline" />
      <Card tone="gold" delay={60}>
        <Text style={[styles.wisdom, { color: p.text }]}>{wisdom}</Text>
        <Text style={[styles.wisdomNote, { color: p.textMuted }]}>
          Spoken practice is part of the method — in Yoruba healing, preparation and instruction travel together.
        </Text>
      </Card>
    </ScrollView>
  );
}

function Stat({ value, label, p }: { value: number; label: string; p: ReturnType<typeof usePalette> }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: '900', color: p.text }}>{value}</Text>
      <Text style={{ fontSize: 11.5, color: p.textMuted, marginTop: 2, textAlign: 'center' }}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  greet: { fontSize: 13, fontWeight: '700', letterSpacing: 0.4 },
  appName: { fontSize: 27, fontWeight: '900', letterSpacing: 0.3, marginTop: 1 },
  iconBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroCard: {
    borderRadius: 26,
    borderWidth: 1,
    padding: 18,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.09,
    shadowRadius: 16,
    elevation: 2,
  },
  heroHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  heroKicker: { fontSize: 10.5, fontWeight: '900', letterSpacing: 1.5 },
  heroName: { fontSize: 24, fontWeight: '900' },
  heroCommon: { fontSize: 13.5, fontWeight: '600', marginTop: 2 },
  heroPron: { fontSize: 12, marginTop: 3, fontStyle: 'italic' },
  heroTagline: { fontSize: 14, lineHeight: 21, marginTop: 13 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -5 },
  gridItem: {
    width: '48%',
    flexGrow: 0,
    borderRadius: 20,
    borderWidth: 1,
    padding: 14,
    marginHorizontal: '1%',
    marginBottom: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 1,
  },
  gridIcon: { width: 38, height: 38, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginBottom: 10 },
  gridLabel: { fontSize: 15, fontWeight: '800' },
  gridSub: { fontSize: 11.8, marginTop: 2 },
  statsRow: { flexDirection: 'row', alignItems: 'center' },
  statDivider: { width: 1, height: 34 },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: 13,
    paddingVertical: 12,
  },
  linkText: { flex: 1, marginLeft: 9, fontSize: 13.5, fontWeight: '700' },
  wisdom: { fontSize: 16, lineHeight: 24, fontWeight: '700', fontStyle: 'italic' },
  wisdomNote: { fontSize: 12.8, lineHeight: 19, marginTop: 10 },
});
