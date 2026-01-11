import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { AppButton } from '@/shared/components';
import { OAuthButton } from './OAuthButton';

type Props = {
  canSubmit: boolean;
  onCreateAccount: () => void;
  onContinueApple: () => void;
  onContinueGoogle: () => void;
};

export function SignupButtonGroup({
  canSubmit,
  onCreateAccount,
  onContinueApple,
  onContinueGoogle,
}: Props) {
  return (
    <View style={styles.buttonGroups}>
      <AppButton
        testID="create-account"
        text="Create account"
        disabled={!canSubmit}
        onPress={onCreateAccount}
        buttonStyle={[!canSubmit ? { opacity: 0.9 } : undefined, styles.button]}
        textStyle={styles.buttonText}
      />

      <OAuthButton
        testID="continue-apple"
        variant="apple"
        text="Continue with Apple"
        onPress={onContinueApple}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
      <OAuthButton
        testID="continue-google"
        variant="google"
        text="Continue with Google"
        onPress={onContinueGoogle}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  buttonGroups: {
    gap: 16,
    marginTop: 10,
  },
  button: {
    borderRadius: theme.radii.md,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '400',
  },
}));
