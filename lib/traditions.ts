/**
 * The spiritual dimension of herbs — how the world's traditions relate to plants
 * beyond the chemistry. Presented respectfully, with cultural boundaries made clear.
 */

export type TraditionHerb = { name: string; role: string };

export type Tradition = {
  id: string;
  name: string;
  region: string;
  subtitle: string;
  accent: string;
  intro: string;
  principles: string[];
  herbs: TraditionHerb[];
  boundary: string;
};

export const traditions: Tradition[] = [
  {
    id: 'yoruba',
    name: 'Yoruba Ewe-Òwe',
    region: 'South-western Nigeria · Benin · Togo · Diaspora',
    subtitle: 'Leaf as medicine, message and relationship',
    accent: '#B5822A',
    intro:
      'In Yoruba thought a plant is never only chemistry. Ewé (leaf) carries àṣẹ — the force of effectiveness — and the same plant can be food, medicine, offering and instruction, depending on who prepares it, for whom, and with what words. Knowledge is held in lineage: elders (agbẹ́yẹ̀wó), herbalists (oníṣègùn) and priests of Ifá transmit both the use and the protocol.',
    principles: [
      'Àṣẹ — the power of effective speech: preparation is accompanied by spoken instruction, and the words are part of the method.',
      'Ori first — personal destiny and head are consulted before any remedy; the client’s Orí is addressed before the body.',
      'Cooling and heating — plants and conditions are read as tùútu (cool) or gbígbóná (hot); healing restores balance between them.',
      'Bitterness teaches — bitter plants purge body and misfortune alike; sweetness (honey, kola) seals the work.',
      'Nothing is waste — plants of refuse ground and crossroads are kept precisely because they are overlooked.',
    ],
    herbs: [
      { name: 'Obì (Kola nut)', role: 'Covenant: broken and shared to seal every serious conversation.' },
      { name: 'Oyin (Honey)', role: 'The substance of Oshun — sweetness that carries bitter medicine.' },
      { name: 'Ewuro (Bitter leaf)', role: 'Medicine of discipline; offered where work and honesty are asked for.' },
      { name: 'Efinrin (Scent leaf)', role: 'Fragrant cleansing; laid at thresholds and used to cool heated disputes.' },
      { name: 'Dongoyaro (Neem)', role: 'Protective boundary plant, grown at cemeteries and courtyards.' },
      { name: 'Àrìdàn', role: 'Winged forest fruit of endurance — used where strength is being asked for.' },
    ],
    boundary:
      'Specific ritual prescriptions belong to initiated practitioners — Babalawo (Ifá), Oníṣègùn and Olorisha. This app does not teach initiation, oríkì protocol or restricted recitations. If a matter needs a ritual response, go to your temple and your elder; this app helps you speak the same language.',
  },
  {
    id: 'orisha',
    name: 'Òrìṣà Plant Correspondences',
    region: 'Yoruba cosmology · Candomblé · Santería · Lucumí',
    subtitle: 'Which greens belong to which powers',
    accent: '#3A7A4E',
    intro:
      'Each Òrìṣà governs a domain of nature, and the plants of that domain are the ones offered, bathed in, or laid at that shrine. Correspondences travel with the diaspora — a river plant in Nigeria is still a river plant in Bahia — while local species are adopted into the same symbolic grammar.',
    principles: [
      'Oshun — fresh water, love, fertility, sweetness: honey, golden and fragrant plants, riverine greens, basil, moringa.',
      'Yemoja — ocean, motherhood, white flowers and cooling leaves: aloe, citrus blossom, beach and coastal flora.',
      'Ogun — iron, labour, forest paths: tough barks, bitter roots, garlic, kola, any forest plant worked with a blade.',
      'Shango — thunder, justice, red: obi kola, red-cored plants, hibiscus, anything crimson and heating.',
      'Oya — wind, transformation, the marketplace: winged seeds, pungent aromatics, plants of change and dispersal.',
      'Eshu / Elegba — crossroads and messages: every plant of refuse ground and roadside, plus strongly scented offerings that carry the message.',
    ],
    herbs: [
      { name: 'Oyin (Honey)', role: 'The offering that opens Oshun’s door — and the vehicle of most sweet preparations.' },
      { name: 'Obì (Kola)', role: 'Broken for all orishas; the nut that makes a gathering lawful.' },
      { name: 'Sákárà (Roselle)', role: 'Crimson drink for the celebrations of Oshun and Yemoja.' },
      { name: 'Ràjì (Aloe)', role: 'Cooling leaf for baths of blessing and post-partum care.' },
      { name: 'Àtà (Ginger)', role: 'Warming plant of strength and restoration after effort.' },
      { name: 'Ewé Kóyyè', role: 'Crossroads plant — belonging to Eshu, who is consulted first.' },
    ],
    boundary:
      'Offerings, weekdays, colours and collars vary by lineage and by house. Never improvise a ritual from an app: an error given with good intentions is still an error. Learn from your Iya or Babalawo.',
  },
  {
    id: 'ayurveda',
    name: 'Ayurveda',
    region: 'India · Nepal · global diaspora',
    subtitle: 'Three doshas, six tastes, one digestion',
    accent: '#AE5127',
    intro:
      'Ayurveda — knowledge of life — reads the body through three doshas (vata, pitta, kapha) and treats through taste, digestion (agni) and daily routine. Its plant pharmacy is enormous and systematised, and it shares with Yoruba practice the conviction that food and medicine are a continuum.',
    principles: [
      'Six tastes (shad rasa) — sweet, sour, salty, pungent, bitter, astringent — each with a known physiological direction.',
      'Agni, the digestive fire, is treated as the root of health; most disease begins with impaired digestion in this model.',
      'Rasayana — rejuvenative tonics taken over time rather than acute drugs taken in crisis.',
      'Prakriti — each person has a constitution; the same herb can heal one person and disturb another.',
    ],
    herbs: [
      { name: 'Tulsi (Holy basil)', role: 'Daily adaptogen and respiratory tonic, the sacred plant of Hindu households.' },
      { name: 'Haridra (Turmeric)', role: 'Anti-inflammatory rasayana — the same root Yoruba practice calls ata ile pupa.' },
      { name: 'Neem', role: 'The great purifier of pitta — also Yoruba dongoyaro.' },
      { name: 'Ashwagandha', role: 'Nervous-system strengthener for vata depletion.' },
      { name: 'Triphala', role: 'Gentle overnight bowel and digestion regulation.' },
    ],
    boundary:
      'Ayurvedic diagnosis is individualised by a trained vaidyar. Potent rasayana and detox (panchakarma) protocols should not be self-prescribed.',
  },
  {
    id: 'tcm',
    name: 'Traditional Chinese Medicine',
    region: 'China · East Asia · global',
    subtitle: 'Qi, meridians and the ecology of a formula',
    accent: '#A93636',
    intro:
      'TCM treats the pattern, not the symptom: a herb is chosen for its thermal nature, its flavour and the meridian it enters, then balanced in a formula where one herb leads, one supports, one corrects and one guides. The formula is a small society.',
    principles: [
      'Qi, blood, yin and yang — imbalance is read as a pattern before it is a disease name.',
      'Thermal nature — hot, warm, neutral, cool, cold: every plant has one, and matching matters more than potency.',
      'Five flavours — pungent disperses, sweet tonifies, sour consolidates, bitter drains, salty descends.',
      'Jun chen zuo shi — the envoy structure of a classical formula: sovereign, minister, assistant, guide.',
    ],
    herbs: [
      { name: 'Ginseng (Renshen)', role: 'Sovereign tonic for severe qi deficiency.' },
      { name: 'Astragalus (Huangqi)', role: 'Defensive qi, immune support, prolapse of qi.' },
      { name: 'Goji (Gouqizi)', role: 'Nourishes liver and kidney yin — a food-grade tonic berry.' },
      { name: 'Ginkgo', role: 'Circulation and memory; standardised extracts carry real interaction risk.' },
      { name: 'Ginger (Shengjiang)', role: 'Warming digestive herb — shared with Yoruba ata.' },
    ],
    boundary:
      'Classical formulas are diagnosis-specific and pharmacologically active. Self-mixing with prescribed medication is a common cause of herb–drug interaction harm — use a qualified practitioner.',
  },
  {
    id: 'unani',
    name: 'Unani & Prophetic Medicine',
    region: 'Middle East · North Africa · South Asia',
    subtitle: 'Humours, moderation and the kitchen remedy',
    accent: '#2E6B8A',
    intro:
      'Unani-Greek medicine, carried and refined in the Islamic world, reads health through the four humours and the six non-naturals (air, food, movement, sleep, excretion, emotions). Prophetic tradition adds a small canon of highly regarded remedies — honey, black seed, dates, olive, sidr — taken simply and gratefully.',
    principles: [
      'Mizaj (temperament) — every food and herb is hot, cold, wet or dry to a degree, and the diet is adjusted accordingly.',
      'Moderation in all non-naturals — most illness is located in the imbalance of ordinary living.',
      'Tadbir — regimen of diet, movement, sleep and environment is treated as the primary medicine.',
      'Simple, grateful remedies — the prophetic canon favours few substances, taken plainly.',
    ],
    herbs: [
      { name: 'Habbat al-barakah (Black seed)', role: 'Called a remedy for all but death in the hadith tradition; studied for metabolic effects.' },
      { name: 'Zaytun (Olive)', role: 'Food, lamp and ointment — the archetype of a nourishing staple.' },
      { name: 'Asal (Honey)', role: 'The same medicine Yoruba practice uses to carry bitter powders.' },
      { name: 'Sidr (Lote tree)', role: 'Leaf used for washing, hair care and ritual purification.' },
      { name: 'Sana-makki (Senna)', role: 'Short-course purgative — the same discipline as Yoruba ewú pupa.' },
    ],
    boundary:
      'Unani treatment is prescribed by an Unani tabib according to temperament and is regulated as a medical system in several countries — it is a clinical discipline, not folk improvisation.',
  },
  {
    id: 'western',
    name: 'European & Anglo-American Folk Herbalism',
    region: 'Britain · Ireland · Northern Europe · Appalachia',
    subtitle: 'The hedge, the kitchen and the wise woman',
    accent: '#5B6E3F',
    intro:
      'Before pharmacies, the hedge was the dispensary — Elder, Yarrow, Nettle, Mugwort and Comfrey carried into modern phytotherapy. This tradition emphasises food-first tonics, seasonal rhythm and continuity with household practice.',
    principles: [
      'Food as first medicine — broths, bitters, nettles and grains before tinctures.',
      'Seasonal and local — use what grows within walking distance, harvested respectfully.',
      'The bitter before the sweet — digestive bitters taken before meals, exactly as in Yoruba practice.',
      'Do no harm, know your limits — European herbalists increasingly work alongside GPs and pharmacists.',
    ],
    herbs: [
      { name: 'Elderflower & berry', role: 'Cold and flu comfort tea; flowers and berries are used differently.' },
      { name: 'Yarrow', role: 'Wound herb and fever sweeper — the soldier’s plant of Europe.' },
      { name: 'Mugwort', role: 'Dream and digestive herb; an emmenagogue, therefore avoided in pregnancy.' },
      { name: 'St John’s Wort', role: 'Mood support with a serious interaction profile — never alongside antidepressants, contraception or transplant drugs.' },
      { name: 'Nettle', role: 'Mineral-rich spring tonic and food — the archetypal wild green.' },
    ],
    boundary:
      'European phytotherapy now sits inside regulated medicine. Anything with a drug-interaction profile — St John’s Wort above all — must be cleared with a pharmacist.',
  },
  {
    id: 'indigenous',
    name: 'Indigenous Plant Traditions of the Americas',
    region: 'North, Central & South America · global exchange',
    subtitle: 'Sacred smoke, reciprocity and consent',
    accent: '#7A5B8A',
    intro:
      'Native American and First Nations plant knowledge is specific to nation, territory and ceremonial context — and is not free for the taking. What the wider world can learn is the ethic beneath it: plants are relatives, harvesting requires offering and consent, and ceremony is not a product.',
    principles: [
      'Reciprocity — take only what is given, offer something back, and never harvest a population below viability.',
      'Consent and context — ceremonial plants are used by named peoples in named places; that is not transferable by purchase.',
      'Plant personhood — many nations hold that plants are persons with agency, not raw material.',
      'Ecological crisis is cultural crisis — white sage and palo santo are now overharvested; demand itself must change.',
    ],
    herbs: [
      { name: 'White sage', role: 'Ceremonial smudge plant of specific nations, currently overharvested by commercial demand — buy none, grow your own or use home-grown alternatives.' },
      { name: 'Cedar / Thuja', role: 'Purifying smoke and tea in many northern nations; harvested with permission.' },
      { name: 'Palo Santo', role: 'Sustainably wild-harvested only; refuse wood of unclear origin.' },
      { name: 'Sweetgrass', role: 'Braided hair of the earth, burned for blessing; never wild-dug from prairie remnants.' },
    ],
    boundary:
      'Burning sage is not cleansing your chakras. If you are not a member of the relevant nation, do not perform their ceremony, and buy nothing marketed as sacred. Practise the ethic, not the costume.',
  },
];

export const traditionById = (id: string) => traditions.find((t) => t.id === id);
