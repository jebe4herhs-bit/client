import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { radii, tileFor } from '../lib/theme';
import { usePalette } from '../lib/themeContext';

export type GlyphName = React.ComponentProps<typeof Ionicons>['name'];

export { usePalette };

/* ---------------- Screen scaffolding ---------------- */

export function Screen({
  children,
  style,
  padded = true,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
  padded?: boolean;
}) {
  const p = usePalette();
  return (
    <View style={[{ flex: 1, backgroundColor: p.bg }, padded && { paddingHorizontal: 18 }, style]}>
      {children}
    </View>
  );
}

export function ScreenHeader({
  title,
  subtitle,
  onBack,
  right,
}: {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  right?: React.ReactNode;
}) {
  const p = usePalette();
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top + 8, paddingBottom: 14, flexDirection: 'row', alignItems: 'center' }}>
      {onBack ? (
        <Pressable
          onPress={onBack}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          style={({ pressed }) => [
            styles.backBtn,
            { backgroundColor: p.surfaceAlt, borderColor: p.border, opacity: pressed ? 0.7 : 1 },
          ]}
        >
          <Ionicons name="chevron-back" size={20} color={p.text} />
        </Pressable>
      ) : null}
      <View style={{ flex: 1, marginLeft: onBack ? 12 : 2 }}>
        <Text style={[styles.headerTitle, { color: p.text }]} numberOfLines={1}>
          {title}
        </Text>
        {subtitle ? (
          <Text style={[styles.headerSub, { color: p.textMuted }]} numberOfLines={1}>
            {subtitle}
          </Text>
        ) : null}
      </View>
      {right}
    </View>
  );
}

/* ---------------- Surfaces ---------------- */

export function Card({
  children,
  style,
  tone = 'surface',
  delay = 0,
}: {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  tone?: 'surface' | 'alt' | 'primary' | 'danger' | 'gold' | 'green';
  delay?: number;
}) {
  const p = usePalette();
  const bg =
    tone === 'alt'
      ? p.surfaceAlt
      : tone === 'primary'
        ? p.primarySoft
        : tone === 'danger'
          ? p.dangerSoft
          : tone === 'gold'
            ? p.goldSoft
            : tone === 'green'
              ? p.greenSoft
              : p.surface;
  const borderColor =
    tone === 'primary'
      ? p.primarySoft
      : tone === 'danger'
        ? p.dangerSoft
        : tone === 'gold'
          ? p.goldSoft
          : tone === 'green'
            ? p.greenSoft
            : p.border;
  return (
    <Animated.View
      entering={FadeInDown.delay(delay).duration(320).springify().damping(18)}
      style={[styles.card, { backgroundColor: bg, borderColor, shadowColor: p.shadow }, style as ViewStyle]}
    >
      {children}
    </Animated.View>
  );
}

export function SectionTitle({
  title,
  icon,
  kicker,
}: {
  title: string;
  icon?: GlyphName;
  kicker?: string;
}) {
  const p = usePalette();
  return (
    <View style={{ marginTop: 24, marginBottom: 10 }}>
      {kicker ? (
        <Text style={[styles.kicker, { color: p.gold, letterSpacing: 1.4 }]}>{kicker.toUpperCase()}</Text>
      ) : null}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {icon ? <Ionicons name={icon} size={17} color={p.primary} style={{ marginRight: 8 }} /> : null}
        <Text style={[styles.sectionTitle, { color: p.text }]}>{title}</Text>
      </View>
    </View>
  );
}

export function Body({ children, style }: { children: React.ReactNode; style?: TextStyle }) {
  const p = usePalette();
  return <Text style={[styles.body, { color: p.textMuted }, style as TextStyle]}>{children}</Text>;
}

export function Bullet({
  text,
  tone = 'default',
  index,
}: {
  text: string;
  tone?: 'default' | 'danger' | 'green';
  index?: number;
}) {
  const p = usePalette();
  const color = tone === 'danger' ? p.danger : tone === 'green' ? p.green : p.textMuted;
  return (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <View
        style={{
          width: 22,
          alignItems: 'flex-start',
          paddingTop: 2,
        }}
      >
        {index !== undefined ? (
          <Text style={{ color: p.gold, fontSize: 12, fontWeight: '800' }}>{index}.</Text>
        ) : (
          <Ionicons
            name={tone === 'danger' ? 'alert-circle' : tone === 'green' ? 'checkmark-circle' : 'ellipse'}
            size={tone === 'default' ? 7 : 15}
            color={color}
            style={{ marginTop: tone === 'default' ? 6 : 2 }}
          />
        )}
      </View>
      <Text style={{ flex: 1, fontSize: 14.5, lineHeight: 22, color }}>{text}</Text>
    </View>
  );
}

