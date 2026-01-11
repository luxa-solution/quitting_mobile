import { useMemo } from 'react';
import { useOnboardingDataStore } from '../store';

const EMPTY: string[] = [];

export function useStepSelection(stepId?: string) {
  const toggleOption = useOnboardingDataStore((s) => s.toggleOption);

  const selected = useOnboardingDataStore((s) => {
    if (!stepId) return EMPTY;
    return s.answers[stepId] ?? EMPTY;
  });

  const hasSelection = useMemo(() => selected.length > 0, [selected]);

  return { selected, toggleOption, hasSelection };
}
