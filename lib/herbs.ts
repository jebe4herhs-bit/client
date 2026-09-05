/**
 * Ìmọ̀ Ewé — Yoruba ethnobotanical knowledge base.
 *
 * Every entry records: identity, field identification cues, traditional Yoruba
 * practice, gentle preparations, nutrition, cautions/interactions, research
 * status and the spiritual dimension held within the tradition.
 *
 * This is educational and supportive material. It never replaces diagnosis,
 * prescription or emergency care from a qualified clinician.
 */

export type Traits = {
  shape: 'oval' | 'lance' | 'compound' | 'broad' | 'needle' | 'lobed' | 'heart';
  edge: 'smooth' | 'serrated' | 'wavy' | 'lobed';
  color: 'deep' | 'light' | 'red' | 'grey';
  scent: 'aromatic' | 'pungent' | 'bitter' | 'mild' | 'earthy';
  flower: 'white' | 'yellow' | 'purple' | 'red' | 'green';
  habit: 'herb' | 'shrub' | 'tree' | 'climber';
};

export type Remedy = {
  name: string;
  prepare: string;
  use: string;
  caution?: string;
};

export type Herb = {
  id: string;
  yoruba: string;
  pron: string;
  common: string;
  botanical: string;
  family: string;
  parts: string[];
  tags: string[];
  tagline: string;
  traits: Traits;
  idCues: {
    leaves: string;
    flowers: string;
    scent: string;
    habit: string;
    tip: string;
  };
  traditional: string;
  remedies: Remedy[];
  nutrition: string[];
  cautions: string[];
  evidence: string;
  orisha: string[];
  spiritual: { yoruba: string; global: string };
};

