import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { InfoRow } from './InfoRow';

type Props = {
  onPressPrivacy: () => void;
  onPressTerms: () => void;
  linkStyle?: object;
};

export function SignupInfoGroup({ onPressPrivacy, onPressTerms, linkStyle }: Props) {
  return (
    <View style={styles.infoGroup}>
      <InfoRow variant="shield">
        By signing up, you agree to our{' '}
        <Text style={[styles.link, linkStyle]} accessibilityRole="link" onPress={onPressPrivacy}>
          Privacy Policy
        </Text>{' '}
        and{' '}
        <Text style={[styles.link, linkStyle]} accessibilityRole="link" onPress={onPressTerms}>
          Terms of Service
        </Text>
        .
      </InfoRow>

      <InfoRow variant="flash">
        This form is protected by reCAPTCHA and the Google{' '}
        <Text style={[styles.link, linkStyle]} accessibilityRole="link" onPress={onPressPrivacy}>
          Privacy Policy
        </Text>{' '}
        and{' '}
        <Text style={[styles.link, linkStyle]} accessibilityRole="link" onPress={onPressTerms}>
          Terms of Service
        </Text>{' '}
        apply.
      </InfoRow>
    </View>
  );
}

const styles = StyleSheet.create({
  infoGroup: {
    gap: 10,
  },
  link: {
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
