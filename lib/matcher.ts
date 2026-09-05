import { herbs, Herb, Traits } from './herbs';

export type TraitKey = keyof Traits;

export type TraitGroup = {
  key: TraitKey;
  title: string;
  icon: string;
  options: { value: string; label: string }[];
};

export const traitGroups: TraitGroup[] = [
  {
    key: 'shape',
    title: 'Leaf shape',
    icon: 'leaf-outline',
    options: [
      { value: 'oval', label: 'Oval / egg-shaped' },
      { value: 'lance', label: 'Long & pointed' },
      { value: 'compound', label: 'Feathery (many leaflets)' },
      { value: 'broad', label: 'Broad / paddle' },
      { value: 'lobed', label: 'Palmate / cut' },
      { value: 'heart', label: 'Heart-shaped' },
      { value: 'needle', label: 'Needle-like' },
    ],
  },
  {
    key: 'edge',
    title: 'Leaf edge',
    icon: 'cut-outline',
    options: [
      { value: 'smooth', label: 'Smooth' },
      { value: 'serrated', label: 'Toothed' },
      { value: 'wavy', label: 'Wavy' },
      { value: 'lobed', label: 'Deeply lobed' },
    ],
  },
  {
    key: 'color',
    title: 'Leaf colour',
    icon: 'color-palette-outline',
    options: [
      { value: 'deep', label: 'Deep green' },
      { value: 'light', label: 'Bright / pale green' },
      { value: 'red', label: 'Red-tinged' },
      { value: 'grey', label: 'Grey / blue-green' },
    ],
  },
  {
    key: 'scent',
    title: 'Scent when crushed',
    icon: 'flask-outline',
    options: [
      { value: 'aromatic', label: 'Fragrant' },
      { value: 'pungent', label: 'Sharp / hot' },
      { value: 'bitter', label: 'Bitter, no aroma' },
      { value: 'earthy', label: 'Earthy / smoky' },
      { value: 'mild', label: 'Mild / grassy' },
    ],
  },
  {
    key: 'flower',
    title: 'Flower colour',
    icon: 'flower-outline',
    options: [
      { value: 'white', label: 'White / cream' },
      { value: 'yellow', label: 'Yellow' },
      { value: 'purple', label: 'Purple / mauve' },
      { value: 'red', label: 'Red / crimson' },
      { value: 'green', label: 'Greenish / hidden' },
    ],
  },
  {
    key: 'habit',
    title: 'Plant habit',
    icon: 'body-outline',
    options: [
      { value: 'herb', label: 'Low herb' },
      { value: 'shrub', label: 'Shrub' },
      { value: 'tree', label: 'Tree' },
      { value: 'climber', label: 'Climber / vine' },
    ],
  },
];

/** Near-miss tolerance: a partially similar observation still carries signal. */
const NEAR: Record<string, string[]> = {
  shape: ['oval', 'lance'],
  color: ['deep', 'light'],
  scent: ['aromatic', 'pungent', 'earthy'],
  edge: ['smooth', 'wavy'],
  flower: ['white', 'green'],
  habit: ['herb', 'shrub'],
};

export type MatchResult = {
  herb: Herb;
  score: number;
  matched: string[];
  missed: string[];
};

export function matchByTraits(selection: Partial<Record<TraitKey, string>>): MatchResult[] {
  const answered = traitGroups.filter((g) => selection[g.key]);
  if (answered.length === 0) return [];

  const results: MatchResult[] = herbs.map((herb) => {
    let hits = 0;
    const matched: string[] = [];
    const missed: string[] = [];

    answered.forEach((group) => {
      const chosen = selection[group.key] as string;
      const actual = String(herb.traits[group.key]);
      const label = group.options.find((o) => o.value === chosen)?.label ?? chosen;
      if (actual === chosen) {
        hits += 1;
        matched.push(label);
      } else if ((NEAR[group.key] ?? []).includes(actual) && (NEAR[group.key] ?? []).includes(chosen)) {
        hits += 0.5;
        matched.push(`${label} ~partial`);
      } else {
        missed.push(label);
      }
    });

    // Aromatic agreement is a strong ethnobotanical signal — weight it slightly.
    const scentWeight = selection.scent === herb.traits.scent ? 0.15 : 0;
    const base = hits / answered.length;
    const score = Math.max(0, Math.min(1, base * 0.9 + scentWeight));
    return { herb, score, matched, missed };
  });

  return results.filter((r) => r.score >= 0.34).sort((a, b) => b.score - a.score).slice(0, 6);
}

export function matchByName(query: string): MatchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const scored = herbs
    .map((herb) => {
      const fields: [string, number][] = [
        [herb.yoruba.toLowerCase(), 0.97],
        [herb.common.toLowerCase(), 0.95],
        [herb.botanical.toLowerCase(), 0.93],
        [herb.family.toLowerCase(), 0.72],
      ];
      let best = 0;
      fields.forEach(([field, weight]) => {
        if (field === q) best = Math.max(best, weight);
        else if (field.startsWith(q)) best = Math.max(best, weight - 0.08);
        else if (field.includes(q)) best = Math.max(best, weight - 0.15);
      });
      herb.tags.forEach((tag) => {
        if (tag.toLowerCase().includes(q)) best = Math.max(best, 0.6);
      });
      if (herb.traditional.toLowerCase().includes(q)) best = Math.max(best, 0.5);
      return { herb, score: best, matched: [], missed: [] };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  return scored;
}

export const ANALYSIS_STEPS = [
  'Normalising specimen observations…',
  'Comparing venation, margin and scent markers…',
  'Cross-checking ethnobotanical records for Yorubaland…',
  'Weighing caution and interaction profile…',
  'Ranking candidate monographs…',
];