export const herbs: Herb[] = [
  {
    id: 'efinrin',
    yoruba: 'Efinrin',
    pron: 'eh-FEEN-rin',
    common: 'Scent Leaf',
    botanical: 'Ocimum gratissimum',
    family: 'Lamiaceae (mint family)',
    parts: ['Leaf', 'Seed', 'Essential oil'],
    tags: ['Digestive', 'Respiratory', 'Antimicrobial', 'Kitchen'],
    tagline: 'The aromatic leaf of every Yoruba kitchen — warming, clarifying, calming.',
    traits: { shape: 'oval', edge: 'serrated', color: 'deep', scent: 'aromatic', flower: 'purple', habit: 'shrub' },
    idCues: {
      leaves: 'Opposite, egg-shaped leaves with fine teeth, slightly hairy beneath, 3–8 cm.',
      flowers: 'Small white-to-purple whorls on a tall spike in the rainy season.',
      scent: 'Crush a leaf: clove-peppery, camphor-like aroma — unmistakable.',
      habit: 'Half-shrubby annual herb, 30–100 cm, often self-sown around compounds.',
      tip: 'Many "efirin" sold in markets are sweet basil (O. basilicum); true efinrin is stronger, clovier and slightly bitter.',
    },
    traditional:
      'Efinrin is the signature leaf of Yoruba cooking — flavouring ofada rice, efo riro, pepper soup and stews. Beyond the pot, elders steep the leaf for Watery eyes and early catarrh, chew the seed in honey for stomach gripes, and steam the vapor for a blocked head. The leaf is also a compound-cleansing plant: bundles are swept through doorways at early-morning cleansing rites.',
    remedies: [
      {
        name: 'Efinrin steam (head & chest)',
        prepare: 'Boil a generous handful of fresh leaf in 1 litre of water for 5 minutes. Inhale the vapor with a cloth over the head for 5–8 minutes, 2× daily for up to 4 days.',
        use: 'Traditional support for blocked nose, steam-clearing of the head at the start of a cold.',
        caution: 'Keep 30 cm from the steam; do not use with infants or with asthma that is triggered by strong aromas.',
      },
      {
        name: 'Efinrin & honey infusion',
        prepare: 'Tear 6–8 leaves, steep in just-boiled water (not rolling boil) covered for 10 minutes. Strain, add a spoon of raw honey. Half a cup, warm, twice daily for up to 5 days.',
        use: 'Gentle digestive comfort and throat soothing after pepper-heavy meals.',
        caution: 'No honey for children under 1 year. Strong aromatic oils can irritate a raw stomach lining.',
      },
      {
        name: 'Seed in honey (traditional belly ease)',
        prepare: 'Soak 1 teaspoon of efinrin seed in a jar of honey for 3 days; take 1 teaspoon of the honey with seeds on an empty stomach.',
        use: 'Classical household remedy for mild stomach discomfort and appetite.',
        caution: 'Aromatic seeds can increase reflux in sensitive people — stop if it burns.',
      },
    ],
    nutrition: [
      'Rich source of vitamin A (beta-carotene) and vitamin C — a cup of cooked leaf covers a meaningful share of daily needs.',
      'Essential oil is dominated by eugenol and citral compounds studied for antimicrobial activity.',
      'Contains calcium, iron and magnesium; cooking softens the leaf and improves mineral availability.',
      'Used as a food-grade preservative: leaf extracts slow bacterial growth in stored peppersoup and stews.',
    ],
    cautions: [
      'Essential oil of efinrin is concentrated — never ingest undiluted; keep oil away from eyes.',
      'May enhance the effect of blood-thinning and diabetes medicines; monitor and inform your clinician.',
      'Best avoided in large medicinal amounts during pregnancy without a midwife or doctor’s guidance.',
      'Foraged leaves near roadsides and farms carry pesticide and dust residues — wash thoroughly and buy from trusted growers.',
    ],
    evidence:
      'Laboratory and small clinical studies support antimicrobial, anti-inflammatory and modest glucose-lowering effects of O. gratissimum. Evidence is promising but not a substitute for prescribed treatment of infection or diabetes.',
    orisha: ['Oshun'],
    spiritual: {
      yoruba: 'Efinrin belongs to the fragrant, cooling family of plants associated with Oshun, orisha of fresh water, sweetness and fertility. Leaves are used to wash ritual vessels and to sprinkle cool water at the threshold; the aroma is said to "open the way" for dialogue and to soften heated situations.',
      global: 'Aromatic mints and basils appear across the world’s sacred kitchens — tulsi in Hindu daily puja, holy basil in Thai spirit houses, basil in Mediterranean Christian blessing rites. The pattern is consistent: scent marks a boundary between the ordinary and the cared-for.',
    },
  },
  {
    id: 'ewuro',
    yoruba: 'Ewuro',
    pron: 'EH-woo-roh',
    common: 'Bitter Leaf',
    botanical: 'Vernonia amygdalina',
    family: 'Asteraceae',
    parts: ['Leaf', 'Root bark'],
    tags: ['Digestive', 'Metabolic', 'Detox', 'Fevers'],
    tagline: 'The bitter green that anchors Yoruba soups and steadies the blood.',
    traits: { shape: 'lance', edge: 'wavy', color: 'deep', scent: 'bitter', flower: 'purple', habit: 'shrub' },
    idCues: {
      leaves: 'Long, pointed leaves in wavy-edged pairs, dark green above, paler beneath, 5–15 cm.',
      flowers: 'Flat-topped clusters of tiny purple-mauve florets on tall stalks.',
      scent: 'No aroma — bitterness on the tip of the tongue is the signature.',
      habit: 'Perennial shrub to 2 m, regrows vigorously from cuttings in compound hedges.',
      tip: 'Washing reduces bitterness but also reduces some active compounds — traditional cooks wash just enough.',
    },
    traditional:
      'Ewuro is cooked as ewuro soup and as a bitter tonic for the whole family. Elders value it for "hot blood" — feverish conditions, and as an appetite restorer after illness. It is the leaf most associated with steady, unsweetened healing in the household: a small cup of the boiled water is taken before food.',
    remedies: [
      {
        name: 'Ewuro bitter water',
        prepare: 'Wash 10 leaves thoroughly, boil in 2 cups of water down to 1 cup. Strain; take half a cup 20 minutes before food, twice daily, for up to 2 weeks.',
        use: 'Traditional appetite and digestion support; used in family practice for steadying sugar after meals.',
        caution: 'Do not combine with prescribed diabetes medicine without monitoring — blood sugar can drop too low.',
      },
      {
        name: 'Ewuro soup base',
        prepare: 'Wash and squeeze the leaves 3–4 times to soften bitterness, then cook with iru (locust bean), palm oil and assorted proteins as usual.',
        use: 'Daily food-as-medicine: bitter principles taken routinely with a nourishing meal.',
        caution: 'Bitter soup can trigger nausea in people with gastritis or ulcers.',
      },
    ],
    nutrition: [
      'Very high in vitamin C and a good source of vitamin A, folate and riboflavin.',
      'Bitter sesquiterpene lactones (vernolide, vernodalin) are the studied bitter principles.',
      'Provides protein, calcium and amino acids unusual for a leafy green.',
      'Contains antioxidant polyphenols that protect cells from oxidative stress in laboratory models.',
    ],
    cautions: [
      'Do not use in pregnancy or while breastfeeding without clinical guidance.',
      'Interacts with diabetes and hypertension medicines — blood sugar and blood pressure should be monitored.',
      'Large or prolonged doses may cause diarrhoea and stomach cramping; the root bark is stronger than the leaf.',
      'Chronic heavy use has been linked in case reports to liver strain; cycles rather than continuous months are wiser.',
    ],
    evidence:
      'Multiple small clinical trials show ewuro extracts lower fasting blood sugar and lipids modestly. The WHO lists Vernonia in its research priority list. It supports, but does not replace, metformin or antihypertensives prescribed to you.',
    orisha: ['Ogun'],
    spiritual: {
      yoruba: 'Bitterness is a medicine virtue in Yoruba thought — what purges the body also purges misfortune. Ewuro is offered at Ogun-facing shrines where work, discipline and honesty are asked for, and is used in "cooling the heat" of quarrels in the household.',
      global: 'Bitter tonics carry the same meaning in European folk physic (gentian before communion) and in Ayurveda (tikta rasa, bitter taste, which clears ama). Bitter is the taste that asks the body to pay attention.',
    },
  },
  {
    id: 'dongoyaro',
    yoruba: 'Dongoyaro',
    pron: 'dohn-goh-YAH-rah',
    common: 'Neem',
    botanical: 'Azadirachta indica',
    family: 'Meliaceae',
    parts: ['Leaf', 'Bark', 'Seed oil'],
    tags: ['Antimicrobial', 'Skin', 'Fevers', 'Pest control'],
    tagline: 'The village pharmacy tree — bitter, protective and everywhere in Yorubaland.',
    traits: { shape: 'compound', edge: 'serrated', color: 'deep', scent: 'bitter', flower: 'white', habit: 'tree' },
    idCues: {
      leaves: 'Long feathery compound leaves; each leaflet is sickle-shaped, finely toothed and glossy.',
      flowers: 'Fragrant cream-white thread-like flowers in drooping clusters before the rains.',
      scent: 'Crushed leaves smell green and bitter; the bark smells faintly of garlic.',
      habit: 'Fast evergreen tree, 10–25 m, common along paths, schools and cemeteries.',
      tip: 'Neem leaflet tips curve to one side like a sickle — this separates it from similar compound-leaved trees.',
    },
    traditional:
      'Dongoyaro is the household first-line for fevers and skin eruptions. Leaf decoctions are bathed over the body for rashes and itching, chewed for toothache, and hung or burned to drive mosquitoes from rooms. Its arrival in Yoruba medicine (from South Asia, centuries ago) shows how the tradition absorbs and Yoruba-ises foreign plants.',
    remedies: [
      {
        name: 'Dongoyaro leaf decoction (fever bath)',
        prepare: 'Boil 2 handfuls of leaf in 4 litres of water for 15 minutes. Cool, strain into the bath water and sponge the body, especially forehead and joints. Repeat morning and evening.',
        use: 'Traditional fever comfort and skin cooling during malaria-type illnesses.',
        caution: 'Fever with stiff neck, confusion, seizures or inability to drink is an emergency — go to a health facility immediately.',
      },
      {
        name: 'Neem tooth chew (dental)',
        prepare: 'Use a fresh, clean twig or 2–3 young leaves; chew the fibre into a soft brush and brush the gums for 2 minutes, then rinse.',
        use: 'Gum health and mouth hygiene; traditional dentistry practice.',
        caution: 'Do not swallow the bitter juice; avoid in pregnancy.',
      },
      {
        name: 'Neem oil skin balm (diluted)',
        prepare: 'Mix 1 part neem oil with 10 parts coconut or olive oil. Apply a thin layer to affected skin twice daily for up to 10 days.',
        use: 'Traditional support for ringworm-type, fungal and insect-bite skin irritation.',
        caution: 'Undiluted neem oil burns skin. Stop if redness spreads. Persistent rashes need a clinician’s diagnosis.',
      },
    ],
    nutrition: [
      'Young leaves are eaten in small quantities as a bitter vegetable, supplying iron and fibre.',
      'Limbin and azadirachtin are the bitter defence compounds studied for antimicrobial and antiparasitic action.',
      'Seed oil is rich in oleic and stearic acids and is used topically rather than as food.',
      'Not a daily food herb — small amounts only, as bitterness indicates concentrated chemistry.',
    ],
    cautions: [
      'Neem is contraceptive in research models and is traditionally avoided in pregnancy — do not use medicinally while pregnant or trying to conceive.',
      'Toxic in large doses; never give internal neem preparations to children.',
      'Contains compounds that can lower blood sugar — monitor if on diabetes therapy.',
      'Rare cases of severe metabolic acidosis have followed heavy internal use in children — internal use should be adult, brief and supervised.',
    ],
    evidence:
      'Neem is one of the most-researched medicinal trees: azadirachtin has proven insecticidal and antifungal activity, and leaf extracts show antiplasmodial effects in vitro. For malaria, artemisinin-based therapy remains the only proven cure — neem is comfort care only, until you have been tested.',
    orisha: ['Ogun', 'Oya'],
    spiritual: {
      yoruba: 'Neem’s bitterness places it among plants that "hold the line" — used in protective washes for thresholds and in rites that clear stubborn negativity. It is common in cemeteries because the tradition holds that the dead must be respected, not invited to dinner.',
      global: 'Neem is the sacred tree of Ayurvedic dentistry and temple courtyards in India, and appears in Southeast Asian protective amulets. Across cultures, a tree planted at a boundary is a living fence — both physical and spiritual.',
    },
  },
  {
    id: 'ewe-pupa',
    yoruba: 'Ewé Pupa',
    pron: 'EH-weh POO-pah',
    common: 'Senna / Candlestick Senna',
    botanical: 'Senna alata',
    family: 'Fabaceae (legume family)',
    parts: ['Leaf'],
    tags: ['Purgative', 'Skin', 'Digestive'],
    tagline: 'The candlestick plant — a powerful purgative that must be respected, not abused.',
    traits: { shape: 'compound', edge: 'smooth', color: 'deep', scent: 'mild', flower: 'yellow', habit: 'shrub' },
    idCues: {
      leaves: 'Large paired oval leaflets, up to 15 cm, arranged like a feather along the stalk.',
      flowers: 'Bright yellow candle-like spikes that stand upright above the foliage.',
      scent: 'Almost scentless; leaflets may stain yellow when crushed.',
      habit: 'Fast shrub, 1–3 m, with winged red-brown seed pods.',
      tip: 'The upright yellow "candle" flower spike is unique — no other common compound-leaved shrub flowers this way.',
    },
    traditional:
      'Ewú pupa (also called ewú ńgbẹ̀ in some towns) is the classic purgative of the Yoruba compound, given deliberately and sparingly to "clear the belly". Beyond internal use, the leaf is pounded for skin sores and fungal itching, and the root is a last-resort fever decoction under an elder’s instruction.',
    remedies: [
      {
        name: 'Single-dose clearing tea',
        prepare: 'Steep 2–3 fresh leaflets in 1 cup of hot water for 10 minutes. Drink ONE cup only, in the morning.',
        use: 'Traditional short-course bowel clearing for constipation.',
        caution: 'One cup, once. Repeated dosing causes dehydration, potassium loss and a "lazy bowel" that cannot work without the herb.',
      },
      {
        name: 'Leaf wash for itchy, fungal skin',
        prepare: 'Boil 10 leaflets in 2 litres of water for 15 minutes; cool and wash the affected skin twice daily for up to 10 days.',
        use: 'Traditional support for ringworm, jock itch and heat rash.',
        caution: 'Yellow leaf pigments stain fabric and light skin temporarily. Do not apply to open deep wounds.',
      },
    ],
    nutrition: [
      'Not a food herb — its value is functional, not nutritional.',
      'Contains anthraquinone glycosides (sennosides) that stimulate the bowel; these are the same compounds standardised in WHO-listed senna medicines.',
      'Trace calcium and magnesium — but purging loses more minerals than it supplies.',
    ],
    cautions: [
      'Absolutely avoided in pregnancy (can trigger uterine contractions), in children, and in people with bowel obstruction, appendicitis pain or inflammatory bowel disease.',
      'Never combine with prescribed laxatives or diuretics — dangerous dehydration and potassium loss follow.',
      'Do not use for more than 1–2 consecutive days; chronic use damages the gut lining and nerve supply.',
      'Abdominal pain with vomiting, blood in stool, or no bowel movement after use = go to hospital, do not dose again.',
    ],
    evidence:
      'Senna is an official medicine in the Nigerian and WHO pharmacopoeias for short-term constipation. The pharmacology is strong and the risk is misuse: this is a drug-strength plant in a leaf.',
    orisha: [],
    spiritual: {
      yoruba: 'Deliberate purging before rites and travel is an old Yoruba practice — clearing the body to make room for the work of the day. Ewú pupa appears in that domestic discipline, and its bright yellow spikes are read as a plant that "stands up straight".',
      global: 'Purgative rituals before sacred ceremonies appear from Greek temple medicine to Amazonian diets — the shared logic is that a cleansed body receives instruction more cleanly.',
    },
  },
  {
    id: 'ewe-tete',
    yoruba: 'Ewé Tètè',
    pron: 'EH-weh TEH-teh',
    common: 'Chamber Bitter / Guinea Hen Weed',
    botanical: 'Phyllanthus amarus',
    family: 'Phyllanthaceae',
    parts: ['Whole plant', 'Leaf'],
    tags: ['Liver', 'Urinary', 'Digestive', 'Fevers'],
    tagline: 'A small plant that grows where children play — the "stone-breaker" of the compound.',
    traits: { shape: 'oval', edge: 'smooth', color: 'light', scent: 'mild', flower: 'green', habit: 'herb' },
    idCues: {
      leaves: 'Tiny neat oval leaves in two rows along a slender stem, each with a row of minute flowers or fruits beneath.',
      flowers: 'Minute, greenish, hidden under the leaves — the seed dots underneath identify it.',
      scent: 'Mild, slightly grassy; no strong aroma.',
      habit: 'Slender annual 20–50 cm, thriving in damp, trodden soil and farm edges.',
      tip: 'Turn the stem over: the neat line of tiny round capsules under the leaves is diagnostic.',
    },
    traditional:
      'Ewé tètè is the plant of childhood in Yoruba towns — children know it, and so do grandmothers. It is steeped for "yellow fever" of the urine, for stomach gripes in weaning children (in tiny doses), and as a liver-cooling tonic after long illness.',
    remedies: [
      {
        name: 'Ewé tètè infusion',
        prepare: 'A small handful of fresh whole plant steeped in 2 cups of hot water for 15 minutes, strained. Half a cup twice daily for up to 10 days.',
        use: 'Traditional urinary tract comfort and after-illness liver support.',
        caution: 'Burning urine, fever with back pain, or blood in urine means urinary infection — you need antibiotics from a clinic, not herbs alone.',
      },
      {
        name: 'Post-illness tonic with honey',
        prepare: 'Steep a handful in 1 cup hot water 10 minutes; sweeten with a little honey and sip after food twice daily for 5–7 days.',
        use: 'Appetite and strength recovery after fever.',
        caution: 'Avoid in pregnancy and while breastfeeding.',
      },
    ],
    nutrition: [
      'Contains lignans (phyllanthin, hypophyllanthin) studied for liver protective effects.',
      'Source of tannins, flavonoids and ellagic acid antioxidants.',
      'Small amounts of calcium, potassium and vitamin B complex.',
      'Traditionally given in small paediatric doses — the dose makes the medicine.',
    ],
    cautions: [
      'Avoid in pregnancy and breastfeeding without clinical advice.',
      'May add to the effect of diabetes and blood-pressure medicines.',
      'Large doses can cause diarrhoea and abdominal discomfort.',
      'Not for people awaiting liver transplant or with diagnosed severe liver disease — discuss with your hepatologist first.',
    ],
    evidence:
      'Phyllanthus species have decades of research for hepatitis B and anti-lithic (stone-passing) effects, with mixed but positive signals. It is not a cure for hepatitis B: antiviral therapy and monitoring remain essential.',
    orisha: ['Oshun'],
    spiritual: {
      yoruba: 'A plant that grows in the open yard is a plant that belongs to everybody’s child. Ewé tètè is used in mild cleansing baths for infants and in thanksgiving offerings for recovery — gratitude to Oshun for the child’s healing.',
      global: 'The "stone-breaker" archetype (dissolving hard things in the body) recurs worldwide — from European pellitory-of-the-wall to South American Phyllanthus use — always paired with the idea that gentleness dissolves what force cannot.',
    },
  },
  {
    id: 'ewe-erin',
    yoruba: 'Ewé Erin (Pawpaw)',
    pron: 'EH-weh EH-reen',
    common: 'Papaya Leaf',
    botanical: 'Carica papaya',
    family: 'Caricaceae',
    parts: ['Leaf', 'Fruit', 'Latex', 'Seed'],
    tags: ['Fevers', 'Digestive', 'Nutrition', 'Blood'],
    tagline: 'The everyday pawpaw tree — leaf, fruit and seed each carry their own medicine.',
    traits: { shape: 'lobed', edge: 'smooth', color: 'deep', scent: 'mild', flower: 'white', habit: 'tree' },
    idCues: {
      leaves: 'Very large, deeply palm-shaped leaves on hollow stalks, with pale latex at the break.',
      flowers: 'White trumpeted flowers; female plants carry the familiar fruit.',
      scent: 'Mild green scent; the raw fruit smells sweet when cut.',
      habit: 'Soft-trunked small tree, 2–6 m, single stem with a crown of big leaves.',
      tip: 'Hollow leaf stalk plus milky sap at the break identifies pawpaw at once.',
    },
    traditional:
      'Pawpaw leaf is pounded for stomach worms in children, cooked into the household pot for convalescents, and its juice used as a meat tenderiser and digestive aid. The fruit is the everyday nutrition tonic; the seeds are chewed for intestinal parasites; the sap (pepaya latex) is applied to skin sores.',
    remedies: [
      {
        name: 'Pawpaw leaf bitter tonic',
        prepare: 'Bruise 4–5 leaves, boil in 3 cups down to 1 cup. Strain and take a quarter cup twice daily, after food, for up to 7 days.',
        use: 'Traditional appetite and digestive support during convalescence; used in family practice during fevers.',
        caution: 'Very bitter and can cause vomiting in some people. Malaria needs a test and treatment — never treat fever at home alone.',
      },
      {
        name: 'Pawpaw seed dose for intestinal worms',
        prepare: 'Eat 1 teaspoon of fresh crushed seeds with a little honey once daily for 3 days, followed by a prescribed dewormer if available.',
        use: 'Traditional deworming practice; children receive much smaller amounts under adult supervision.',
        caution: 'Do not exceed 3 days. Children under 5 and pregnant women should use pharmaceutical deworming under a clinician.',
      },
      {
        name: 'Ripe pawpaw as food-medicine',
        prepare: 'Half a ripe pawpaw at breakfast, daily.',
        use: 'Gentle bowel regulation, vitamin A and C repletion, and comfort for acid stomach.',
        caution: 'Pawpaw latex can irritate skin and eyes; papain in unripe fruit is strong — do not apply unripe latex to broken skin.',
      },
    ],
    nutrition: [
      'One cup of ripe pawpaw provides well over a day’s vitamin C and a large share of vitamin A.',
      'Papain, a digestive enzyme, helps break down protein — the reason it is given after heavy meals.',
      'Rich in folate and potassium; useful in pregnancy nutrition when eaten as food.',
      'Seeds contain carpaine and benzyl isothiocyanate compounds studied for antiparasitic action.',
    ],
    cautions: [
      'Pawpaw LEAF in medicinal doses is best avoided in pregnancy (traditionally used to expel the womb); the FRUIT is safe and nutritious.',
      'Latex and unripe sap cause skin and eye irritation — wash hands after handling.',
      'Papain may interfere with blood thinners and with thyroid medication timing.',
      'Anyone with persistent fever, jaundice or dark urine must be tested for malaria and hepatitis before relying on herbal care.',
    ],
    evidence:
      'Pawpaw leaf extract has shown platelet-raising effects studied in dengue fever, with early clinical trials from India and Nigeria. Fruit nutrition is uncontroversial. As fever medicine, it is supportive only — testing saves lives.',
    orisha: ['Oshun'],
    spiritual: {
      yoruba: 'A tree that gives sweetness without being asked is treated as a generous elder. Pawpaw is planted near the kitchen and offered in thanksgiving rites; its quick growth is read as a sign of quick answers when requests are made with clean hands.',
      global: 'Fast-growing fruiting trees are honoured across the tropics as signs of abundance — from Polynesian breadfruit offerings to Caribbean fruit stand blessings.',
    },
  },
  {
    id: 'gofa',
    yoruba: 'Gófà',
    pron: 'GOH-fah',
    common: 'Guava',
    botanical: 'Psidium guajava',
    family: 'Myrtaceae',
    parts: ['Leaf', 'Fruit', 'Bark'],
    tags: ['Digestive', 'Diarrhoea', 'Oral', 'Nutrition'],
    tagline: 'The guava — fruit for the body, leaf for the belly that will not settle.',
    traits: { shape: 'oval', edge: 'wavy', color: 'deep', scent: 'aromatic', flower: 'white', habit: 'tree' },
    idCues: {
      leaves: 'Opposite, leathery oval leaves with strong parallel side veins, 7–15 cm.',
      flowers: 'White, four-petalled flowers with a puff of stamens, followed by green-skinned fruit.',
      scent: 'Crushed leaves smell fresh and guava-like; bark peels in papery flakes.',
      habit: 'Small tree or shrub, 3–10 m, with smooth pale-green trunk.',
      tip: 'The strongly ribbed veins and papery-peeling bark make guava unmistakable.',
    },
    traditional:
      'Gófà leaf decoction is the compound’s first answer to running stomach and children’s diarrhoea. The bark is chewed for toothache and gum swelling, and the fruit is the everyday cleansing food — eaten to "cool the stomach" after pepper and palm oil.',
    remedies: [
      {
        name: 'Guava leaf stop-belly decoction',
        prepare: 'Boil 12 fresh leaves in 3 cups of water down to 1 cup. Strain; half a cup after each loose stool, up to 3 times daily for 2 days.',
        use: 'Traditional control of mild acute diarrhoea and stomach cramps.',
        caution: 'Diarrhoea with fever, blood, or in an infant/elderly person is a dehydration emergency — ORS and a clinic first.',
      },
      {
        name: 'Guava bark mouth rinse',
        prepare: 'Boil a thumb-sized piece of bark in 2 cups down to 1 cup; cool and rinse the mouth 3× daily for up to 5 days.',
        use: 'Traditional gum swelling, mouth ulcers and toothache comfort.',
        caution: 'Do not swallow the rinse. Abscessed teeth need dental care.',
      },
    ],
    nutrition: [
      'Guava fruit has 4× the vitamin C of oranges, plus vitamin A and folate.',
      'Leaf fibre and tannins slow carbohydrate absorption — guava leaf tea is used abroad as a metabolic aid.',
      'Good source of potassium, important when recovering from diarrhoea.',
      'Seeds contribute insoluble fibre that supports regular bowel movement.',
    ],
    cautions: [
      'Guava leaf tea in large amounts may lower blood sugar — check if on diabetes medicine.',
      'The seed-rich fruit can worsen constipation in some people.',
      'Bark tannins in excess can irritate the stomach; use short courses only.',
      'Severe dehydration from diarrhoea kills quickly in children — rehydration salts are not optional.',
    ],
    evidence:
      'Guava leaf extracts show credible antidiarrhoeal and antispasmodic effects, and clinical trials support modest blood-sugar lowering. Leaf teas are listed in several national pharmacopoeias. Sound supportive evidence — for acute illness, still assess first.',
    orisha: [],
    spiritual: {
      yoruba: 'Guava is the children’s tree — sweet fruit within easy reach, and a leaf remedy within arm’s length. In thanksgiving rites for a child’s recovery, guava and honey appear together as the "sweet after bitterness" pair.',
      global: 'Fruit trees given to children appear in many traditions as the first spiritual lesson: nourishment must be shared before it is hoarded.',
    },
  },
  {
    id: 'moringa',
    yoruba: 'Ewé Ìsín',
    pron: 'EH-weh ee-SEEN',
    common: 'Moringa',
    botanical: 'Moringa oleifera',
    family: 'Moringaceae',
    parts: ['Leaf', 'Seed', 'Pod', 'Root'],
    tags: ['Nutrition', 'Metabolic', 'Antimicrobial', 'Water'],
    tagline: 'The miracle tree of the Sahel — nutrition first, medicine close behind.',
    traits: { shape: 'compound', edge: 'smooth', color: 'light', scent: 'mild', flower: 'white', habit: 'tree' },
    idCues: {
      leaves: 'Tripinnate leaves made of many small oval leaflets; each leaf falls as one unit.',
      flowers: 'Cream-white fragrant sprays, drooping, followed by long drumstick pods.',
      scent: 'Mild peppery-green scent when crushed.',
      habit: 'Fast, slender deciduous tree, 5–12 m, drought-hardy, common in compounds and markets.',
      tip: 'Many tiny leaflets plus long thin pods = moringa. Root and bark are strong medicine, not food.',
    },
    traditional:
      'Ewé ìsín leaves are cooked as a vegetable, dried and ground into powder for weaning babies and nursing mothers, and given to anaemic convalescents. The seed is crushed to purify turbid water — an old practice now supported by water-treatment research. Roots and bark are reserved for strong decoctions used sparingly.',
    remedies: [
      {
        name: 'Moringa leaf powder (nutrition)',
        prepare: 'Dry fresh leaves in shade, grind to powder. Stir 1–2 teaspoons into food, soup or pap daily for 4–8 weeks.',
        use: 'Nutritional support for anaemia, breastfeeding mothers and weaning infants.',
        caution: 'Buy from a verified source; contaminated powders have caused heavy-metal poisoning abroad.',
      },
      {
        name: 'Moringa leaf tea',
        prepare: 'Steep 1 tablespoon of dried leaf in 2 cups hot water 10 minutes; drink 1 cup twice daily.',
        use: 'Traditional support for steady blood sugar and blood pressure alongside diet.',
        caution: 'May add to the effect of diabetes and hypertension medicines — monitor.',
      },
      {
        name: 'Seed water purification (household practice)',
        prepare: 'Crush fresh seeds to a fine paste, stir into dirty water for 30 minutes, then strain through clean cloth.',
        use: 'Traditional household water clarification — the same principle under study for rural water treatment.',
        caution: 'Purification is not disinfection: still boil or treat the water, and never rely on seeds alone in a cholera risk area.',
      },
    ],
    nutrition: [
      'Dried leaf powder is exceptionally rich in iron, calcium, vitamin A and vitamin C.',
      'Provides all essential amino acids — rare for a plant food — including lysine.',
      'Contains isothiocyanates and quercetin studied for metabolic and anti-inflammatory effects.',
      'Pods (drumsticks) add fibre and minerals when cooked in soups.',
    ],
    cautions: [
      'Root and bark contain spirochin, a nerve-paralysing alkaloid — never make root decoctions at home.',
      'May lower blood sugar and blood pressure — monitor with your medicines.',
      'Thyroid medicine users should avoid large regular doses; moringa may affect thyroid tests.',
      'Pregnant women should use leaf as FOOD, not as concentrated medicine, and avoid root entirely.',
    ],
    evidence:
      'Moringa has strong nutritional evidence and moderate evidence for blood-glucose and lipid effects. The WHO recognises its nutritional role in food-deficient regions. Nutrition first, medicine second — that is also the traditional view.',
    orisha: ['Oshun'],
    spiritual: {
      yoruba: 'A tree that feeds while it heals is treated as an elder of the household. Moringa is planted for welcome and for the sick-room; its shade is a place where mothers sit with babies, and where prayers are said quietly.',
      global: 'Trees that "give twice" — food and medicine — are sacred across cultures: the baobab of the Sahel, the banyan of India, the olive of the Mediterranean.',
    },
  },
  {
    id: 'ata',
    yoruba: 'Àtà',
    pron: 'AH-tah',
    common: 'Ginger',
    botanical: 'Zingiber officinale',
    family: 'Zingiberaceae',
    parts: ['Rhizome', 'Leaf'],
    tags: ['Digestive', 'Respiratory', 'Circulation', 'Kitchen'],
    tagline: 'The warm rhizome of every Yoruba kitchen — circulation, digestion and comfort.',
    traits: { shape: 'lance', edge: 'smooth', color: 'light', scent: 'pungent', flower: 'green', habit: 'herb' },
    idCues: {
      leaves: 'Long lance-shaped leaves sheathing a false stem, resembling young maize.',
      flowers: 'Rare; the identifying feature is the knobbly aromatic rhizome beneath.',
      scent: 'Sharp, warm, spicy when the rhizome is cut.',
      habit: 'Tall leafy perennial to 1 m from a spreading underground rhizome.',
      tip: 'Follow the leafy stems down — the answer is always in the soil.',
    },
    traditional:
      'Àtà is chewed with kola for early-morning energy, steeped for "cold in the chest", pounded into peppersoup for nursing mothers, and given to travellers for motion sickness and stomach upset. Warm ginger preparations are the standard "sweat it out" drink at the start of a fever.',
    remedies: [
      {
        name: 'Ginger-steam tea (cold & nausea)',
        prepare: 'Slice a thumb-sized piece, simmer in 2 cups water for 10 minutes, add lemon and honey. Sip warm up to 3× daily.',
        use: 'Traditional relief of congestion, nausea and motion discomfort.',
        caution: 'High doses can irritate the stomach lining and interact with blood thinners.',
      },
      {
        name: 'Ginger for pregnancy nausea (food amount)',
        prepare: 'Add a few slices to cooking, or sip weak ginger tea once daily.',
        use: 'Well-supported relief of morning sickness in culinary amounts.',
        caution: 'Culinary amounts are safe; concentrated extracts and essential oil are not. Discuss supplements with your obstetrician.',
      },
      {
        name: 'Warm ginger foot soak (headache & chills)',
        prepare: 'Boil 2 pieces in 2 litres of water; soak feet 15 minutes before bed.',
        use: 'Traditional warming practice for chills and tension headache.',
        caution: 'Do not use on numb or neuropathic feet (e.g. advanced diabetes) without checking sensation first.',
      },
    ],
    nutrition: [
      'Gingerols and shogaols are the warming compounds with proven anti-nausea and anti-inflammatory action.',
      'Provides manganese, potassium and small amounts of vitamin B6.',
      'Enhances digestion and gastric emptying — the reason it is taken before or after heavy meals.',
      'Traditionally combined with black pepper (iyere) — piperine increases absorption of many compounds.',
    ],
    cautions: [
      'May increase bleeding risk with warfarin/aspirin — stop high-dose ginger 2 weeks before surgery.',
      'Large medicinal doses in pregnancy should be discussed with a clinician (culinary use is fine).',
      'Can lower blood sugar — monitor if on treatment.',
      'Gallstones: large amounts may trigger colic; use culinary quantities only.',
    ],
    evidence:
      'Strong clinical evidence for nausea of pregnancy, motion sickness and post-operative nausea. Good evidence for anti-inflammatory effect in osteoarthritis. One of the best-documented culinary medicines worldwide.',
    orisha: ['Ogun', 'Shango'],
    spiritual: {
      yoruba: 'The heat of ginger places it among plants that "wake the body up" — used in invigorating washes before work and in the pepper soups given to women after childbirth to restore warmth and strength.',
      global: 'Warming spices travel with traders and pilgrims — ginger on the Silk Road, in Caribbean spiritual baths, in Japanese shinto purification brews. Heat is the universal metaphor for life returning.',
    },
  },
  {
    id: 'ata-ilẹ-pupa',
    yoruba: 'Àtà Ìlẹ̀ Pupa',
    pron: 'AH-tah ee-LEH POO-pah',
    common: 'Turmeric',
    botanical: 'Curcuma longa',
    family: 'Zingiberaceae',
    parts: ['Rhizome'],
    tags: ['Anti-inflammatory', 'Skin', 'Digestive', 'Joints'],
    tagline: 'The golden root — a cooling counterpart to ginger, prized for joints and skin.',
    traits: { shape: 'broad', edge: 'smooth', color: 'light', scent: 'earthy', flower: 'purple', habit: 'herb' },
    idCues: {
      leaves: 'Broad, glossy paddle-shaped leaves, 40–70 cm, on upright stems.',
      flowers: 'Pink-and-white bracted spike rising before the leaves in some varieties.',
      scent: 'Deep earthy-mustard aroma from the orange-fleshed rhizome.',
      habit: 'Clumping perennial to 1 m with finger-like underground rhizomes.',
      tip: 'The deep orange flesh that stains the fingers is the signature of true turmeric.',
    },
    traditional:
      'Àtìlẹ̀ pupa is cooked in soups and stews, applied as a paste to wounds and skin erupts, and taken warm in milk for joint aches and post-partum recovery. Its colour marks it as an auspicious root — used in powders for ceremonies and naming rites.',
    remedies: [
      {
        name: 'Golden milk (joints & recovery)',
        prepare: 'Simmer ½ teaspoon turmeric powder with a pinch of black pepper in 1 cup milk (or plant milk) 5 minutes; drink at night.',
        use: 'Traditional comfort for aching joints and post-illness recovery.',
        caution: 'Avoid if you have gallstones or are on blood thinners without medical advice.',
      },
      {
        name: 'Turmeric paste for skin',
        prepare: 'Mix turmeric with a little water or honey to a paste; apply 10 minutes, then wash. 2–3× weekly.',
        use: 'Traditional support for acne-prone and irritated skin.',
        caution: 'Turmeric stains skin and cloth yellow; test on a small patch — some people blister.',
      },
      {
        name: 'Digestive bitter before food',
        prepare: 'A pinch of turmeric in warm water 20 minutes before a heavy meal.',
        use: 'Traditional appetite and bile-flow support.',
        caution: 'Can worsen reflux in sensitive people.',
      },
    ],
    nutrition: [
      'Curcumin is the studied anti-inflammatory compound; piperine (from pepper) increases its absorption dramatically.',
      'Provides manganese and iron in meaningful amounts.',
      'A traditional food preservative — its antimicrobial action helps extend shelf life of cooked foods.',
      'Fat-soluble: take with oil or pepper for best absorption.',
    ],
    cautions: [
      'Do not use concentrated supplements with blood thinners, gallstones, or before surgery.',
      'High doses may lower iron stores in susceptible people.',
      'Stains everything — including contacts, counters and clothing.',
      'Check with your clinician before using alongside chemotherapy or other oncology treatment.',
    ],
    evidence:
      'Curcumin has extensive anti-inflammatory research, though supplement bioavailability is a real limitation. As a culinary spice it is safe and beneficial; as a drug-substitute for inflammatory disease, the evidence does not go that far.',
    orisha: ['Oshun', 'Ori'],
    spiritual: {
      yoruba: 'Golden colour signals value across Yoruba ceremonial life. Turmeric-coloured powders appear in blessing rites and at shrines as a mark of honour and abundance; a gift of golden milk is a gesture of care at naming ceremonies.',
      global: 'Turmeric is sacred in Hindu puja and Southeast Asian weddings, marking auspicious beginnings. Gold-coloured plants are consistently read as solar, fertile and generative.',
    },
  },
  {
    id: 'ori-gilo',
    yoruba: 'Orí Gíló',
    pron: 'OH-ree GEE-loh',
    common: 'Bitter Kola',
    botanical: 'Garcinia kola',
    family: 'Clusiaceae',
    parts: ['Seed (kola)', 'Nut'],
    tags: ['Cough', 'Throat', 'Immune', 'Ceremonial'],
    tagline: 'The kola of hospitality and oath-taking — bitter, warming, and throat-clearing.',
    traits: { shape: 'oval', edge: 'smooth', color: 'deep', scent: 'bitter', flower: 'yellow', habit: 'tree' },
    idCues: {
      leaves: 'Dark glossy oval leaves, opposite, with a red-brown midrib on young growth.',
      flowers: 'Small yellow-green flowers in axillary clusters.',
      scent: 'Cracking a nut reveals a intensely bitter, slightly peppery scent.',
      habit: 'Large forest tree, 20 m+, rare in towns; the nuts travel to market.',
      tip: 'Bitter kola nuts are browner and harder than common kola (Cola nitida); they crack with a sharp snap and taste much more bitter.',
    },
    traditional:
      'Orí gíló is chewed for cough and throat irritation, offered to guests as a mark of welcome, and placed in the hand during vows and naming ceremonies — the "kola of the spoken word". It is one of the most socially important plants in Yoruba life.',
    remedies: [
      {
        name: 'Bitter kola throat lozenge',
        prepare: 'Chew 1–2 nuts slowly, letting the juice coat the throat; swallow the juice, discard the fibre. Up to 3 nuts daily for 3 days.',
        use: 'Traditional relief of cough, throat tickle and hoarseness.',
        caution: 'Bitterness can trigger reflux; do not exceed a few nuts a day.',
      },
      {
        name: 'Cough decoction with honey',
        prepare: 'Crack 3 nuts, simmer in 2 cups water down to 1 cup, strain, add honey. Half a cup twice daily for up to 5 days.',
        use: 'Traditional cough and chest comfort for adults.',
        caution: 'Cough lasting over 2 weeks, with fever, weight loss or blood, needs medical assessment (TB screening where relevant).',
      },
    ],
    nutrition: [
      'Rich in kolavine and garcinol — bitter xanthones studied for antimicrobial and anti-inflammatory activity.',
      'Provides caffeine-like stimulants in small amounts; useful for alertness without coffee.',
      'Traditional fasting food: a nut or two sustains appetite during ceremonies.',
      'Contains tannins and steroids with reported bronchodilator activity in studies.',
    ],
    cautions: [
      'May lower intraocular pressure — glaucoma patients should discuss regular use with their eye doctor.',
      'Stimulant content: avoid late-night heavy use if you have palpitations or insomnia.',
      'Can interact with diabetes and anticoagulant medicines.',
      'Not suitable for young children in medicinal amounts.',
    ],
    evidence:
      'Preliminary studies suggest bronchodilator, antiviral and anti-inflammatory activity, including during the 2020 COVID era research in Nigeria. Evidence is early-stage — a soothing lozenge, not a treatment for pneumonia.',
    orisha: ['Oshun', 'Ori', 'All orishas'],
    spiritual: {
      yoruba: 'No important conversation in Yoruba culture is properly closed without kola. It is broken for Odua, for Oshun and above all for Orí — one’s personal head and destiny. To receive kola is to be told: this meeting matters.',
      global: 'Caffeinated seeds and nuts — kola, betel, cacao, coffee — mark sacred hospitality from West Africa to Mesoamerica. Sharing a stimulant seed is universally a pledge of non-hostility.',
    },
  },
  {
    id: 'iyere',
    yoruba: 'Iyèrẹ̀',
    pron: 'ee-YEH-reh',
    common: 'West African Black Pepper',
    botanical: 'Piper guineense',
    family: 'Piperaceae',
    parts: ['Fruit', 'Leaf'],
    tags: ['Kitchen', 'Circulation', 'Respiratory', 'Spice'],
    tagline: 'The true West African pepper — hot, aromatic and deeply warming.',
    traits: { shape: 'heart', edge: 'smooth', color: 'deep', scent: 'pungent', flower: 'green', habit: 'climber' },
    idCues: {
      leaves: 'Glossy heart-shaped leaves with 5–7 prominent veins, on a climbing vine.',
      flowers: 'Slim upright green spikes that develop into clustered red-then-black peppercorns.',
      scent: 'Intensely hot, woody and aromatic when dried.',
      habit: 'Perennial climbing vine found in humid forest farms, trained on posts in markets.',
      tip: 'True iyere has a heat that builds slowly with a woody aroma; ashanti pepper (P. capense) is milder and rounder.',
    },
    traditional:
      'Iyèrẹ̀ seasons peppersoup and stews, and is the warming spice added for nursing mothers and convalescents. It is paired with ginger and efinrin in the classic warming trio, and its leaf is chewed for toothache in some towns.',
    remedies: [
      {
        name: 'Warming peppersoup for recovery',
        prepare: 'Add ½ teaspoon crushed iyere to a light meat or fish peppersoup with efinrin; take warm once daily.',
        use: 'Traditional post-partum and post-illness warming and sweating practice.',
        caution: 'Hot spice can irritate healing stomachs and Caesarean incision-adjacent digestion — go mild first.',
      },
      {
        name: 'Iyere & honey throat coat',
        prepare: 'A few crushed corns in a spoon of honey, sucked slowly.',
        use: 'Traditional throat comfort and voice clearing.',
        caution: 'Avoid with active mouth ulcers or gastritis.',
      },
    ],
    nutrition: [
      'Piperine is the compound responsible for heat; it also boosts the absorption of other nutrients and drugs (including turmeric’s curcumin).',
      'Provides iron and manganese.',
      'Essential oil contains linalool and limonene — aromatics with studied calming and antimicrobial effects.',
      'A little goes far: culinary amounts deliver benefit without irritation.',
    ],
    cautions: [
      'Piperine increases absorption of many medicines — flag regular use with your clinician.',
      'Avoid in gastritis, ulcers, haemorrhoids and active reflux.',
      'May raise bleeding risk with anticoagulants before surgery.',
      'Do not apply concentrated preparations to the eyes or mucous membranes.',
    ],
    evidence:
      'Piperine is well documented for bioavailability enhancement and mild anti-inflammatory action. As a culinary spice, its benefits are uncontroversial; as medicine, it is an adjuvant, not a cure.',
    orisha: ['Ogun', 'Shango'],
    spiritual: {
      yoruba: 'Heat in the mouth and warmth in the body are linked in Yoruba healing language — iyere is added to strengthen "hot" preparations given to those rebuilding strength after illness or childbirth.',
      global: 'Peppers of every kind appear in protective rites from the Caribbean to West Africa — heat as a boundary that unwanted influences must cross.',
    },
  },
  {
    id: 'raji',
    yoruba: 'Ràjì (Aloe)',
    pron: 'RAH-jee',
    common: 'Aloe Vera',
    botanical: 'Aloe barbadensis (A. vera)',
    family: 'Asphodelaceae',
    parts: ['Gel leaf', 'Latex'],
    tags: ['Skin', 'Digestive', 'Burns'],
    tagline: 'The cool gel plant — burns, skin and the old bitter purge.',
    traits: { shape: 'broad', edge: 'lobed', color: 'grey', scent: 'mild', flower: 'yellow', habit: 'herb' },
    idCues: {
      leaves: 'Thick, fleshy, grey-green pointed leaves in a rosette, with small teeth on the margins.',
      flowers: 'Tall spikes of tubular yellow-orange flowers in warm months.',
      scent: 'Cut leaf gives a clear gel with a faint green smell; the outer rind layer gives a bitter yellow latex.',
      habit: 'Low succulent rosette, 30–60 cm, common on windowsills and compound walls.',
      tip: 'Two layers matter: the clear inner gel (soothing, safe) and the bitter yellow latex just under the skin (strong purgative).',
    },
    traditional:
      'Aloe gel is applied to burns, grazes and heat rash; the bitter latex is used sparingly as a purge and for menstrual regulation — a practice now flagged as unsafe in pregnancy. The plant is kept in the home as a standing first-aid resource.',
    remedies: [
      {
        name: 'Fresh gel for minor burns & skin',
        prepare: 'Split a leaf, scoop the clear gel, apply a 2–3 mm layer to the cooled burn or irritated skin; reapply 3× daily.',
        use: 'Traditional cooling for minor burns, heat rash and dry irritated skin.',
        caution: 'Deep, large or blistering burns need medical care. Do not apply to dirty wounds without cleaning.',
      },
      {
        name: 'Aloe juice for constipation (rare, short)',
        prepare: 'Not recommended at home: the latex dose is narrow and easy to overdose.',
        use: 'Historically used as a purge; modern practice prefers gentler fibre-first approaches.',
        caution: 'Can cause severe cramping, electrolyte loss and kidney strain. Avoid entirely in pregnancy, with bowel obstruction or in children.',
      },
    ],
    nutrition: [
      'The gel is mostly water with acemannan polysaccharides, vitamins C and E, and amino acids.',
      'Topical gel supports wound healing and reduces inflammation in minor injuries.',
      'The latex contains aloin — a potent stimulant laxative with a narrow safety margin.',
      'Eaten in tiny food amounts in some cultures (e.g. in Japanese drinks) — medical doses are a different matter.',
    ],
    cautions: [
      'Never take home-made aloe latex internally during pregnancy — it is a traditional abortifacient.',
      'Can dangerously lower blood potassium with chronic use; interacts with diuretics, diabetes and heart medicines.',
      'Stop if rash or itching develops — contact dermatitis from aloe is common.',
      'Buy food-grade products only for internal use; ornamental aloes may be a different species.',
    ],
    evidence:
      'Topical aloe has good evidence for burns and skin hydration. Internal use has weak evidence and real risk. The gel is a medicine; the latex is a drug with narrow margins.',
    orisha: ['Oshun', 'Yemoja'],
    spiritual: {
      yoruba: 'Cooling plants are the stock-in-trade of river-orisha practice. Aloe’s coolness places it among plants used in baths for blessing, for calming "hot" situations and for the skin of mothers after childbirth.',
      global: 'Aloe is called the "plant of immortality" in ancient Egypt, buried with the dead, and appears in Hindu, Greek and Islamic wound-care traditions. Coolness at the wound is comfort at the boundary of the body.',
    },
  },
  {
    id: 'ewe-koyye',
    yoruba: 'Ewé Kóyyè',
    pron: 'EH-weh koh-YEH-yeh',
    common: 'Goat Weed / Billygoat Weed',
    botanical: 'Ageratum conyzoides',
    family: 'Asteraceae',
    parts: ['Leaf', 'Whole plant'],
    tags: ['Wounds', 'Skin', 'Fevers', 'Women’s health'],
    tagline: 'A humble yard weed with a long record in wound care — use with knowledge.',
    traits: { shape: 'oval', edge: 'serrated', color: 'light', scent: 'aromatic', flower: 'purple', habit: 'herb' },
    idCues: {
      leaves: 'Opposite, softly hairy egg-shaped leaves with toothed edges.',
      flowers: 'Soft lavender-white pom-pom flower heads, fading to fluff.',
      scent: 'Distinctive strong "goaty" herbal smell when crushed.',
      habit: 'Annual herb, 20–60 cm, colonising paths, waste ground and farm edges.',
      tip: 'The fuzzy mauve pom-pom flowers plus strong pungent smell are unmistakable.',
    },
    traditional:
      'Ewé kóyyè is pounded and bound over wounds and sores, steamed for post-partum washing, and used in enemas in old practice (now discouraged). It is one of the plants an apprentice herbalist learns early, precisely because it is everywhere.',
    remedies: [
      {
        name: 'Pounded leaf wound dressing',
        prepare: 'Wash leaves, pound to a soft mass, warm slightly and bind over a cleaned minor wound; change twice daily.',
        use: 'Traditional support for clean minor cuts, boils and insect bites.',
        caution: 'Deep, gaping, dirty or infected wounds need clinical cleaning, tetanus cover and possibly antibiotics.',
      },
      {
        name: 'Post-partum wash',
        prepare: 'Boil a large handful in 5 litres of water; cool, strain, and use as a sitz or body wash in the first weeks.',
        use: 'Traditional cleansing and comfort after childbirth.',
        caution: 'Do not douche internally; internal use after birth should be approved by a midwife or obstetrician.',
      },
    ],
    nutrition: [
      'Not a food plant; leaves are used as a poultice rather than eaten.',
      'Contains flavonoids, tannins and essential oil with reported antimicrobial activity.',
      'Borneol and caryophyllene oxide are among the studied aromatic constituents.',
      'Chronic high intake is not advisable — see cautions.',
    ],
    cautions: [
      'Contains pyrrolizidine alkaloids, which can damage the liver with repeated exposure — no long courses, no internal teas during pregnancy.',
      'Avoid entirely in pregnancy and breastfeeding.',
      'People with liver disease should not use it.',
      'Do not apply to large open or necrotic wounds — this is where infections become emergencies.',
    ],
    evidence:
      'Wound-healing and antimicrobial activity is demonstrated in lab studies, and the plant is under pharmacological investigation. The alkaloid liver risk is documented — external, short-term use only.',
    orisha: [],
    spiritual: {
      yoruba: 'Plants of the waste ground belong to Eshu and Elegba — the crossroads, where everything unwanted ends up and where messages travel. Working with such a plant teaches the apprentice that nothing in the yard is "just a weed".',
      global: 'Every tradition has its "humble plant that heals" — plantain (Plantago) in European folk medicine, bramble in East African practice. Humility is treated as a marker of potency.',
    },
  },
  {
    id: 'ewe-abafimo',
    yoruba: 'Ewé Abàfímọ̀',
    pron: 'EH-weh ah-bah-FEEM-oh',
    common: 'Siam Weed',
    botanical: 'Chromolaena odorata',
    family: 'Asteraceae',
    parts: ['Leaf'],
    tags: ['Wounds', 'Skin', 'Antimicrobial'],
    tagline: 'The fast-growing wound herb of forest farms and fallow land.',
    traits: { shape: 'lance', edge: 'lobed', color: 'deep', scent: 'aromatic', flower: 'purple', habit: 'shrub' },
    idCues: {
      leaves: 'Opposite, triangular-lobed leaves with three prominent veins from the base.',
      flowers: 'Clusters of thin lilac-white thread-like flower heads.',
      scent: 'Strong aromatic scent when crushed, sharper than kóyyè.',
      habit: 'Invasive shrub, 1–3 m, dominating forest edges and fallow farms.',
      tip: 'Three veins from the base of a triangular leaf = Chromolaena. Distinct from kóyyè’s rounder leaves.',
    },
    traditional:
      'Abàfímọ̀ is the forest-farm wound herb: hunters and farmers bind the crushed leaf over cuts immediately. It is also used in steam baths for body aches and in washes for skin infections.',
    remedies: [
      {
        name: 'Immediate field wound dressing',
        prepare: 'Crush clean young leaves, apply to a cleaned cut and bind; change twice daily until the wound closes.',
        use: 'Traditional first-response for minor farm and bush cuts.',
        caution: 'Wash the wound with clean water first. Signs of infection (spreading redness, pus, fever) require a clinic.',
      },
      {
        name: 'Aromatic steam for aching body',
        prepare: 'Add a large handful to bath water or a basin of hot water; steam or sponge the body.',
        use: 'Traditional comfort for muscle aches and post-exertion recovery.',
        caution: 'Strong scent; avoid if you have fragrance-triggered asthma.',
      },
    ],
    nutrition: [
      'Not a food plant — external use dominates traditional practice.',
      'Essential oil rich in caryophyllene, terpenes and flavonoids with demonstrated antimicrobial effects.',
      'Tannins contribute a drying, astringent effect helpful to weeping skin.',
      'Biomass is used traditionally as a green manure — the plant feeds the soil as well as the injured.',
    ],
    cautions: [
      'Can cause contact dermatitis in sensitive people — test a small area.',
      'Not for internal use: the essential oil and alkaloid load are not suited to home dosing.',
      'Invasive species — harvest sparingly and never discard seeds near forest.',
      'Deep wounds, animal bites and snakebite require hospital care, not leaf.',
    ],
    evidence:
      'Chromolaena extracts show credible wound-healing and antimicrobial activity in preclinical studies. As a field dressing it is a traditional first aid, not a substitute for wound assessment.',
    orisha: ['Ogun'],
    spiritual: {
      yoruba: 'Plants that grow back after being cut teach persistence — a lesson spoken aloud when this leaf is used on a hunter’s wound. It belongs to Ogun’s forest, the domain of work, iron and courage.',
      global: 'Resilient "cutting" plants appear in warrior and healing rites worldwide — yarrow on battlefields, comfrey ("knitbone") in European folk practice.',
    },
  },
  {
    id: 'alubosa-ayu',
    yoruba: 'Alubosa Ayu',
    pron: 'ah-loo-BOH-sah AH-yoo',
    common: 'Garlic',
    botanical: 'Allium sativum',
    family: 'Amaryllidaceae',
    parts: ['Bulb', 'Green leaf'],
    tags: ['Heart', 'Antimicrobial', 'Kitchen', 'Immune'],
    tagline: 'The stinking rose of the kitchen — heart, gut and defence.',
    traits: { shape: 'lance', edge: 'smooth', color: 'light', scent: 'pungent', flower: 'white', habit: 'herb' },
    idCues: {
      leaves: 'Flat, strap-like blue-green leaves growing straight from the bulb.',
      flowers: 'Around bud cluster on a tall stalk (rare in cultivated bulbs).',
      scent: 'Pungent sulphurous aroma when crushed — allicin is released on cutting.',
      habit: 'Bulbous plant, 30–50 cm, cultivated in beds and sold in every market.',
      tip: 'A tight white bulb of wrapped cloves; single-clove "solo garlic" is rarer and milder.',
    },
    traditional:
      'Garlic is eaten raw with kola by elders for strength and to "clean the blood", cooked into stews for the household, and used in warm milk for cough. Its protective reputation is ancient in Yoruba domestic practice.',
    remedies: [
      {
        name: 'Garlic & honey (household tonic)',
        prepare: 'Crush 3–4 cloves, steep in a jar of honey 5 days. Take 1 teaspoon with warm water each morning.',
        use: 'Traditional immune and cardiovascular support.',
        caution: 'Garlic thins the blood — caution with anticoagulants and before surgery.',
      },
      {
        name: 'Warm milk with crushed garlic (cough)',
        prepare: 'Crush 2 cloves into 1 cup warm milk; sip slowly at night.',
        use: 'Traditional night-time cough and chest comfort.',
        caution: 'Avoid if dairy worsens your cough or reflux.',
      },
    ],
    nutrition: [
      'Allicin and related sulphur compounds are responsible for garlic’s antimicrobial and lipid-lowering effects.',
      'Provides manganese, vitamin B6 and vitamin C.',
      'Regular culinary intake is associated with modest blood-pressure reduction in studies.',
      'Crush and rest 10 minutes before cooking to let allicin form.',
    ],
    cautions: [
      'Stop high-dose garlic 1–2 weeks before surgery; caution with warfarin, clopidogrel and HIV protease inhibitors.',
      'May lower blood sugar — monitor with diabetes treatment.',
      'Raw garlic can burn the mouth and stomach; take with food.',
      'Breastfeeding infants may refuse the breast after very high garlic intake.',
    ],
    evidence:
      'Garlic has good clinical evidence for modest cholesterol and blood-pressure reduction, and laboratory evidence for antimicrobial action. Food-first dosing is both traditional and evidence-aligned.',
    orisha: ['Ogun'],
    spiritual: {
      yoruba: 'Pungent alliums are protective plants in Yoruba thought — placed at thresholds and eaten by those who work at night. To smell strong is to be off-limits to certain kinds of trouble.',
      global: 'Garlic hangs at doors from Slavic to Mediterranean households, and appears in South Asian protective rites — pungency as a shield is a genuinely worldwide idea.',
    },
  },
  {
    id: 'obi',
    yoruba: 'Obì',
    pron: 'OH-bee',
    common: 'Kola Nut',
    botanical: 'Cola nitida / Cola acuminata',
    family: 'Malvaceae',
    parts: ['Nut'],
    tags: ['Ceremonial', 'Stimulant', 'Cough', 'Digestive'],
    tagline: 'The nut of hospitality, prayer and spoken covenant.',
    traits: { shape: 'oval', edge: 'smooth', color: 'red', scent: 'bitter', flower: 'yellow', habit: 'tree' },
    idCues: {
      leaves: 'Large glossy oval leaves, sometimes with reddish young growth.',
      flowers: 'Pale yellow flowers with reddish stamens in clusters.',
      scent: 'Fresh nuts smell faintly astringent; dried nuts are bitter and mildly stimulating.',
      habit: 'Rainforest tree, 15–20 m; nuts are harvested, dried and traded widely.',
      tip: 'Kola nuts are pale cream to red-brown, larger and milder than bitter kola; both are used, for different purposes.',
    },
    traditional:
      'Obì is broken before every significant conversation, naming ceremony, engagement and farewell. The split nut is shared — one half to the host, one to the guest — sealing goodwill. Medicinally it is chewed for cough, headache and to steady hunger during travel.',
    remedies: [
      {
        name: 'Kola for travel hunger and alertness',
        prepare: 'Chew a quarter to half a nut slowly; sip water. Effect lasts 2–4 hours.',
        use: 'Traditional appetite suppression and alertness for long journeys and night work.',
        caution: 'Contains caffeine-like stimulants — avoid in palpitations, arrhythmia and severe hypertension.',
      },
      {
        name: 'Kola & honey for cough',
        prepare: 'Grate a quarter nut into a spoon of honey; suck slowly 2–3× daily for up to 3 days.',
        use: 'Traditional throat coating and cough suppression.',
        caution: 'Do not use in children under 12 or in those sensitive to stimulants.',
      },
    ],
    nutrition: [
      'Kola nut provides caffeine, theobromine and tannins — a genuine stimulant food.',
      'Rich in phenolic antioxidants; the bitterness signals dense polyphenols.',
      'Traditionally a fasting food for long ceremonies and labour.',
      'Roasted nuts lose some active compounds; fresh nuts are preferred in practice.',
    ],
    cautions: [
      'Stimulant: avoid with heart conditions, anxiety disorders, insomnia, and in pregnancy (caffeine limits apply).',
      'Interacts with monoamine oxidase inhibitors (MAOIs) and some asthma medicines.',
      'Can raise blood pressure; monitor if hypertensive.',
      'Not for young children.',
    ],
    evidence:
      'Stimulant pharmacology is well established. Cardiovascular and metabolic research is mixed; as a ceremonial food in moderation, kola is culturally central and physiologically mild.',
    orisha: ['All orishas', 'Ori'],
    spiritual: {
      yoruba: 'Obì is the opening act of Yoruba social and spiritual life. A single nut, cut open, is inspected for its pattern before it is broken and shared; failure to offer kola is a social breach. It is given to Odua, to Oshun, and always to Orí.',
      global: 'Shared seed-foods as covenant appear worldwide — bread and salt in Slavic weddings, betel in Melanesian exchange, cacao among the Maya. To eat the same thing is to be bound by the same word.',
    },
  },
  {
    id: 'eru',
    yoruba: 'Eru',
    pron: 'EH-roo',
    common: 'Grains of Selim',
    botanical: 'Xylopia aethiopica',
    family: 'Annonaceae',
    parts: ['Fruit pod', 'Seed', 'Bark'],
    tags: ['Peppersoup', 'Digestive', 'Respiratory', 'Spice'],
    tagline: 'The smoky peppersoup pod — warmth, digestion and depth.',
    traits: { shape: 'lance', edge: 'smooth', color: 'deep', scent: 'earthy', flower: 'white', habit: 'tree' },
    idCues: {
      leaves: 'Glossy dark elliptic leaves with a strong midrib, aromatic when crushed.',
      flowers: 'Creamy-white petals with purple streaks, strongly scented.',
      scent: 'Dried pods smell smoky, peppery and slightly musky.',
      habit: 'Forest tree, 10–25 m; pods grow in clusters and turn dark brown when dried.',
      tip: 'Long ridged dark pods, each containing small black seeds — distinct from uda (Seliman pepper) varieties by size and smell.',
    },
    traditional:
      'Eru is the depth-note in peppersoup, given to nursing mothers and convalescents for warmth and milk flow. The bark decoction is used for cough and toothache, and the seed is chewed for stomach gripes.',
    remedies: [
      {
        name: 'Eru in recovery peppersoup',
        prepare: 'Add 2–3 cracked pods to a light peppersoup with iyere and efinrin; take warm once daily in the first weeks after childbirth or illness.',
        use: 'Traditional warming, digestive and lactation support.',
        caution: 'Very warming — go easy with reflux or after Caesarean delivery.',
      },
      {
        name: 'Bark decoction for cough',
        prepare: 'Simmer a thumb-sized piece of bark in 2 cups down to ¾ cup; strain and take half a cup twice daily for up to 5 days.',
        use: 'Traditional cough and chest comfort.',
        caution: 'Pregnant women should avoid concentrated bark decoctions.',
      },
    ],
    nutrition: [
      'Pods supply iron, and the smoky aromatics include terpenes and piperine-like amides.',
      'Traditionally used to stimulate appetite in convalescence.',
      'Tannins give an astringent, gut-toning effect.',
      'Used in tiny culinary quantities — it is a seasoning, not a bulk food.',
    ],
    cautions: [
      'Avoid concentrated doses in pregnancy.',
      'Can irritate a raw stomach; do not use with gastritis or ulcers.',
      'May interact with anticoagulant and antihypertensive therapy — flag with your clinician.',
      'Buy from trusted markets: pods are sometimes adulterated with other dried fruits.',
    ],
    evidence:
      'Xylopia species show antimicrobial, antiplasmodial and analgesic activity in laboratory studies. Culinary use is well established; medicinal evidence is preclinical.',
    orisha: ['Ogun', 'Shango'],
    spiritual: {
      yoruba: 'Smoky, dense aromatics are used in cleansing fumigations — the household is walked with the smoke to clear heaviness before important events. Eru appears in those preparations and in the food cooked for them.',
      global: 'Smoke purification exists from Native American smudging to Orthodox frankincense to Japanese juniper (sugi) smoke rituals. Smoke is the message that travels upward.',
    },
  },
  {
    id: 'aridan',
    yoruba: 'Àrìdàn',
    pron: 'AH-ree-dahn',
    common: 'Fruit Salad Tree / Preussa',
    botanical: 'Tetrapleura tetraptera',
    family: 'Fabaceae',
    parts: ['Fruit pod', 'Bark', 'Root'],
    tags: ['Fevers', 'Pain', 'Digestive', 'Spice'],
    tagline: 'The winged fruit of the deep forest — a heavyweight in Yoruba pharmacy.',
    traits: { shape: 'compound', edge: 'smooth', color: 'deep', scent: 'earthy', flower: 'red', habit: 'tree' },
    idCues: {
      leaves: 'Feathery compound leaves with paired oval leaflets.',
      flowers: 'Showy red-and-yellow pea-like flowers hanging in clusters.',
      scent: 'Dried fruits have a strong, sweet-aromatic, slightly musky smell.',
      habit: 'Large forest tree, 20 m+, producing distinctive four-winged ribbed fruits.',
      tip: 'The four-winged, ridged, cigar-shaped fruit is diagnostic — nothing else looks like it.',
    },
    traditional:
      'Àrìdàn pods are grated into peppersoup and stews for convalescents, and the bark is a respected decoction for fevers and body pain. It is a plant of serious occasions — the preparation is made with care and given with instruction.',
    remedies: [
      {
        name: 'Àrìdàn convalescent drink',
        prepare: 'Grate or pound ½ a dried pod, simmer in 3 cups down to 1 cup, strain. Half a cup twice daily after food, up to 7 days.',
        use: 'Traditional recovery support after fevers; used for appetite and strength.',
        caution: 'Potent — do not exceed the stated amount or duration. Avoid in pregnancy.',
      },
      {
        name: 'Peppersoup enriching spice',
        prepare: 'Add a small grated section of pod to peppersoup or stew.',
        use: 'Culinary-strength dosing: flavour plus gentle medicinal exposure.',
        caution: 'Start small; some people find it strongly warming.',
      },
    ],
    nutrition: [
      'Fruit pulp is sweet and rich in coumarins, flavonoids and triterpenes.',
      'Contains iron and is traditionally used to rebuild after illness.',
      'Aromatic compounds show antispasmodic and anti-inflammatory activity in studies.',
      'Used as a spice in moderation; the pod is dense chemistry.',
    ],
    cautions: [
      'Avoid in pregnancy — traditional practice and pharmacology both counsel against.',
      'May potentiate sedatives and antihypertensives; use caution before surgery.',
      'Large doses can cause drowsiness and gastrointestinal upset.',
      'Root and bark decoctions should be prepared by an experienced practitioner, not at home.',
    ],
    evidence:
      'Tetrapleura extracts show antiulcer, antiplasmodial, anti-inflammatory and analgesic activity in preclinical studies, with some human-use data from Nigerian practice. Promising — still supportive, not curative.',
    orisha: ['Ogun', 'Oya'],
    spiritual: {
      yoruba: 'Forest giants with winged fruits belong to the deep-forest powers — plants that arrive "on their own wings". Àrìdàn is used in rites that ask for strength and endurance, and its preparation is accompanied by spoken instruction to the patient.',
      global: 'Winged and wind-borne seeds (silk cotton, maples, dandelions) are read across cultures as carriers of wishes and messages — the plant that can travel is the plant that can deliver.',
    },
  },
  {
    id: 'sakara',
    yoruba: 'Sákárà (Zobo)',
    pron: 'SAH-kah-rah',
    common: 'Roselle / Hibiscus',
    botanical: 'Hibiscus sabdariffa',
    family: 'Malvaceae',
    parts: ['Calyx', 'Leaf', 'Seed'],
    tags: ['Beverage', 'Heart', 'Vitamin C', 'Cooling'],
    tagline: 'The crimson calyx that becomes zobo — cooling, tart and vitamin-rich.',
    traits: { shape: 'lobed', edge: 'serrated', color: 'red', scent: 'mild', flower: 'red', habit: 'shrub' },
    idCues: {
      leaves: 'Deeply lobed lower leaves, simpler and toothed higher up; often red-tinged.',
      flowers: 'Pale yellow flowers with a crimson centre, followed by fleshy red calyces.',
      scent: 'The calyx smells tart and fruity, like cranberry.',
      habit: 'Annual shrub, 1–2 m, widely farmed across south-western Nigeria.',
      tip: 'If it looks like a red star with fleshy points, it is a roselle calyx — the zobo of every Nigerian party.',
    },
    traditional:
      'The calyx is boiled with pineapple, ginger and spice to make zobo — the celebratory drink of naming ceremonies and funerals alike. The leaf is cooked as a sour vegetable (isapa), and the drink is given for "cooling the blood" and easing mild hypertension.',
    remedies: [
      {
        name: 'Classic zobo drink',
        prepare: 'Wash 2 cups of dried calyces; simmer with sliced ginger, pineapple peel and a stick of cinnamon in 3 litres water for 25 minutes. Cool, strain, sweeten lightly. Serve chilled.',
        use: 'Hydrating, vitamin-C-rich household beverage; traditional support for mild high blood pressure.',
        caution: 'Sweetened zobo adds sugar — diabetics should take it unsweetened and in moderation.',
      },
      {
        name: 'Unsweetened calyx infusion (blood pressure support)',
        prepare: 'Simmer ½ cup calyces in 1 litre water 15 minutes; drink 1 cup daily for up to 4 weeks.',
        use: 'Traditional mild antihypertensive support.',
        caution: 'Hibiscus can add to the effect of blood-pressure and diabetes medicines; monitor and inform your clinician.',
      },
    ],
    nutrition: [
      'Very high in vitamin C and anthocyanin antioxidants that give the crimson colour.',
      'Traditionally used in Cameroon and Nigeria as a dietary aid for mild hypertension, supported by clinical trials.',
      'Provides niacin and small amounts of calcium and iron.',
      'The tartness is organic acids (citric, malic) that support appetite.',
    ],
    cautions: [
      'May lower blood pressure and blood sugar — monitor if on medication.',
      'Avoid very strong concentrated intake in pregnancy (traditional use is contraceptive-adjacent in folklore).',
      'May interact with lithium and with diuretics.',
      'Sold zobo drinks may contain excess sugar or preservatives — homemade is preferable.',
    ],
    evidence:
      'Hibiscus tea has randomised-trial evidence for modest blood-pressure reduction and good antioxidant status. This is one of the rare traditional drinks with strong human data — used sensibly.',
    orisha: ['Oshun', 'Yemoja'],
    spiritual: {
      yoruba: 'Crimson drinks are served at Oshun and Yemoja celebrations — colour, sweetness and coolness together. Zobo at a party is hospitality made liquid, and a cup carried to an elder is a small act of protocol.',
      global: 'Red ceremonial drinks mark celebration worldwide — hibiscus in Egypt (karkadé), berry infusions in the Andes, spiced punches at Caribbean festivals. Colour is the first flavour.',
    },
  },
  {
    id: 'oyin',
    yoruba: 'Oyin',
    pron: 'OH-yin',
    common: 'Honey (raw)',
    botanical: 'Apis mellifera product',
    family: '—',
    parts: ['Raw honey'],
    tags: ['Ceremonial', 'Nutrition', 'Cough', 'Wound care'],
    tagline: 'The sacred sweetener — medicine, offering and preservative in one.',
    traits: { shape: 'oval', edge: 'smooth', color: 'light', scent: 'aromatic', flower: 'yellow', habit: 'herb' },
    idCues: {
      leaves: 'Not a plant: raw honey carries the pollen signature of whatever forage the bees worked.',
      flowers: 'Identified by source — forest honey (omi eran) is darker and more complex than garden honey.',
      scent: 'True raw honey smells floral to smoky; heat-treated honey smells flat and sweet only.',
      habit: 'Harvested from forest hives and box hives; texture varies with season and source.',
      tip: 'Raw honey crystallises over time; a honey that never thickens has likely been adulterated with syrup.',
    },
    traditional:
      'Oyin is the default vehicle of Yoruba herbal dosing — bitter barks and powders are taken "with honey so the mouth forgives the body". It seals prayers, sweetens offerings to Oshun, preserves prepared medicines, and is applied directly to wounds.',
    remedies: [
      {
        name: 'Honey as medicine vehicle',
        prepare: 'Stir powders or decoctions into 1–2 teaspoons of raw honey immediately before taking.',
        use: 'Improves compliance, especially with bitter tonics; adds antimicrobial sugars to the preparation.',
        caution: 'No honey for infants under 1 year (botulism risk). Diabetics count it as sugar.',
      },
      {
        name: 'Honey wound dressing',
        prepare: 'Apply medical-grade (sterilised) honey to a cleaned minor wound and cover; change daily.',
        use: 'Traditional and clinically used wound care — honey creates a hostile environment for bacteria.',
        caution: 'Raw kitchen honey is not sterile: use medical-grade honey for wounds, or have the wound assessed.',
      },
      {
        name: 'Honey & ginger night cup',
        prepare: 'Stir 1 teaspoon honey and a squeeze of lemon into warm (not boiling) water before bed.',
        use: 'Traditional throat comfort and night-time cough relief.',
        caution: 'Honey should never be heated to boiling — it degrades the beneficial enzymes.',
      },
    ],
    nutrition: [
      'Raw honey contains enzymes, trace pollen, amino acids and antioxidants absent from refined sugar.',
      'Osmotic and hydrogen-peroxide activity make it genuinely antimicrobial — the basis of modern medical-grade honey dressings.',
      'A quick energy source; still sugar, so portions matter.',
      'Darker honeys generally carry more mineral and antioxidant content.',
    ],
    cautions: [
      'Never give to infants under 12 months — infant botulism risk is real.',
      'Count toward sugar intake in diabetes; unsweetened preparations are safer.',
      'Not vegan; and never use honey as the sole treatment for a serious burn or infected wound.',
      'Some people are sensitive to pollen in raw honey — start small.',
    ],
    evidence:
      'Medical-grade honey (e.g. Manuka) has robust clinical evidence for wound healing, and honey for cough is recommended in paediatric guidelines for children over 1 year. Food-grade raw honey is nutritious in moderation.',
    orisha: ['Oshun'],
    spiritual: {
      yoruba: 'Oyin is Oshun’s own substance — the offering that welcomes her, and the sweetness asked for in matters of love, fertility and reconciliation. In Ifá practice, honey sweetens the mouth of the client so that prayers arrive without bitterness.',
      global: 'Honey appears in Egyptian, Greek, Vedic and Biblical offerings, in Buddhist temple gifts and in Norse mead. Its universal status comes from a simple fact: it does not spoil, and it turns everything it touches into something worth keeping.',
    },
  },
  {
    id: 'efirin',
    yoruba: 'Efirin',
    pron: 'eh-FEE-rin',
    common: 'Sweet Basil',
    botanical: 'Ocimum basilicum',
    family: 'Lamiaceae',
    parts: ['Leaf', 'Seed'],
    tags: ['Kitchen', 'Digestive', 'Respiratory', 'Calm'],
    tagline: 'The gentle cousin of efinrin — milder, sweeter, everyday.',
    traits: { shape: 'oval', edge: 'smooth', color: 'deep', scent: 'aromatic', flower: 'white', habit: 'herb' },
    idCues: {
      leaves: 'Glossy, smooth-edged, bright green egg-shaped leaves on square stems.',
      flowers: 'White flower spikes; many varieties are grown for leaf only.',
      scent: 'Sweet, lightly peppery and clove-like, softer than efinrin.',
      habit: 'Annual herb, 30–60 cm, grown in pots and beds across towns.',
      tip: 'Efirin leaves are smooth and glossy; efinrin leaves are hairier, toothed and much stronger.',
    },
    traditional:
      'Efirin is the everyday leaf — added raw to stews at the table, steeped for mild stomach upset, and placed in the room of a sick child for a comforting scent. It is the leaf most often handed to someone who "does not like bitter medicine".',
    remedies: [
      {
        name: 'Efirin gentle tea',
        prepare: 'Steep 8 fresh leaves in just-boiled water, covered, 8 minutes. Sip warm up to twice daily.',
        use: 'Mild digestive comfort, stress easing and fragrant hydration.',
        caution: 'Generally very safe; strong teas may cause mild drowsiness.',
      },
      {
        name: 'Table leaf for appetite',
        prepare: 'Tear fresh leaves over hot food just before serving.',
        use: 'Aromatic appetite stimulation and digestive seasoning.',
        caution: 'None at culinary amounts.',
      },
    ],
    nutrition: [
      'Good source of vitamin K and vitamin A.',
      'Essential oil contains linalool and eugenol, studied for calming and antimicrobial effects.',
      'Provides small amounts of iron and calcium.',
      'Fresh leaf preserves vitamin C better than cooked — add at the end.',
    ],
    cautions: [
      'Very safe at food amounts; medicinal tea should still be limited in pregnancy.',
      'May have mild blood-thinning effects at high intake.',
      'Some varieties (holy basil/tulsi) have stronger hormonal effects — check which plant you have.',
      'Home-grown plants may carry soil organisms — wash leaves well.',
    ],
    evidence:
      'Basil has modest evidence for anti-inflammatory and anxiolytic effects, with strong culinary safety. Treat it as a food-grade calmative.',
    orisha: ['Oshun'],
    spiritual: {
      yoruba: 'Fragrant leaves mark the cared-for home. Efirin is tucked into the hair before ceremonies, laid at the feet of guests, and used in the wash-water of shrines — a small fragrance announcing that the space has been prepared.',
      global: 'Basil is sacred to Vishnu in Hindu households, kept at thresholds in Italian Catholic tradition, and burned in Thai spirit houses. Sweet scent is the cheapest and most universal sign of devotion.',
    },
  },
  {
    id: 'ewe-osan',
    yoruba: 'Ewé Osan',
    pron: 'EH-ween oh-SAHN',
    common: 'Citrus Leaf (Lime/Orange)',
    botanical: 'Citrus aurantiifolia / C. sinensis',
    family: 'Rutaceae',
    parts: ['Leaf', 'Fruit', 'Peel'],
    tags: ['Respiratory', 'Fever', 'Aromatic', 'Kitchen'],
    tagline: 'The fragrant leaf of the lime and orange tree — steam, sweat and shine.',
    traits: { shape: 'oval', edge: 'smooth', color: 'deep', scent: 'aromatic', flower: 'white', habit: 'tree' },
    idCues: {
      leaves: 'Glossy, winged oval leaflets (lime) or pointed oval leaves (orange); oil glands visible when held to light.',
      flowers: 'Intensely fragrant white waxy flowers before fruit set.',
      scent: 'Crushed leaves give a sharp citrus aroma from oil glands.',
      habit: 'Thorny evergreen shrub or small tree, 3–10 m, common in compounds.',
      tip: 'Hold a leaf to the light: tiny translucent oil dots = citrus. The winged leaf-stalk identifies lime.',
    },
    traditional:
      'Citrus leaves are steeped for early fevers and taken with honey as a "sweat tea"; the leaf and peel are used in washes for the skin and in cleansing baths before ceremonies. The fruit supplies the everyday vitamin C of the household.',
    remedies: [
      {
        name: 'Citrus leaf sweat tea',
        prepare: 'Steep 6–8 fresh leaves in 2 cups hot water, covered, 10 minutes; add honey and lemon juice. Drink warm, then rest under a light cover.',
        use: 'Traditional comfort at the onset of fever; supports hydration and vitamin C intake.',
        caution: 'Fever in a child under 5, fever over 3 days, or fever with stiff neck/confusion = health facility now, not home care.',
      },
      {
        name: 'Citrus peel & leaf rinse for hair and skin',
        prepare: 'Boil leaves and peel in 2 litres water 10 minutes; cool and rinse hair or body.',
        use: 'Traditional fragrant rinse; the oils cleanse and scent.',
        caution: 'Citrus on skin followed by sun exposure can cause phototoxic burns — use in the evening.',
      },
    ],
    nutrition: [
      'Fruit provides vitamin C, folate and flavonoids; leaf tea adds aromatic antioxidants.',
      'Limonene and citral compounds are studied for calming and antimicrobial effects.',
      'Peel is rich in pectin fibre and bioflavonoids.',
      'Adding lemon to iron-rich plant foods improves iron absorption at the table.',
    ],
    cautions: [
      'Citrus oils cause sun-sensitivity — avoid topical use before sun exposure.',
      'Acidic drinks worsen reflux and can erode tooth enamel — rinse the mouth after.',
      'Grapefruit-like interactions are uncommon with lime and orange, but check with your pharmacist if on statins or calcium-channel blockers.',
      'Pesticide residues concentrate in peel — wash and source carefully.',
    ],
    evidence:
      'Citrus fruits have strong nutritional evidence; leaf teas have modest antimicrobial and calming data. As hydration with vitamin C during a fever, this is safe, sensible supportive care.',
    orisha: ['Oshun', 'Yemoja'],
    spiritual: {
      yoruba: 'The scent of citrus is the scent of a prepared space. Leaves are boiled for ceremonial baths, laid at entrances, and used in the washing of ritual objects — fragrance as protocol, not decoration.',
      global: 'Citrus figures in purification rites from Mediterranean Catholic blessing of the fields to Chinese New Year offerings, where whole oranges signify fullness and gold.',
    },
  },
];

export const herbById = (id: string): Herb | undefined => herbs.find((h) => h.id === id);

export const allTags: string[] = Array.from(new Set(herbs.flatMap((h) => h.tags))).sort();

export const SUPPORT_LINE =
  'This app supports healthcare — it does not replace diagnosis, medication or emergency care.';
