import { Stack } from 'expo-router';
import { useUnistyles } from 'react-native-unistyles';

function AuthLayout() {
  const { theme } = useUnistyles();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTitleStyle: {
          color: theme.colors.typography,
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
