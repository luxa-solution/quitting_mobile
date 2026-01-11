import { fallbackChecker } from './fallbackChecker';

describe('fallbackChecker', () => {
  it('returns fallbackLng when present in resources', () => {
    const resources = {
      en: { translation: {} },
      ar: { translation: {} },
    } as any;

    expect(fallbackChecker(resources, 'en')).toBe('en');
  });

  it('throws when fallbackLng is not present', () => {
    const resources = {
      ar: { translation: {} },
    } as any;

    expect(() => fallbackChecker(resources, 'en')).toThrow(/fallbackLng/);
  });
});
