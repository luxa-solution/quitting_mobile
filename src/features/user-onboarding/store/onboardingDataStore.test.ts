import { useOnboardingDataStore } from './onboardingDataStore';

describe('useOnboardingDataStore', () => {
  beforeEach(() => {
    useOnboardingDataStore.getState().reset();
  });

  it('single-select replaces selection', () => {
    useOnboardingDataStore
      .getState()
      .toggleOption({ stepId: 'q_goal', optionId: '7', mode: 'single' });
    expect(useOnboardingDataStore.getState().getStepAnswers('q_goal')).toEqual(['7']);

    useOnboardingDataStore
      .getState()
      .toggleOption({ stepId: 'q_goal', optionId: '30', mode: 'single' });
    expect(useOnboardingDataStore.getState().getStepAnswers('q_goal')).toEqual(['30']);
  });

  it('multi-select toggles', () => {
    useOnboardingDataStore
      .getState()
      .toggleOption({ stepId: 'q_support', optionId: 'motivation', mode: 'multi' });
    useOnboardingDataStore
      .getState()
      .toggleOption({ stepId: 'q_support', optionId: 'blocking', mode: 'multi' });

    expect(useOnboardingDataStore.getState().getStepAnswers('q_support').sort()).toEqual(
      ['blocking', 'motivation'].sort()
    );

    useOnboardingDataStore
      .getState()
      .toggleOption({ stepId: 'q_support', optionId: 'motivation', mode: 'multi' });
    expect(useOnboardingDataStore.getState().getStepAnswers('q_support')).toEqual(['blocking']);
  });
});
