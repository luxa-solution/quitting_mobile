export type PasswordRuleKey = 'len' | 'upper' | 'lower' | 'number' | 'special';

export function evaluatePassword(password: string): Record<PasswordRuleKey, boolean> {
  return {
    len: password.length >= 6,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };
}
