import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useUnistyles } from 'react-native-unistyles';

import '@/translation';
import { useAppOnboardingStore } from '@/shared/store';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { theme } = useUnistyles();

  const hasHydrated = useAppOnboardingStore((s) => s.hasHydrated);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync().catch(() => {});
  }, []);

  useEffect(() => {
    if (hasHydrated) {
      SplashScreen.hideAsync();
    }
  }, [hasHydrated]);

  if (!hasHydrated) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        initialRouteName="tabs"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTitleStyle: {
            color: theme.colors.typography,
          },
          headerTintColor: theme.colors.typography,
          headerShown: false,
        }}>
        <Stack.Screen name="tabs" />
        <Stack.Screen name="auth" />
        <Stack.Screen name="new-app-onboarding" />
        <Stack.Screen name="new-user-onboarding" />
      </Stack>
    </>
  );
}
