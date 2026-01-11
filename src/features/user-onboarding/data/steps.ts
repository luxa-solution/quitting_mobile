import type { ProgressStep } from '../types';

export const progressSteps: ProgressStep[] = [
  {
    kind: 'question',
    step: 1,
    id: 'q_bring_you',
    title: 'What brings you\nhere today?',
    selection: 'multi',
    options: [
      { id: 'stop_content', label: 'I want to stop watching\nadult content.' },
      { id: 'protect_faith', label: 'I want to protect myself and\nmy faith.' },
      { id: 'break_habits', label: 'I want to break bad habits\nand improve self-control.' },
      { id: 'help_someone', label: "I'm helping someone else\nquit." },
    ],
  },
  {
    kind: 'question',
    step: 2,
    id: 'q_struggle',
    title: 'How would you describe\nyour current struggle?',
    selection: 'single',
    options: [
      { id: 'slip', label: 'I occasionally slip.' },
      { id: 'weekly', label: 'I struggle weekly.' },
      { id: 'daily', label: 'I struggle daily.' },
      { id: 'addicted', label: "I'm addicted and want to change." },
    ],
  },
  {
    kind: 'question',
    step: 3,
    id: 'q_motivation',
    title: 'What motivates you\nmost to quit?',
    selection: 'multi',
    options: [
      { id: 'allah', label: 'My relationship with Allah.' },
      { id: 'peace', label: 'Peace of mind and focus.' },
      { id: 'family', label: 'My family or future spouse.' },
      { id: 'growth', label: 'Personal growth and self-control.' },
    ],
  },
  {
    kind: 'question',
    step: 4,
    id: 'q_hardest',
    title: 'When do you find it hardest\nto control the urge?',
    selection: 'multi',
    options: [
      { id: 'alone', label: "When I'm alone." },
      { id: 'sleep', label: 'Before sleeping.' },
      { id: 'stressed', label: "When I'm stressed." },
      { id: 'bored', label: "When I'm bored." },
      { id: 'social', label: 'After using social media.' },
    ],
  },
  {
    kind: 'question',
    step: 5,
    id: 'q_support',
    title: 'How would you like the app\nto support you',
    selection: 'multi',
    options: [
      { id: 'motivation', label: 'Daily motivation and reminders.' },
      { id: 'blocking', label: 'Content blocking /\nfiltering.' },
      { id: 'progress', label: 'Tracking my progress.' },
    ],
  },
  {
    kind: 'info',
    step: 6,
    id: 'info_private',
    title: 'Your journey is\ncompletely private.',
    subtitle: 'Everything you share stays only\non your device.',
    illustration: 'journeyComplete',
    illustrationStyle: 'part',
  },
  {
    kind: 'question',
    step: 7,
    id: 'q_goal',
    title: "What's your first goal?",
    selection: 'single',
    options: [
      { id: '7', label: 'Stay clean for 7 days.' },
      { id: '30', label: 'Stay clean for 30 days.' },
      { id: 'routine', label: 'Build a new daily routine.' },
    ],
  },
  {
    kind: 'info',
    step: 8,
    id: 'info_notif',
    title: 'Reach your goals with\nnotifications',
    illustration: 'notification',
    illustrationStyle: 'full',
  },
  {
    kind: 'info',
    step: 9,
    id: 'info_begin',
    title: 'Your journey begins now.',
    subtitle: 'Remember, every small win counts, and Allah\nloves those who turn back to Him.',
    illustration: 'journeyBegins',
    illustrationStyle: 'part',
  },
];

export const PROGRESS_TOTAL = progressSteps.length;

export function getProgressStep(step: number) {
  return progressSteps.find((s) => s.step === step);
}
