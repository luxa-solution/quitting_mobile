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

const styles = StyleSheet.create((theme) => ({
  card: {
    minHeight: 54,
    backgroundColor: theme.colors.surface.soft,
    borderRadius: theme.radii.lg,
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
    borderRadius: theme.radii.sm,
    borderWidth: 1,
    borderColor: theme.colors.content.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxSelected: {
    backgroundColor: theme.colors.content.primary,
    borderColor: theme.colors.content.primary,
  },
  tick: {
    color: theme.colors.content.onDark,
    fontSize: 12,
    marginTop: -1,
  },
  text: {
    fontSize: 16,
    color: theme.colors.content.secondary,
    fontWeight: '400',
    lineHeight: 22,
  },
  textSelected: {
    color: theme.colors.content.primary,
  },
}));
