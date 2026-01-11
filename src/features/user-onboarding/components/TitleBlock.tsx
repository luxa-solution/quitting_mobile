import { View, Text, TextStyle, StyleProp } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type Props = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
};

export function TitleBlock({
  title,
  subtitle,
  align = 'center',
  titleStyle,
  subtitleStyle,
}: Props) {
  const isCenter = align === 'center';

  return (
    <View style={styles.wrap}>
      <Text style={[styles.title, isCenter && styles.center, titleStyle]}>{title}</Text>
      {subtitle ? (
        <Text style={[styles.subtitle, isCenter && styles.center, subtitleStyle]}>{subtitle}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 8,
    width: '100%',
  },
  center: {
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 16,
    color: '#808080',
    lineHeight: 22,
  },
});
