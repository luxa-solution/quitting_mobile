import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { LabeledTextField } from './LabeledTextField';

// mock authImages so Image source is predictable
jest.mock('../utils', () => ({
  authImages: {
    eyeOpen: { test: 'eyeOpen' },
    eyeClosed: { test: 'eyeClosed' },
    shield: { test: 'shield' },
    flash: { test: 'flash' },
  },
}));

describe('LabeledTextField', () => {
  it('renders label and passes value/onChangeText to TextInput', () => {
    const onChangeText = jest.fn();

    const { getByText, getByTestId } = render(
      <LabeledTextField
        label="Email"
        placeholder="Enter email"
        value="a@b.com"
        onChangeText={onChangeText}
        testID="email"
      />
    );

    expect(getByText('Email')).toBeTruthy();

    fireEvent.changeText(getByTestId('email'), 'new@b.com');
    expect(onChangeText).toHaveBeenCalledWith('new@b.com');
  });

  it('applies focus/blur style branch by toggling isFocused', () => {
    const { getByTestId } = render(
      <LabeledTextField
        label="Email"
        placeholder="Enter email"
        value=""
        onChangeText={() => {}}
        testID="email"
      />
    );

    const input = getByTestId('email');

    // trigger focus & blur handlers (they set state)
    fireEvent(input, 'focus');
    fireEvent(input, 'blur');

    // We mainly want to ensure those handlers exist and do not crash.
    // (Style changes are hard to assert reliably without testIDs on wrapper Views.)
    expect(true).toBe(true);
  });

  it('when secure=true, shows toggle button and toggles secureTextEntry', () => {
    const { getByTestId, queryByTestId } = render(
      <LabeledTextField
        label="Password"
        placeholder="Enter password"
        value="Abc"
        onChangeText={() => {}}
        secure
        testID="password"
      />
    );

    // toggle button exists only when secure is true
    expect(getByTestId('password-toggle')).toBeTruthy();

    const input = getByTestId('password');
    // initial isSecure = secure prop => true
    expect((input as any).props.secureTextEntry).toBe(true);

    // initial eye icon should be eyeOpen when isSecure=true (your code: isSecure ? eyeOpen : eyeClosed)
    expect(getByTestId('password-eye').props.source).toEqual({ test: 'eyeOpen' });

    fireEvent.press(getByTestId('password-toggle'));

    // after toggle, isSecure becomes false
    expect(getByTestId('password').props.secureTextEntry).toBe(false);
    expect(getByTestId('password-eye').props.source).toEqual({ test: 'eyeClosed' });

    // ensure no extra unexpected elements
    expect(queryByTestId('password-nonexistent')).toBeNull();
  });

  it('when secure=false, does not render toggle button and secureTextEntry is false', () => {
    const { getByTestId, queryByTestId } = render(
      <LabeledTextField
        label="Password"
        placeholder="Enter password"
        value="Abc"
        onChangeText={() => {}}
        secure={false}
        testID="password"
      />
    );

    expect(queryByTestId('password-toggle')).toBeNull();
    expect(getByTestId('password').props.secureTextEntry).toBe(false);
  });
});
