import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/app-onboarding/app-icon.png')} style={styles.icon} />
      <Text style={styles.text}>Quitting</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  icon: {
    width: 28.48,
    height: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: theme.colors.content.primary,
  },
}));
