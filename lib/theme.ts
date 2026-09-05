export type Palette = {
  mode: 'light' | 'dark';
  bg: string;
  bgAlt: string;
  surface: string;
  surfaceAlt: string;
  text: string;
  textMuted: string;
  textFaint: string;
  primary: string;
  primaryDeep: string;
  primarySoft: string;
  onPrimary: string;
  gold: string;
  goldSoft: string;
  terracotta: string;
  green: string;
  greenSoft: string;
  danger: string;
  dangerSoft: string;
  border: string;
  overlay: string;
  shadow: string;
};

export const lightPalette: Palette = {
  mode: 'light',
  bg: '#FAF4E8',
  bgAlt: '#F2E9D6',
  surface: '#FFFFFF',
  surfaceAlt: '#F6EEDD',
  text: '#1B2136',
  textMuted: '#6E6552',
  textFaint: '#9A8F79',
  primary: '#25386F',
  primaryDeep: '#182653',
  primarySoft: '#E4E8F6',
  onPrimary: '#FFFFFF',
  gold: '#B5822A',
  goldSoft: '#F7EBD1',
  terracotta: '#AE5127',
  green: '#3A7A4E',
  greenSoft: '#E2F0E5',
  danger: '#A93636',
  dangerSoft: '#FBE7E4',
  border: '#E6D9BE',
  overlay: 'rgba(20,26,45,0.55)',
  shadow: '#3A2E14',
};

export const darkPalette: Palette = {
  mode: 'dark',
  bg: '#0E1320',
  bgAlt: '#141B2B',
  surface: '#18202F',
  surfaceAlt: '#1F2939',
  text: '#F2ECDD',
  textMuted: '#A2A9BA',
  textFaint: '#767F94',
  primary: '#7C95E8',
  primaryDeep: '#31407A',
  primarySoft: '#212C48',
  onPrimary: '#0E1320',
  gold: '#E2AE54',
  goldSoft: '#2C2517',
  terracotta: '#DC7A4F',
  green: '#6BB489',
  greenSoft: '#1B2C24',
  danger: '#E6786F',
  dangerSoft: '#2E1C1D',
  border: '#27324A',
  overlay: 'rgba(5,8,16,0.68)',
  shadow: '#000000',
};

export const radii = {
  sm: 10,
  md: 16,
  lg: 22,
  xl: 30,
  pill: 999,
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 14,
  lg: 20,
  xl: 28,
  xxl: 38,
};

/** Deterministic tile colours so every herb keeps a stable visual identity. */
export const tileColors: [string, string][] = [
  ['#25386F', '#3A7A4E'],
  ['#7A4B18', '#B5822A'],
  ['#1F5B4C', '#4E9C6B'],
  ['#5B2A4E', '#AE5127'],
  ['#2E3F1F', '#6E8F3E'],
  ['#25386F', '#8A6BC4'],
  ['#7A2F2F', '#D2913C'],
  ['#144C63', '#3A7A4E'],
];

export function tileFor(id: string): [string, string] {
  let h = 0;
  for (let i = 0; i < id.length; i += 1) h = (h * 31 + id.charCodeAt(i)) % 100000;
  return tileColors[h % tileColors.length];
}
