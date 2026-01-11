import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { useStepSelection } from '@/features/user-onboarding/hooks';
import type { ProgressStep } from '@/features/user-onboarding/types';
import { QuestionOptions } from '../QuestionOptions';
import { TitleBlock } from '../TitleBlock';

type Props = {
  step: ProgressStep;
  selectedIds: string[];
};

export function StepBody({ step, selectedIds }: Props) {
  const { toggleOption } = useStepSelection(step?.id);
  const isInfo = step.kind === 'info';

  return (
    <View style={styles.body}>
      <TitleBlock title={step.title} subtitle={isInfo ? step.subtitle : undefined} align="center" />

      {!isInfo ? (
        <QuestionOptions
          options={step.options}
          selectedIds={selectedIds}
          onToggle={(optionId) => toggleOption({ stepId: step.id, optionId, mode: step.selection })}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 35,
    alignItems: 'center',
    zIndex: 1,
    gap: 35,
    width: '100%',
  },
});
