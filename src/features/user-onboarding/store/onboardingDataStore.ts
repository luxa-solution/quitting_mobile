import { create } from 'zustand';
import { SelectionMode } from '../types';

export type AnswerMap = Record<string, string[]>;

export interface OnboardingDataState {
  answers: AnswerMap;

  toggleOption: (args: { stepId: string; optionId: string; mode: SelectionMode }) => void;
  reset: () => void;

  getStepAnswers: (stepId: string) => string[];
  setStepAnswers: (stepId: string, answers: string[]) => void;
}

const initialState: Pick<OnboardingDataState, 'answers'> = {
  answers: {},
};

const EMPTY: string[] = [];

export const useOnboardingDataStore = create<OnboardingDataState>((set, get) => ({
  ...initialState,

  toggleOption: ({ stepId, optionId, mode }) => {
    const prev = get().answers[stepId] ?? [];

    if (mode === 'single') {
      const next = prev[0] === optionId ? [] : [optionId];
      set((state) => ({ answers: { ...state.answers, [stepId]: next } }));
      return;
    }

    const exists = prev.includes(optionId);
    const next = exists ? prev.filter((x) => x !== optionId) : [...prev, optionId];
    set((state) => ({ answers: { ...state.answers, [stepId]: next } }));
  },

  reset: () => set({ ...initialState }),

  getStepAnswers: (stepId) => get().answers[stepId] ?? EMPTY,

  setStepAnswers: (stepId, answers) =>
    set((state) => ({ answers: { ...state.answers, [stepId]: answers } })),
}));
