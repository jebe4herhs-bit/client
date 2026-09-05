import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';

import { darkPalette, lightPalette, Palette } from './theme';

export type ThemeMode = 'system' | 'light' | 'dark';

type ThemeState = {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  p: Palette;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeState>({
  mode: 'system',
  setMode: () => undefined,
  p: lightPalette,
  isDark: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const system = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>('system');

  const setModeCb = useCallback((m: ThemeMode) => setMode(m), []);

  const value = useMemo<ThemeState>(() => {
    const resolvedDark = mode === 'system' ? system === 'dark' : mode === 'dark';
    return {
      mode,
      setMode: setModeCb,
      p: resolvedDark ? darkPalette : lightPalette,
      isDark: resolvedDark,
    };
  }, [mode, system, setModeCb]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeMeta(): ThemeState {
  return useContext(ThemeContext);
}

export function usePalette(): Palette {
  return useContext(ThemeContext).p;
}
