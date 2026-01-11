import { Href, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Alert, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

import {
  Header,
  PasswordRules,
  SignupButtonGroup,
  SignupInfoGroup,
  SignupInputGroup,
  Footer,
} from '../components';
import { evaluatePassword } from '../utils';

export function SignupScreen() {
  const { top, bottom } = useSafeAreaInsets();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const rules = useMemo(() => evaluatePassword(password), [password]);
  const canSubmit =
    !isSubmitting &&
    email.trim().length > 0 &&
    password.length > 0 &&
    Object.values(rules).every(Boolean);

  // TODO: We need a proper implementation of the sign up logic
  const handleCreateAccount = async () => {
    if (!canSubmit) return;

    try {
      setIsSubmitting(true);

      // await registerMutation({
      //   email: email.trim(),
      //   password,
      // });

      router.replace('/new-user-onboarding' as Href);
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Signup failed.';
      Alert.alert('Signup failed', message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleOAuth = () => router.replace('/new-user-onboarding' as Href);
  const handleAppleOAuth = () => router.replace('/new-user-onboarding' as Href);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={[styles.container, { paddingTop: top, paddingBottom: bottom }]}>
        <View style={styles.form}>
          <Header title="Create account" onBack={() => router.back()} />

          <SignupInputGroup
            email={email}
            onChangeEmail={setEmail}
            password={password}
            onChangePassword={setPassword}
          />

          <PasswordRules password={password} />

          <SignupInfoGroup onPressPrivacy={() => {}} onPressTerms={() => {}} />

          <SignupButtonGroup
            canSubmit={canSubmit}
            onCreateAccount={handleCreateAccount}
            onContinueApple={handleAppleOAuth}
            onContinueGoogle={handleGoogleOAuth}
          />
        </View>

        <Footer onPressSignIn={() => router.push('/auth/login' as Href)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F7F8FB',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    gap: 20,
  },
  form: {
    gap: 30,
  },
});