export function Tag({ label, tone = 'neutral' }: { label: string; tone?: 'neutral' | 'green' | 'gold' | 'danger' }) {
  const p = usePalette();
  const map = {
    neutral: { bg: p.surfaceAlt, fg: p.textMuted, border: p.border },
    green: { bg: p.greenSoft, fg: p.green, border: p.greenSoft },
    gold: { bg: p.goldSoft, fg: p.gold, border: p.goldSoft },
    danger: { bg: p.dangerSoft, fg: p.danger, border: p.dangerSoft },
  }[tone];
  return (
    <View style={[styles.tag, { backgroundColor: map.bg, borderColor: map.border }]}>
      <Text style={[styles.tagText, { color: map.fg }]}>{label}</Text>
    </View>
  );
}

/* ---------------- Interactive ---------------- */

export function Chip({
  label,
  icon,
  selected,
  onPress,
}: {
  label: string;
  icon?: GlyphName;
  selected?: boolean;
  onPress?: () => void;
}) {
  const p = usePalette();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: !!selected }}
      style={({ pressed }) => [
        styles.chip,
        {
          backgroundColor: selected ? p.primary : p.surface,
          borderColor: selected ? p.primary : p.border,
          opacity: pressed ? 0.85 : 1,
        },
      ]}
    >
      {icon ? (
        <Ionicons
          name={icon}
          size={14}
          color={selected ? p.onPrimary : p.textMuted}
          style={{ marginRight: 6 }}
        />
      ) : null}
      <Text style={[styles.chipText, { color: selected ? p.onPrimary : p.textMuted }]}>{label}</Text>
    </Pressable>
  );
}

export function Button({
  label,
  onPress,
  icon,
  variant = 'primary',
  disabled,
  style,
}: {
  label: string;
  onPress?: () => void;
  icon?: GlyphName;
  variant?: 'primary' | 'ghost' | 'danger' | 'gold';
  disabled?: boolean;
  style?: ViewStyle;
}) {
  const p = usePalette();
  const cfg = {
    primary: { bg: p.primary, fg: p.onPrimary, border: p.primary },
    gold: { bg: p.gold, fg: '#FFFFFF', border: p.gold },
    danger: { bg: p.dangerSoft, fg: p.danger, border: p.danger },
    ghost: { bg: 'transparent', fg: p.primary, border: p.border },
  }[variant];
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: cfg.bg, borderColor: cfg.border, opacity: disabled ? 0.45 : pressed ? 0.85 : 1 },
        style,
      ]}
    >
      {icon ? <Ionicons name={icon} size={17} color={cfg.fg} style={{ marginRight: 8 }} /> : null}
      <Text style={[styles.buttonText, { color: cfg.fg }]}>{label}</Text>
    </Pressable>
  );
}

export function PressableRow({
  children,
  onPress,
  style,
}: {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
}) {
  return (
    <Pressable onPress={onPress} accessibilityRole="button" style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, style]}>
      {children}
    </Pressable>
  );
}

/* ---------------- Domain bits ---------------- */

export function HerbTile({ id, name, size = 56, radius = 16 }: { id: string; name: string; size?: number; radius?: number }) {
  const [from, to] = tileFor(id);
  const initial = (name || '?').trim().charAt(0).toUpperCase();
  return (
    <LinearGradient
      colors={[from, to]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ width: size, height: size, borderRadius: radius, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text style={{ color: 'rgba(255,255,255,0.95)', fontSize: size * 0.4, fontWeight: '800' }}>{initial}</Text>
      <Ionicons name="leaf" size={size * 0.2} color="rgba(255,255,255,0.6)" style={{ marginTop: 1 }} />
    </LinearGradient>
  );
}

export function ConfidenceBar({ value, delay = 0 }: { value: number; delay?: number }) {
  const p = usePalette();
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100);
  return (
    <View style={{ height: 8, borderRadius: 8, backgroundColor: p.surfaceAlt, overflow: 'hidden' }}>
      <Animated.View
        entering={FadeIn.delay(delay).duration(420)}
        style={{ width: `${pct}%`, height: '100%', backgroundColor: pct >= 70 ? p.green : pct >= 45 ? p.gold : p.terracotta }}
      />
    </View>
  );
}

