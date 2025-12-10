import { create } from 'zustand';

export interface AppOnboardingState {
  hasOnboarded: boolean;
  updateHasOnboarded: (hasOnboarded: boolean) => void;
}

export const useAppOnboardingStore = create<AppOnboardingState>((set) => ({
  hasOnboarded: false,
  updateHasOnboarded: (hasOnboarded) => set({ hasOnboarded }),
}));
