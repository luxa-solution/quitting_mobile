import { ReactNode } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

type Props = {
  children: ReactNode;
  insetTop?: boolean;
  insetBottom?: boolean;
  topOffset?: number;
  style?: StyleProp<ViewStyle>;
  paddingHorizontal?: number;
  testID?: string;
};

export function ScreenLayout({
  children,
  insetTop = true,
  insetBottom = true,
  topOffset = 0,
  paddingHorizontal = 20,
  style,
  testID,
}: Props) {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      testID={testID ?? 'screen-layout'}
      style={[
        styles.base,
        { paddingHorizontal },
        insetTop && { paddingTop: top + topOffset },
        insetBottom && { paddingBottom: bottom },
        style,
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  base: {
    flex: 1,
    backgroundColor: theme.colors.background.screen,
  },
}));
