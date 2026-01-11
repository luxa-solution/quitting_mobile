import { Href, useRouter } from 'expo-router';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { ProgressHeader } from '@/features/user-onboarding/components';
import { StepBody, StepIllustration } from '@/features/user-onboarding/components/steps';
import { PROGRESS_TOTAL, getProgressStep } from '@/features/user-onboarding/data';
import { useStepNavigation, useStepSelection } from '@/features/user-onboarding/hooks';
import type { InfoStep } from '@/features/user-onboarding/types';
import { AppButton, ScreenLayout } from '@/shared/components';

type Props = {
  step: number;
};

export function StepsScreen({ step }: Props) {
  const router = useRouter();

  const stepData = getProgressStep(step);

  const nav = useStepNavigation({ step, total: PROGRESS_TOTAL });
  const { selected } = useStepSelection(stepData?.id);

  if (!stepData) {
    router.replace('/new-user-onboarding' as Href);
    return null;
  }
  const isInfo = stepData.kind === 'info';

  return (
    <ScreenLayout>
      <ProgressHeader
        step={stepData.step}
        total={PROGRESS_TOTAL}
        onBack={nav.onBack}
        onSkip={nav.onSkip}
      />

      {isInfo ? <StepIllustration step={stepData as InfoStep} /> : null}

      <StepBody step={stepData} selectedIds={selected} />
      <View style={styles.cta}>
        <AppButton text={stepData.continueText ?? 'Continue'} onPress={nav.onContinue} />
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  cta: {
    paddingHorizontal: 20,
    paddingBottom: 18,
    zIndex: 2,
    width: '100%',
  },
});
