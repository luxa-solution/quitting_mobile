import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface AppOnboardingState {
  hasOnboarded: boolean;
  hasHydrated: boolean;
  updateHasOnboarded: (hasOnboarded: boolean) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
}

export const useAppOnboardingStore = create<AppOnboardingState>()(
  persist(
    (set) => ({
      hasOnboarded: false,
      hasHydrated: false,
      updateHasOnboarded: (hasOnboarded) => set({ hasOnboarded }),
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: 'app-onboarding',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state, error) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
