import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Body, Bullet, Button, Card, SafetyBanner, ScreenHeader, SectionTitle, usePalette } from '../components/ui';
import { RootStackParamList } from '../lib/nav';

type Nav = NativeStackNavigationProp<RootStackParamList>;

const RED_FLAGS = [
  'Difficulty breathing, chest pain, or blue/grey lips',
  'Confusion, unresponsiveness, seizure, or a stiff neck with fever',
  'Fever that will not settle, or any fever in pregnancy, in a child under 5, or in an older adult',
  'Heavy bleeding, or bleeding that soaks a pad hourly after childbirth',
  'Severe dehydration — no urine, sunken eyes, sleepiness, or inability to drink',
  'A wound with spreading redness, pus, heat or fever, or any bite from a snake, dog or cat',
  'Persistent vomiting, blood in stool or urine, or severe localized abdominal pain',
];

const BEFORE_USE = [
  'Confirm the identification twice — once by field markers, once with a knowledgeable person. Many medicinal plants have toxic look-alikes.',
  'Check your medicines. Bitter leaf, neem, garlic, ginger, moringa and hibiscus all interact with common prescriptions.',
  'Start low, go slow: one preparation, one dose, then wait before combining anything else.',
  'Never dose children with adult preparations. Honey is not given under 1 year of age.',
  'Keep a written record: what you took, how much, when, and how you felt. Show it at your next clinic visit.',
  'Buy from trusted growers. Wash foraged material; roadside and farm plants carry pesticide residue.',
];

const RELATIONSHIP = [
  'Herbs support care — they do not replace diagnosis, prescribed medication, vaccination, surgery or emergency treatment.',
  'Do not stop or reduce any prescribed medicine because an herb seems to help. Talk to your prescriber first.',
  'Tell your doctor and pharmacist everything you take, including herbal preparations. Many interactions are silent.',
  'Traditional practice and modern medicine are allies. A good healer is not threatened by a good doctor.',
];

const ETHICS = [
  'Harvest with restraint: take less than a third of any stand, and leave enough for the plant and for the pollinators.',
  'Buy nothing marketed as a sacred object of another culture — ceremonial plants, restricted regalia, or “authentic” ritual kits.',
  'Specific ritual protocol belongs to initiated practitioners. This app will not teach what the lineage restricts.',
  'Where a plant is overharvested (white sage, palo santo, wild nettle), grow your own or choose a garden substitute.',
];

export default function SafetyScreen() {
  const p = usePalette();
  const nav = useNavigation<Nav>();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: p.bg }}
      contentContainerStyle={{ paddingHorizontal: 18, paddingBottom: 46 }}
      showsVerticalScrollIndicator={false}
    >
      <ScreenHeader title="Àbò & Ìlera" subtitle="Safety, escalation and respect" onBack={() => nav.goBack()} />

      <SafetyBanner
        tone="danger"
        text="If you or someone near you has severe symptoms, stop reading and get to a health facility now. Call your local emergency number."
      />

      <SectionTitle title="Go to hospital now if…" kicker="red flags" icon="medkit-outline" />
      <Card tone="danger">
        {RED_FLAGS.map((f, i) => (
          <Bullet key={f} text={f} tone="danger" index={i + 1} />
        ))}
      </Card>

      <SectionTitle title="Before you use any herb" kicker="checklist" icon="checkbox-outline" />
      <Card>
        {BEFORE_USE.map((b, i) => (
          <Bullet key={b} text={b} index={i + 1} />
        ))}
      </Card>

      <SectionTitle title="Medicines & interactions" kicker="pharmacy" icon="medkit-outline" />
      <Card>
        <Body>
          Plants are pharmacology. The same bitter principles that lower blood sugar can drop it too far alongside metformin; the same warming compounds that ease a stomach can thin the blood alongside warfarin.
        </Body>
        <View style={{ marginTop: 12 }}>
          <Bullet text="Blood thinners (warfarin, aspirin, clopidogrel) — caution with garlic, ginger, turmeric, bitter kola, kola nut, ewuro." tone="danger" />
          <Bullet text="Diabetes medicines — ewuro, neem, guava leaf, moringa, ginger, hibiscus can add to the effect." tone="danger" />
          <Bullet text="Blood pressure medicines — hibiscus, moringa, garlic, ginger may lower it further." tone="danger" />
          <Bullet text="Antidepressants, contraception, transplant drugs — St John’s Wort (and strong kola intake) can interfere badly." tone="danger" />
          <Bullet text="Chemotherapy and immunosuppressants — check every herbal product with your oncology team." tone="danger" />
        </View>
      </Card>

      <SectionTitle title="Pregnancy, children & elders" kicker="special care" icon="people-outline" />
      <Card tone="gold">
        <Bullet text="Pregnancy: avoid senna (ewú pupa), neem, aloe latex, mugwort, dongoyaro decoctions, and any uterine-stimulating root. Culinary use of ginger, turmeric and scent leaf is fine; medicinal doses need a midwife’s or doctor’s word." tone="danger" />
        <Bullet text="Children: halve doses at most, avoid bitter and purgative herbs entirely, and never use adult decoctions. Fever under 5 goes to a clinic." tone="danger" />
        <Bullet text="Older adults and people with kidney or liver disease: herbs are cleared by these organs. Doses that suit a healthy adult may not suit them." tone="danger" />
      </Card>

      <SectionTitle title="Support, not substitute" kicker="the app’s position" icon="shield-checkmark-outline" />
      <Card tone="green" style={{ backgroundColor: p.greenSoft, borderColor: p.greenSoft }}>
        {RELATIONSHIP.map((r, i) => (
          <Bullet key={r} text={r} tone="green" index={i + 1} />
        ))}
      </Card>

      <SectionTitle title="Culture & ecology" kicker="respect" icon="hand-left-outline" />
      <Card>
        {ETHICS.map((e, i) => (
          <Bullet key={e} text={e} index={i + 1} />
        ))}
      </Card>

      <Card delay={60} style={{ marginTop: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <Ionicons name="information-circle-outline" size={18} color={p.primary} />
          <Text style={{ marginLeft: 8, fontSize: 15, fontWeight: '800', color: p.text }}>About this app</Text>
        </View>
        <Body>
          Ìmọ̀ Ewé is an educational reference for practitioners, students and households working within Yoruba herbal tradition. It records traditional use and emerging research honestly, including where evidence is thin. It does not diagnose, does not prescribe, and does not provide emergency care.
        </Body>
        <Body style={{ marginTop: 10 }}>
          Where a preparation is described, the doses reflect common household practice and general adult use. Your clinician’s advice about your own body always outranks anything written here.
        </Body>
      </Card>

      <Button label="Back" icon="arrow-back" variant="ghost" style={{ marginTop: 18 }} onPress={() => nav.goBack()} />
    </ScrollView>
  );
}
