import { Redirect } from 'expo-router';
import React from 'react';
import { useAppOnboardingStore } from '@/shared/store';

function Index() {
  const hasAppOnboarded = useAppOnboardingStore((state) => state.hasOnboarded);

  if (!hasAppOnboarded) return <Redirect href="./new-app-onboarding" />;

  return <Redirect href="./auth" />;
}

export default Index;
