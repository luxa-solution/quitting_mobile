import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import { ScreenLayout } from './ScreenLayout';

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 10, bottom: 20, left: 0, right: 0 }),
}));

function normalizeStyle(style: any) {
  // RN style prop may be object | array | undefined
  const arr = Array.isArray(style) ? style : style ? [style] : [];
  // filter out false/null from "insetTop && {..}"
  return arr.filter(Boolean);
}

describe('ScreenLayout', () => {
  it('applies default insets and paddingHorizontal', () => {
    const { getByTestId } = render(
      <ScreenLayout testID="layout">
        <Text testID="child">Hello</Text>
      </ScreenLayout>
    );

    const layout = getByTestId('layout');
    const styleArr = normalizeStyle(layout.props.style);

    expect(styleArr.some((s) => s?.flex === 1)).toBe(true);
    expect(styleArr).toEqual(
      expect.arrayContaining([expect.objectContaining({ paddingHorizontal: 20 })])
    );
    expect(styleArr).toEqual(expect.arrayContaining([expect.objectContaining({ paddingTop: 10 })]));
    expect(styleArr).toEqual(
      expect.arrayContaining([expect.objectContaining({ paddingBottom: 20 })])
    );
  });

  it('respects insetTop=false and insetBottom=false', () => {
    const { getByTestId } = render(
      <ScreenLayout testID="layout" insetTop={false} insetBottom={false}>
        <Text>Hello</Text>
      </ScreenLayout>
    );

    const layout = getByTestId('layout');
    const styleArr = normalizeStyle(layout.props.style);

    expect(styleArr.some((s) => s && 'paddingTop' in s)).toBe(false);
    expect(styleArr.some((s) => s && 'paddingBottom' in s)).toBe(false);
  });

  it('adds topOffset to paddingTop when insetTop=true', () => {
    const { getByTestId } = render(
      <ScreenLayout testID="layout" topOffset={5}>
        <Text>Hello</Text>
      </ScreenLayout>
    );

    const styleArr = normalizeStyle(getByTestId('layout').props.style);
    expect(styleArr).toEqual(expect.arrayContaining([expect.objectContaining({ paddingTop: 15 })]));
  });

  it('merges style prop last', () => {
    const { getByTestId } = render(
      <ScreenLayout testID="layout" style={{ backgroundColor: 'red' }}>
        <Text>Hello</Text>
      </ScreenLayout>
    );

    const styleArr = normalizeStyle(getByTestId('layout').props.style);
    expect(styleArr[styleArr.length - 1]).toEqual(
      expect.objectContaining({ backgroundColor: 'red' })
    );
  });
});

describe('ScreenLayout testID', () => {
  it('uses default testID when not provided', () => {
    const { getByTestId } = render(
      <ScreenLayout>
        <Text>Hello</Text>
      </ScreenLayout>
    );
    expect(getByTestId('screen-layout')).toBeTruthy();
  });

  it('uses provided testID when given', () => {
    const { getByTestId, queryByTestId } = render(
      <ScreenLayout testID="custom-layout">
        <Text>Hello</Text>
      </ScreenLayout>
    );

    expect(getByTestId('custom-layout')).toBeTruthy();
    expect(queryByTestId('screen-layout')).toBeNull();
  });
});
