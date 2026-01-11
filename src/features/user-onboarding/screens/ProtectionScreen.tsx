import { Href, router } from 'expo-router';
import {
  ProtectionActivated,
  ProtectionGrant,
  ProtectionIntro,
} from '@/features/user-onboarding/components';
import type { ProtectionStage } from '@/features/user-onboarding/types';

type Props = { stage: ProtectionStage };

export function ProtectionScreen({ stage }: Props) {
  if (stage === 'intro') return <ProtectionIntro />;
  if (stage === 'grant') return <ProtectionGrant />;
  return <ProtectionActivated />;
}
