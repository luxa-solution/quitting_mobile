import { Href, useRouter } from 'expo-router';

type Args = {
  step: number;
  total: number;
};

export function useStepNavigation({ step, total }: Args) {
  const router = useRouter();
  const goToStep = (n: number) => router.replace(`/new-user-onboarding/steps?step=${n}` as Href);

  const onBack = () => {
    if (step <= 1) router.replace('/new-user-onboarding' as Href);
    else goToStep(step - 1);
  };

  const onSkip = () => {
    router.replace('/new-user-onboarding/protection?stage=intro' as Href);
  };

  const onContinue = () => {
    if (step < total) goToStep(step + 1);
    else router.replace('/new-user-onboarding/protection?stage=intro' as Href);
  };

  return { goToStep, onBack, onSkip, onContinue };
}
