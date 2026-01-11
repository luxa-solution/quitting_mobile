import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type Props = {
  onPressSignIn: () => void;
};

export function Footer({ onPressSignIn }: Props) {
  return (
    <View style={styles.bottomRow}>
      <Text style={styles.bottomText}>Already have an account? </Text>
      <Text
        testID="sign-in"
        style={[styles.bottomText, styles.link]}
        onPress={onPressSignIn}
        accessibilityRole="link">
        Sign in
      </Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  bottomRow: {
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomText: {
    fontSize: 11,
    color: theme.colors.content.muted,
  },
  link: {
    fontWeight: '600',
    textDecorationLine: 'underline',
    color: theme.colors.brand.primary,
  },
}));
