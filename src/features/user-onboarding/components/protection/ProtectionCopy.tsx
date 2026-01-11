import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type Props = {
  title: string;
  subtitle: string;
};

export function ProtectionCopy({ title, subtitle }: Props) {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: { alignItems: 'center', gap: 8 },
  title: { fontSize: 24, fontWeight: '500', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#808080', textAlign: 'center', lineHeight: 22 },
});
