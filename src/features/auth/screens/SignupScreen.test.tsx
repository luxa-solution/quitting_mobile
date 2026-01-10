import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { SignupScreen } from './SignupScreen';

jest.mock('expo-router', () => ({
  router: {
    back: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
  },
}));

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaView: ({ children }: any) => children,
  useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
}));

describe('SignupScreen', () => {
  it('submits only when password is strong', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<SignupScreen onSubmit={onSubmit} />);

    fireEvent.changeText(getByTestId('email'), 'test@example.com');
    fireEvent.changeText(getByTestId('password'), 'abc');
    fireEvent.press(getByTestId('create-account'));
    expect(onSubmit).not.toHaveBeenCalled();

    fireEvent.changeText(getByTestId('password'), 'Abcdef1!');
    fireEvent.press(getByTestId('create-account'));
    expect(onSubmit).toHaveBeenCalledWith({ email: 'test@example.com', password: 'Abcdef1!' });

    const { router } = require('expo-router');
    expect(router.replace).toHaveBeenCalledWith('/tabs');
  });

  it('navigates to login from footer', () => {
    const { getByTestId } = render(<SignupScreen />);
    fireEvent.press(getByTestId('sign-in'));
    const { router } = require('expo-router');
    expect(router.push).toHaveBeenCalledWith('/auth/login');
  });
});
