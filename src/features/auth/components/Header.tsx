import { Ionicons } from '@expo/vector-icons';
import { View, Text, Pressable } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type Props = { title: string; onBack: () => void };

export function Header({ title, onBack }: Props) {
  return (
    <View style={styles.container}>
      <Pressable testID="auth-back" accessibilityRole="button" onPress={onBack} style={styles.back}>
        <Ionicons name="chevron-back" size={20} color="#111111" />
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.backMock} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  back: {
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backMock: {
    width: 36,
    height: 36,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
});
