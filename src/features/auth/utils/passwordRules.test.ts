import { evaluatePassword } from './passwordRules';

describe('evaluatePassword', () => {
  it('fails all rules for empty', () => {
    expect(evaluatePassword('')).toEqual({
      len: false,
      upper: false,
      lower: false,
      number: false,
      special: false,
    });
  });

  it('passes all rules for a strong password', () => {
    const res = evaluatePassword('Abcdef1!');
    expect(Object.values(res).every(Boolean)).toBe(true);
  });
});
