import { Pressable, Text, Image, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { authImages } from '../utils';

type Props = {
  variant: 'apple' | 'google';
  text: string;
  onPress: () => void;
  testID?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export function OAuthButton({ variant, text, onPress, testID, buttonStyle, textStyle }: Props) {
  const icon = variant === 'apple' ? authImages.apple : authImages.google;

  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      style={[styles.button, buttonStyle]}
      onPress={onPress}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 26,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#17052F',
  },
  icon: {
    width: 16,
    height: 16,
  },
});
