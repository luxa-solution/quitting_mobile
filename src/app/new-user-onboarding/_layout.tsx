import { Stack } from 'expo-router';
import { useUnistyles } from 'react-native-unistyles';

function UserOnboardingLayout() {
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
        headerShown: false,
      }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}

export default UserOnboardingLayout;
