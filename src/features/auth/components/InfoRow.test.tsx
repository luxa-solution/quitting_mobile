import { render } from '@testing-library/react-native';
import React from 'react';
import { InfoRow } from './InfoRow';

jest.mock('../utils', () => ({
  authImages: {
    shield: { test: 'shield' },
    flash: { test: 'flash' },
  },
}));

describe('InfoRow', () => {
  it('uses shield icon by default', () => {
    const { getByTestId } = render(<InfoRow>Text</InfoRow>);

    const icon = getByTestId('info-row-icon');
    expect(icon.props.source).toEqual({ test: 'shield' });
  });

  it('uses flash icon when variant="flash"', () => {
    const { getByTestId } = render(<InfoRow variant="flash">Text</InfoRow>);

    const icon = getByTestId('info-row-icon');
    expect(icon.props.source).toEqual({ test: 'flash' });
  });

  it('supports custom testID prefix', () => {
    const { getByTestId } = render(<InfoRow testID="my-row">Text</InfoRow>);
    expect(getByTestId('my-row-icon')).toBeTruthy();
  });
});