export function EmptyState({
  icon,
  title,
  message,
}: {
  icon: GlyphName;
  title: string;
  message: string;
}) {
  const p = usePalette();
  return (
    <Animated.View entering={FadeIn.duration(300)} style={styles.empty}>
      <View
        style={{
          width: 74,
          height: 74,
          borderRadius: 37,
          backgroundColor: p.surfaceAlt,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 14,
        }}
      >
        <Ionicons name={icon} size={32} color={p.textFaint} />
      </View>
      <Text style={[styles.emptyTitle, { color: p.text }]}>{title}</Text>
      <Text style={[styles.emptyMsg, { color: p.textMuted }]}>{message}</Text>
    </Animated.View>
  );
}

export function SafetyBanner({
  text,
  onPress,
  tone = 'gold',
}: {
  text: string;
  onPress?: () => void;
  tone?: 'gold' | 'danger' | 'green';
}) {
  const p = usePalette();
  const cfg =
    tone === 'danger'
      ? { bg: p.dangerSoft, fg: p.danger, icon: 'medkit' as GlyphName }
      : tone === 'green'
        ? { bg: p.greenSoft, fg: p.green, icon: 'shield-checkmark' as GlyphName }
        : { bg: p.goldSoft, fg: p.gold, icon: 'information-circle' as GlyphName };
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole={onPress ? 'button' : 'text'}
      style={({ pressed }) => [
        styles.banner,
        { backgroundColor: cfg.bg, opacity: pressed && onPress ? 0.85 : 1, borderColor: cfg.bg },
      ]}
    >
      <Ionicons name={cfg.icon} size={18} color={cfg.fg} style={{ marginTop: 1, marginRight: 10 }} />
      <Text style={{ flex: 1, fontSize: 13, lineHeight: 19, color: cfg.fg, fontWeight: '600' }}>{text}</Text>
      {onPress ? <Ionicons name="chevron-forward" size={16} color={cfg.fg} /> : null}
    </Pressable>
  );
}

export function Divider() {
  const p = usePalette();
  return <View style={{ height: 1, backgroundColor: p.border, marginVertical: 14 }} />;
}

export function Hero({
  children,
  colors,
  style,
}: {
  children: React.ReactNode;
  colors: [string, string];
  style?: ViewStyle;
}) {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[{ borderRadius: radii.xl, padding: 20, overflow: 'hidden' }, style]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  headerTitle: { fontSize: 21, fontWeight: '800', letterSpacing: 0.2 },
  headerSub: { fontSize: 12.5, marginTop: 2, fontWeight: '500' },
  card: {
    borderRadius: radii.lg,
    borderWidth: 1,
    padding: 16,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 2,
  },
  kicker: { fontSize: 10.5, fontWeight: '800', marginBottom: 4 },
  sectionTitle: { fontSize: 17.5, fontWeight: '800', letterSpacing: 0.2 },
  body: { fontSize: 14.8, lineHeight: 23 },
  tag: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: radii.pill, borderWidth: 1, marginRight: 6, marginBottom: 6 },
  tagText: { fontSize: 11.5, fontWeight: '700' },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: radii.pill,
    borderWidth: 1,
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: { fontSize: 13, fontWeight: '700' },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: radii.pill,
    borderWidth: 1.5,
  },
  buttonText: { fontSize: 14.5, fontWeight: '800', letterSpacing: 0.2 },
  empty: { alignItems: 'center', paddingVertical: 46, paddingHorizontal: 26 },
  emptyTitle: { fontSize: 16, fontWeight: '800', marginBottom: 6, textAlign: 'center' },
  emptyMsg: { fontSize: 13.5, lineHeight: 20, textAlign: 'center' },
  banner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: radii.md,
    borderWidth: 1,
    padding: 13,
    marginBottom: 12,
  },
});
