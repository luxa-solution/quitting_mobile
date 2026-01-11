import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type Props = {
  onSignIn: () => void;
};

export function Footer({ onSignIn }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={onSignIn}>
          Sign in
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: theme.colors.content.primary,
    fontWeight: '400',
  },
  link: {
    color: theme.colors.brand.primary,
  },
}));
