import { render } from '@testing-library/react-native';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import RootLayout from './_layout';

// MOCKS

// expo-router
jest.mock('expo-router', () => {
  const MockStack = ({ children }: { children: React.ReactNode }) => <>{children}</>;
  MockStack.Screen = ({ children }: { children: React.ReactNode }) => <>{children}</>;
  return { Stack: MockStack };
});

// splash screen
jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn().mockResolvedValue(undefined),
  hideAsync: jest.fn().mockResolvedValue(undefined),
}));

// unistyles
jest.mock('react-native-unistyles', () => ({
  useUnistyles: () => ({
    theme: {
      colors: {
        background: '#fff',
        typography: '#000',
      },
    },
  }),
}));

// onboarding store (dynamic mock)
let mockHasHydrated = false;

jest.mock('@/shared/store', () => ({
  useAppOnboardingStore: (selector: any) =>
    selector({
      hasHydrated: mockHasHydrated,
      hasOnboarded: false,
    }),
}));

// TESTS

describe('<RootLayout />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns null while app is not hydrated', () => {
    mockHasHydrated = false;

    const { toJSON } = render(<RootLayout />);
    expect(toJSON()).toBeNull();
    expect(SplashScreen.hideAsync).not.toHaveBeenCalled();
  });

  it('renders app and hides splash when hydrated', () => {
    mockHasHydrated = true;

    render(<RootLayout />);
    expect(SplashScreen.hideAsync).toHaveBeenCalledTimes(1);
  });
});
