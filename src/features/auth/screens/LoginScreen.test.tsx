import { render } from '@testing-library/react-native';
import React from 'react';
import { LoginScreen } from './LoginScreen';

describe('LoginScreen', () => {
  it('renders nothing (empty screen)', () => {
    const { toJSON } = render(<LoginScreen />);
    expect(toJSON()).toBeNull();
  });
});
