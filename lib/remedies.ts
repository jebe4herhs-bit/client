/**
 * Household formulas — gentle, food-forward preparations drawn from Yoruba practice.
 * Each carries explicit limits and escalation advice.
 */

export type Formula = {
  id: string;
  name: string;
  yoruba: string;
  goal: string;
  level: 'Gentle food' | 'Household' | 'Practitioner';
  time: string;
  herbIds: string[];
  steps: string[];
  dose: string;
  course: string;
  cautions: string[];
  seekCare: string;
};

export const formulas: Formula[] = [
  {
    id: 'warm-throat',
    name: 'Warm Throat & Chest Cup',
    yoruba: 'Oójìn tùútu',
    goal: 'Comfort at the first sign of a cold — blocked nose, tickly throat, chills.',
    level: 'Gentle food',
    time: '10 minutes',
    herbIds: ['efinrin', 'ata', 'ewe-osan', 'oyin'],
    steps: [
      'Wash 8 efinrin leaves and tear them by hand — tearing releases more oil than cutting.',
      'Slice a thumb-sized piece of ginger and the peel of half a lime.',
      'Pour just-boiled water over everything, cover immediately and steep 10 minutes; boiling water drives off the aromatics.',
      'Strain into a cup, add 1 teaspoon of raw honey and a squeeze of lime juice.',
      'Sip slowly while warm, then rest under a light cover for 20 minutes.',
    ],
    dose: 'Half to one cup, up to 3 times daily.',
    course: 'Up to 4 days. If symptoms persist beyond a week, see a clinician.',
    cautions: [
      'This is comfort care — it does not treat flu, COVID-19 or bacterial infection.',
      'No honey for children under 1 year; weak versions only for young children.',
      'Avoid if you have active reflux or a raw stomach.',
    ],
    seekCare:
      'Urgent: difficulty breathing, chest pain, confusion, blue lips, or fever that will not break. Booked: cough or fever lasting more than 7 days, or any fever in pregnancy, infancy or older age.',
  },
  {
    id: 'bitter-digestive',
    name: 'Bitter Before Food Tonic',
    yoruba: 'Oójìn ìgbí',
    goal: 'Appetite and digestion support after illness, or for slow, heavy digestion.',
    level: 'Household',
    time: '15 minutes',
    herbIds: ['ewuro', 'efinrin', 'oyin'],
    steps: [
      'Wash 10 bitter-leaf leaves and squeeze them through clean water 2–3 times to soften the bitterness.',
      'Boil in 2 cups of water down to 1 cup over a gentle flame.',
      'Strain and allow to cool to warm.',
      'Take a quarter cup 20 minutes before a main meal, sweetened with a little honey if needed.',
    ],
    dose: 'Quarter cup per dose.',
    course: 'Up to 14 days, then pause. Bitter herbs are cycled, not taken forever.',
    cautions: [
      'Do not combine with prescribed diabetes medicines without monitoring — blood sugar can fall too low.',
      'Avoid with active stomach ulcers, gastritis or reflux.',
      'Stop if you develop vomiting, dizziness or palpitations.',
    ],
    seekCare:
      'Belly pain that is severe, constant or localised to one spot, vomiting that will not stop, weight loss, or black stools — these need assessment the same day.',
  },
  {
    id: 'fever-comfort',
    name: 'Fever Comfort Sponge',
    yoruba: 'Ìgbà gbígbóná',
    goal: 'Comfort measures while you arrange testing or treatment for a fever.',
    level: 'Household',
    time: '20 minutes',
    herbIds: ['dongoyaro', 'ewe-osan', 'efinrin'],
    steps: [
      'Boil 2 handfuls of neem leaf in 4 litres of water for 15 minutes and allow it to cool to lukewarm.',
      'Add a few citrus leaves and efinrin for fragrance if available.',
      'Sponge the body — forehead, joints, armpits and neck — with a soft cloth.',
      'Keep the person lightly covered afterwards and encourage small, frequent sips of ORS or water.',
      'Rest, and re-sponge every 4–6 hours if the fever persists.',
    ],
    dose: 'As often as needed for comfort.',
    course: 'Comfort only, for hours — not days. Testing comes first.',
    cautions: [
      'This does NOT treat malaria, typhoid or any infection. Test and treat.',
      'Do not sponge with cold water or alcohol — both can shock the body.',
      'Watch for dehydration: sunken eyes, no urine, sleepiness, or inability to drink.',
    ],
    seekCare:
      'Same-day clinic for any fever with stiff neck, confusion, seizure, persistent vomiting, blood in stool or urine, breathlessness — and for every fever in pregnancy, in infants under 5, and in older adults.',
  },
  {
    id: 'skin-wash',
    name: 'Cooling Skin Wash',
    yoruba: 'Ìṣọpọ̀ ewé',
    goal: 'External care for heat rash, fungal itching and minor skin irritation.',
    level: 'Gentle food',
    time: '20 minutes',
    herbIds: ['dongoyaro', 'ewe-pupa', 'ewe-koyye'],
    steps: [
      'Boil a handful each of neem and senna leaves in 3 litres of water for 15 minutes.',
      'Cool completely and strain through clean cloth.',
      'Wash the affected skin morning and evening — do not scrub broken skin.',
      'Pat dry thoroughly; fungal organisms thrive in damp folds.',
      'For stubborn fungal patches, dilute 1 part neem oil in 10 parts carrier oil and apply thinly after washing.',
    ],
    dose: 'Twice daily.',
    course: '10 days maximum without review.',
    cautions: [
      'Never apply neem oil undiluted.',
      'Do not use on deep, open or pus-filled wounds — that needs clinical care.',
      'Anyone diabetic with a foot or leg skin break must be seen promptly; infection escalates fast.',
    ],
    seekCare:
      'Spreading redness, pus, fever, or a rash that does not improve in 10 days needs diagnosis — many skin conditions look alike and need specific treatment.',
  },
  {
    id: 'postpartum-warm',
    name: 'Post-Birth Warming Peppersoup',
    yoruba: 'Ẹ̀rí ìyàwó',
    goal: 'Traditional warming nourishment in the weeks after childbirth.',
    level: 'Practitioner',
    time: '45 minutes',
    herbIds: ['ata', 'iyere', 'eru', 'efinrin'],
    steps: [
      'Prepare a light, low-salt fish or goat peppersoup with plenty of broth.',
      'Add a few slices of ginger, a small pinch of crushed iyere and 2 cracked eru pods.',
      'Finish with torn efinrin leaves in the last 2 minutes of cooking.',
      'Serve warm in a small bowl with a starchy side — amala, pounded yam or rice.',
      'Eat slowly, twice daily, alongside ordinary nourishing food.',
    ],
    dose: 'One small bowl, twice daily.',
    course: 'First 2–4 weeks after birth, alongside a varied diet.',
    cautions: [
      'After a Caesarean, start very mild — heavy spice can upset healing digestion.',
      'If breastfeeding, watch that the baby is not unsettled by strongly spiced milk.',
      'These are foods, not medicines: they do not stop post-partum infection or haemorrhage.',
    ],
    seekCare:
      'Post-birth bleeding that soaks a pad hourly, fever, foul-smelling discharge, severe headache, blurred vision or calf pain are emergencies — go to hospital immediately.',
  },
  {
    id: 'calming-night',
    name: 'Night Calm Infusion',
    yoruba: 'Alẹ́ tùútu',
    goal: 'Wind-down tea for restless nights and tense days.',
    level: 'Gentle food',
    time: '10 minutes',
    herbIds: ['efirin', 'efinrin', 'oyin'],
    steps: [
      'Steep a small handful of sweet basil and 4 efinrin leaves in just-boiled water, covered.',
      'Rest 10 minutes, then strain into a cup.',
      'Add a teaspoon of raw honey once the cup is warm, not hot.',
      'Drink 45 minutes before bed, screens off, in low light.',
    ],
    dose: 'One cup at night.',
    course: 'Nightly as needed; review with a clinician if sleeplessness exceeds 3 weeks.',
    cautions: [
      'Aromatic herbs can trigger reflux in some people — take with a small snack.',
      'Do not drive or operate machinery if drowsy.',
      'Persistent insomnia may signal pain, depression, sleep apnoea or thyroid disease — these are treatable conditions.',
    ],
    seekCare:
      'Insomnia with low mood, weight change, or snoring with gasping should be assessed — tea will not fix sleep apnoea.',
  },
  {
    id: 'digestive-seed',
    name: 'Belly Ease Seed Honey',
    yoruba: 'Oyin èrò',
    goal: 'Mild digestive comfort for occasional bloating and heaviness.',
    level: 'Gentle food',
    time: '5 minutes',
    herbIds: ['efinrin', 'gofa', 'oyin'],
    steps: [
      'Soak 1 teaspoon of efinrin seed in a small jar of raw honey for 3 days.',
      'Take 1 teaspoon of the infused honey on an empty stomach in the morning.',
      'Follow with a cup of warm water and, if tolerated, a guava-leaf tea through the day.',
    ],
    dose: '1 teaspoon, once daily.',
    course: 'Up to 10 days, then stop and reassess.',
    cautions: [
      'Strong honey infusions can provoke reflux — halve the dose if it burns.',
      'No honey under 1 year of age.',
      'Do not use to self-treat persistent pain or unexplained weight loss.',
    ],
    seekCare:
      'Pain that wakes you at night, pain with vomiting, blood in stool, difficulty swallowing, or unintentional weight loss all need prompt assessment.',
  },
  {
    id: 'nutrient-powder',
    name: 'Daily Leaf Powder (Repletion)',
    yoruba: 'Ẹ̀jẹ̀ ewé',
    goal: 'Gentle iron and micronutrient repletion for convalescence, anaemia support and weaning food.',
    level: 'Household',
    time: '10 minutes to prepare, dried ahead',
    herbIds: ['moringa', 'ewe-erin', 'oyin'],
    steps: [
      'Harvest fresh moringa and pawpaw leaves in the morning; wash and shake dry.',
      'Dry in shade on clean cloth for 2–3 days — direct sun destroys vitamin C.',
      'Grind to a fine powder in a clean, dry grinder; store in a sealed jar away from light.',
      'Stir 1–2 teaspoons into pap, soup, porridge or yoghurt daily.',
      'Pair with a vitamin-C food — guava, citrus or pawpaw — to improve iron absorption.',
    ],
    dose: '1–2 teaspoons daily.',
    course: '4–8 weeks, then review haemoglobin with a clinic if anaemic.',
    cautions: [
      'Anaemia has many causes — iron deficiency, malaria, sickle cell, worm burden, bleeding. Get tested; powder is support, not diagnosis.',
      'Buy or dry from verified clean sources; imported powders have been found contaminated with heavy metals.',
      'Moringa may add to the effect of diabetes and blood-pressure medicines.',
    ],
    seekCare:
      'Extreme tiredness, breathlessness on minimal exertion, palpitations, or pale gums and eyelids — get a blood count done.',
  },
];

export const formulaById = (id: string) => formulas.find((f) => f.id === id);
