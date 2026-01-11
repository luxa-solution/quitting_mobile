import { Tabs } from 'expo-router';
import { useUnistyles } from 'react-native-unistyles';

export default function TabLayout() {
  const { theme } = useUnistyles();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background.screen,
        },
        headerTitleStyle: {
          color: theme.colors.content.primary,
        },
        tabBarActiveTintColor: theme.colors.brand.primary,
        tabBarStyle: {
          backgroundColor: theme.colors.background.screen,
        },
        headerShown: false,
      }}>
      <Tabs.Screen name="index" />
    </Tabs>
  );
}
