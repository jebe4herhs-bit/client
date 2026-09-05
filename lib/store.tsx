import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type RecentScan = {
  id: string;
  label: string;
  at: number;
};

type State = {
  ready: boolean;
  onboarded: boolean;
  saved: string[];
  recents: RecentScan[];
  acknowledge: () => Promise<void>;
  toggleSave: (id: string) => void;
  isSaved: (id: string) => boolean;
  addRecent: (id: string, label: string) => void;
  clearRecents: () => void;
};

const KEY_SAVED = 'imoeve.saved.v1';
const KEY_RECENTS = 'imoeve.recents.v1';
const KEY_ONBOARDED = 'imoeve.onboarded.v1';

const StoreContext = createContext<State | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [onboarded, setOnboarded] = useState(false);
  const [saved, setSaved] = useState<string[]>([]);
  const [recents, setRecents] = useState<RecentScan[]>([]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const [o, s, r] = await Promise.all([
          AsyncStorage.getItem(KEY_ONBOARDED),
          AsyncStorage.getItem(KEY_SAVED),
          AsyncStorage.getItem(KEY_RECENTS),
        ]);
        if (!alive) return;
        setOnboarded(o === '1');
        setSaved(s ? (JSON.parse(s) as string[]) : []);
        setRecents(r ? (JSON.parse(r) as RecentScan[]) : []);
      } catch {
        // Storage unavailable — continue in memory only.
      } finally {
        if (alive) setReady(true);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const persistRecents = useCallback((next: RecentScan[]) => {
    setRecents(next);
    AsyncStorage.setItem(KEY_RECENTS, JSON.stringify(next)).catch(() => undefined);
  }, []);

  const acknowledge = useCallback(async () => {
    setOnboarded(true);
    await AsyncStorage.setItem(KEY_ONBOARDED, '1').catch(() => undefined);
  }, []);

  const toggleSave = useCallback((id: string) => {
    setSaved((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [id, ...prev];
      AsyncStorage.setItem(KEY_SAVED, JSON.stringify(next)).catch(() => undefined);
      return next;
    });
  }, []);

  const isSaved = useCallback((id: string) => saved.includes(id), [saved]);

  const addRecent = useCallback((id: string, label: string) => {
    setRecents((prev) => {
      const next = [{ id, label, at: Date.now() }, ...prev.filter((x) => x.id !== id)].slice(0, 8);
      AsyncStorage.setItem(KEY_RECENTS, JSON.stringify(next)).catch(() => undefined);
      return next;
    });
  }, []);

  const clearRecents = useCallback(() => persistRecents([]), [persistRecents]);

  const value = useMemo<State>(
    () => ({ ready, onboarded, saved, recents, acknowledge, toggleSave, isSaved, addRecent, clearRecents }),
    [ready, onboarded, saved, recents, acknowledge, toggleSave, isSaved, addRecent, clearRecents],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): State {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used inside StoreProvider');
  return ctx;
}
