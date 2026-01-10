import { Href, router } from 'expo-router';
import { useMemo, useState } from 'react';
import { View } from 'react-native';
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

type Props = {
  onSubmit?: (payload: { email: string; password: string }) => void;
};

export function SignupScreen({ onSubmit }: Props) {
  const { top, bottom } = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const rules = useMemo(() => evaluatePassword(password), [password]);
  const canSubmit =
    email.trim().length > 0 && password.length > 0 && Object.values(rules).every(Boolean);

  const handleCreateAccount = () => {
    if (!canSubmit) return;
    onSubmit?.({ email: email.trim(), password });
    router.replace('/tabs' as Href);
  };

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
            onContinueApple={() => {}}
            onContinueGoogle={() => {}}
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
