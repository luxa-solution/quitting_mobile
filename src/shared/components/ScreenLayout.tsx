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
};

export function ScreenLayout({
  children,
  insetTop = true,
  insetBottom = true,
  topOffset = 0,
  paddingHorizontal = 20,
  style,
}: Props) {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
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

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
