import { useLocalSearchParams } from 'expo-router';

import { ProtectionScreen } from '@/features/user-onboarding/screens';
import type { ProtectionStage } from '@/features/user-onboarding/types';

export default function NewUserOnboardingProtectionRoute() {
  const { stage } = useLocalSearchParams<{ stage?: ProtectionStage }>();

  return <ProtectionScreen stage={(stage ?? 'intro') as ProtectionStage} />;
}
