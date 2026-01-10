import { create } from 'zustand';

export interface UserOnboardingState {
  hasUserOnboarded: boolean;
  updateHasUserOnboarded: (hasUserOnboarded: boolean) => void;
}

export const useUserOnboardingStore = create<UserOnboardingState>((set) => ({
  hasUserOnboarded: false,
  updateHasUserOnboarded: (hasUserOnboarded) => set({ hasUserOnboarded }),
}));
