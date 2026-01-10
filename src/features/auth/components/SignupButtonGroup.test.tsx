import { render, fireEvent } from '@testing-library/react-native';
import { SignupButtonGroup } from './SignupButtonGroup';

describe('SignupButtonGroup', () => {
  it('calls create account when enabled', () => {
    const onCreateAccount = jest.fn();
    const { getByTestId } = render(
      <SignupButtonGroup
        canSubmit
        onCreateAccount={onCreateAccount}
        onContinueApple={() => {}}
        onContinueGoogle={() => {}}
      />
    );

    fireEvent.press(getByTestId('create-account'));
    expect(onCreateAccount).toHaveBeenCalledTimes(1);
  });
});
