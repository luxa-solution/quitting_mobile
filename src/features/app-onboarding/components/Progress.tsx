import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type Props = {
  index: number;
  total: number;
};

export function Progress({ index, total }: Props) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, i) => (
        <View key={i} style={[styles.segment, i === index && styles.active]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 3,
  },
  segment: {
    width: 10,
    height: 4,
    backgroundColor: '#e5e5e5',
    borderRadius: 4,
  },
  active: {
    width: 20,
    backgroundColor: '#000',
  },
});
