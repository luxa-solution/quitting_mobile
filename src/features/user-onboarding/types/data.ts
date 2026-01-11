import type { UserOnboardingIllustrationKey } from '../utils';

export type SelectionMode = 'single' | 'multi';

export type OnboardingOption = {
  id: string;
  label: string;
};

export type QuestionStep = {
  kind: 'question';
  step: number; // 1..9
  id: string;
  title: string;
  selection: SelectionMode;
  options: OnboardingOption[];
  continueText?: string;
};

export type InfoStep = {
  kind: 'info';
  step: number; // 1..9
  id: string;
  title: string;
  subtitle?: string;
  illustration: UserOnboardingIllustrationKey;
  illustrationStyle: 'full' | 'part';
  continueText?: string;
};

export type ProgressStep = QuestionStep | InfoStep;

export type ProtectionStage = 'intro' | 'grant' | 'activated';
