import { SlideData } from '../types';

export const slide_data: SlideData[] = [
  {
    id: 'protect',
    title: 'Protect Your Gaze.',
    description: 'Block harmful websites before\ntemptation strikes.',
    image: require('@/assets/app-onboarding/protect-gaze.png'),
    cta: 'Continue',
  },
  {
    id: 'faith',
    title: 'Find Strength in Faith',
    description: "Receive reminders from Qur'an\nand Hadith.",
    image: require('@/assets/app-onboarding/strength-faith.png'),
    cta: 'Continue',
  },
  {
    id: 'growth',
    title: 'Track Your Growth',
    description: "Take a moment to see how far you've\ncome every single day.",
    image: require('@/assets/app-onboarding/track-growth.png'),
    cta: 'Sign Up',
  },
];
