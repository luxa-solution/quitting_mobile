import { Stack } from 'expo-router';
import { useUnistyles } from 'react-native-unistyles';

function AuthLayout() {
  const { theme } = useUnistyles();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background.screen,
        },
        headerTitleStyle: {
          color: theme.colors.content.primary,
        },
        animation: 'none',
        headerShown: false,
      }}
      initialRouteName="login">
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="forgot-password" />
    </Stack>
  );
}

export default AuthLayout;
