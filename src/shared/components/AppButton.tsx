import { Text, Pressable, PressableProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type Props = PressableProps & {
  text: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export function AppButton({ onPress, text, buttonStyle, textStyle, ...rest }: Props) {
  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onPress} {...rest}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create((theme) => ({
  button: {
    width: '100%',
    height: 52,
    borderRadius: theme.radii.pill,
    backgroundColor: theme.colors.button.primaryBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.colors.button.primaryText,
    fontSize: 16,
    fontWeight: '600',
  },
}));
