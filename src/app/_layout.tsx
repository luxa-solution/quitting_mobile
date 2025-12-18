import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useUnistyles } from 'react-native-unistyles';

import '@/translation';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { theme } = useUnistyles();

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
