import { useLocalSearchParams } from 'expo-router';

import { StepsScreen } from '@/features/user-onboarding/screens';

export default function NewUserOnboardingStepsRoute() {
  const { step } = useLocalSearchParams<{ step?: string }>();

  const stepNum = Number(step ?? '1');

  return <StepsScreen step={stepNum} />;
}
