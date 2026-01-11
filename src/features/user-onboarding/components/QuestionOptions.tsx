import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { OnboardingOption } from '../types';
import { OptionCard } from './OptionCard';

type Props = {
  options: OnboardingOption[];
  selectedIds: string[];
  onToggle: (optionId: string) => void;
};

export function QuestionOptions({ options, selectedIds, onToggle }: Props) {
  return (
    <View style={styles.wrap}>
      {options.map((o) => (
        <OptionCard
          key={o.id}
          label={o.label}
          selected={selectedIds.includes(o.id)}
          onPress={() => onToggle(o.id)}
          testID={`opt-${o.id}`}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 12,
    width: '100%',
  },
});
