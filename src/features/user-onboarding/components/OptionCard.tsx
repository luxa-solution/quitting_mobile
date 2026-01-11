import { Pressable, Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type Props = {
  label: string;
  selected: boolean;
  onPress: () => void;
  testID?: string;
};

export function OptionCard({ label, selected, onPress, testID }: Props) {
  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: selected }}
      style={[styles.card, selected && styles.cardSelected]}>
      <View style={[styles.box, selected && styles.boxSelected]}>
        {selected ? <Text style={styles.tick}>✓</Text> : null}
      </View>

      <Text style={[styles.text, selected && styles.textSelected]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 54,
    backgroundColor: '#EDEDED',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    width: '100%',
  },
  cardSelected: {},
  box: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxSelected: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  tick: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: -1,
  },
  text: {
    fontSize: 16,
    color: '#808080',
    fontWeight: '400',
    lineHeight: 22,
  },
  textSelected: {
    color: '#000000',
  },
});
