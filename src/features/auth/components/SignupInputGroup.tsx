import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { LabeledTextField } from './LabeledTextField';

type Props = {
  email: string;
  onChangeEmail: (v: string) => void;
  password: string;
  onChangePassword: (v: string) => void;
};

export function SignupInputGroup({ email, onChangeEmail, password, onChangePassword }: Props) {
  return (
    <View style={styles.inputGroups}>
      <LabeledTextField
        label="Email address"
        placeholder="ledger@0.com"
        value={email}
        onChangeText={onChangeEmail}
        keyboardType="email-address"
        testID="email"
      />

      <LabeledTextField
        label="Password"
        placeholder="password"
        value={password}
        onChangeText={onChangePassword}
        secure
        testID="password"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroups: {
    gap: 24,
  },
});
