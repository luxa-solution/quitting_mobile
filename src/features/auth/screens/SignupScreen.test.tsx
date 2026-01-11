import { render, fireEvent, act } from '@testing-library/react-native';
import React from 'react';
import { registerMutation } from '../api/mutations';
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

jest.mock('../api/mutations', () => ({
  registerMutation: jest.fn(),
}));

const registerMutationMock = registerMutation as unknown as jest.Mock;

describe('SignupScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('does not call register when password is weak / form invalid', async () => {
    const { getByTestId } = render(<SignupScreen />);

    await act(async () => {
      fireEvent.changeText(getByTestId('email'), 'test@example.com');
      fireEvent.changeText(getByTestId('password'), 'abc');
      fireEvent.press(getByTestId('create-account'));
    });

    expect(registerMutationMock).not.toHaveBeenCalled();
    expect(mockRouter.replace).not.toHaveBeenCalled();
  });

  it('calls register and navigates to /new-user-onboarding when form is valid', async () => {
    registerMutationMock.mockResolvedValueOnce({ message: 'User registered successfully' });

    const { getByTestId } = render(<SignupScreen />);

    await act(async () => {
      fireEvent.changeText(getByTestId('email'), 'test@example.com');
      fireEvent.changeText(getByTestId('password'), 'Abcdef1!');
    });

    await act(async () => {
      fireEvent.press(getByTestId('create-account'));
    });

    // await waitFor(() => {
    //   expect(registerMutationMock).toHaveBeenCalledTimes(1);
    // });

    // expect(registerMutationMock).toHaveBeenCalledWith({
    //   email: 'test@example.com',
    //   password: 'Abcdef1!',
    // });

    expect(mockRouter.replace).toHaveBeenCalledWith('/new-user-onboarding');
  });

  // it('shows alert and does not navigate when register fails', async () => {
  //   const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => {});
  //   registerMutationMock.mockRejectedValueOnce(new Error('All Fields are required '));

  //   const { getByTestId } = render(<SignupScreen />);

  //   await act(async () => {
  //     fireEvent.changeText(getByTestId('email'), 'test@example.com');
  //     fireEvent.changeText(getByTestId('password'), 'Abcdef1!');
  //   });

  //   await act(async () => {
  //     fireEvent.press(getByTestId('create-account'));
  //   });

  //   await waitFor(() => {
  //     expect(registerMutationMock).toHaveBeenCalledTimes(1);
  //   });

  //   expect(alertSpy).toHaveBeenCalledWith('Signup failed', 'All Fields are required ');
  //   expect(mockRouter.replace).not.toHaveBeenCalled();

  //   alertSpy.mockRestore();
  // });

  it('navigates to login from footer', () => {
    const { getByTestId } = render(<SignupScreen />);

    fireEvent.press(getByTestId('sign-in'));

    expect(mockRouter.push).toHaveBeenCalledWith('/auth/login');
  });
});
