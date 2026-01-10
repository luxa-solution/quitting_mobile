import { Ionicons } from '@expo/vector-icons';
import { useMemo } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { evaluatePassword, type PasswordRuleKey } from '../utils';

type Props = {
  password: string;
};

const RULES: { id: PasswordRuleKey; label: string }[] = [
  { id: 'len', label: '6 characters' },
  { id: 'upper', label: 'Uppercase' },
  { id: 'lower', label: 'Lowercase' },
  { id: 'number', label: 'Number' },
  { id: 'special', label: 'Special character' },
];

export function PasswordRules({ password }: Props) {
  const state = useMemo(() => evaluatePassword(password), [password]);

  return (
    <View style={styles.wrap} testID="password-rules">
      {RULES.map((r) => {
        const ok = state[r.id];
        return (
          <View
            key={r.id}
            style={[styles.chip, ok && styles.chipOk]}
            accessibilityLabel={`rule-${r.id}-${ok ? 'ok' : 'no'}`}>
            <Text style={[styles.chipText, ok && styles.chipTextOk]}>{r.label}</Text>
            <Ionicons
              name={ok ? 'checkmark' : 'close'}
              size={14}
              color={ok ? '#FFFFFF' : '#8C8C8C'}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 999,
  },
  chipOk: {
    backgroundColor: '#9E792E',
  },
  chipText: {
    fontSize: 10,
    color: '#8C8C8C',
    fontWeight: '500',
  },
  chipTextOk: {
    color: '#FFFFFF',
  },
});
