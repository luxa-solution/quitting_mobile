import { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { authImages } from '../utils';

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (t: string) => void;
  keyboardType?: 'default' | 'email-address';
  secure?: boolean;
  testID?: string;
};

export function LabeledTextField({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secure = false,
  testID,
}: Props) {
  const [isSecure, setIsSecure] = useState(secure);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>

      <View style={[styles.inputWrap, isFocused ? styles.inputWrapFocus : styles.inputWrapBlur]}>
        <TextInput
          testID={testID}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#A3A3A3"
          autoCapitalize="none"
          keyboardType={keyboardType}
          secureTextEntry={secure ? isSecure : false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[styles.input, secure && styles.inputWithIcon]}
        />

        {secure && (
          <Pressable
            testID={`${testID}-toggle`}
            accessibilityRole="button"
            onPress={() => setIsSecure((s) => !s)}
            style={styles.iconBtn}
            hitSlop={10}>
            <Image
              testID={`${testID}-eye`}
              source={isSecure ? authImages.eyeOpen : authImages.eyeClosed}
              style={styles.eyeIcon}
              resizeMode="contain"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  inputWrap: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    justifyContent: 'center',
    position: 'relative',
  },
  inputWrapFocus: {
    boxShadow: '0px 1px 2px 2px rgba(158, 121, 46, 0.3)',
  },
  inputWrapBlur: {
    boxShadow: '0px 1px 0px 1px rgba(0, 0, 0, 0.07)',
  },
  input: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  inputWithIcon: {
    paddingRight: 36,
  },
  iconBtn: {
    position: 'absolute',
    right: 12,
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeIcon: {
    width: 18,
    height: 18,
  },
});
