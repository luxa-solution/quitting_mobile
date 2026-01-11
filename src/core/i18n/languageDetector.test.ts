import * as Localization from 'expo-localization';
import { languageDetector } from './languageDetector';

jest.mock('expo-localization', () => ({
  getLocales: jest.fn(),
}));

describe('languageDetector', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('detects the first locale languageCode', () => {
    (Localization.getLocales as jest.Mock).mockReturnValue([{ languageCode: 'ar' }]);
    expect(languageDetector.detect()).toBe('ar');
  });

  it('falls back to "en" when first locale has no languageCode', () => {
    (Localization.getLocales as jest.Mock).mockReturnValue([{ languageCode: null }]);
    expect(languageDetector.detect()).toBe('en');
  });
});
