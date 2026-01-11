import { render, fireEvent, act } from '@testing-library/react-native';
import React from 'react';
import { SignupScreen } from './SignupScreen';

const mockRouter = {
  back: jest.fn(),
  push: jest.fn(),
  replace: jest.fn(),
};

jest.mock('expo-router', () => ({
  useRouter: () => mockRouter,
}));

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaView: ({ children }: any) => children,
  useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
}));

describe('SignupScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls router.back when header back button is pressed', () => {
    const { getByTestId } = render(<SignupScreen />);

    fireEvent.press(getByTestId('auth-header-back'));

    expect(mockRouter.back).toHaveBeenCalledTimes(1);
  });

  it('does not navigate when form is invalid (weak password)', async () => {
    const { getByTestId } = render(<SignupScreen />);

    await act(async () => {
      fireEvent.changeText(getByTestId('email'), 'test@example.com');
      fireEvent.changeText(getByTestId('password'), 'abc'); // weak
    });

    await act(async () => {
      fireEvent.press(getByTestId('create-account'));
    });

    expect(mockRouter.replace).not.toHaveBeenCalled();
  });

  it('navigates to /new-user-onboarding when form is valid', async () => {
    const { getByTestId } = render(<SignupScreen />);

    await act(async () => {
      fireEvent.changeText(getByTestId('email'), 'test@example.com');
      fireEvent.changeText(getByTestId('password'), 'Abcdef1!'); // strong
    });

    await act(async () => {
      fireEvent.press(getByTestId('create-account'));
    });

    expect(mockRouter.replace).toHaveBeenCalledWith('/new-user-onboarding');
  });

  it('navigates to /new-user-onboarding when pressing Continue with Google', () => {
    const { getByTestId } = render(<SignupScreen />);

    fireEvent.press(getByTestId('continue-google'));

    expect(mockRouter.replace).toHaveBeenCalledWith('/new-user-onboarding');
  });

  it('navigates to /new-user-onboarding when pressing Continue with Apple', () => {
    const { getByTestId } = render(<SignupScreen />);

    fireEvent.press(getByTestId('continue-apple'));

    expect(mockRouter.replace).toHaveBeenCalledWith('/new-user-onboarding');
  });

  it('navigates to login from footer', () => {
    const { getByTestId } = render(<SignupScreen />);

    fireEvent.press(getByTestId('sign-in'));

    expect(mockRouter.push).toHaveBeenCalledWith('/auth/login');
  });
});
