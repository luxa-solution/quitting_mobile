import { Dimensions, Image } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import type { InfoStep } from '@/features/user-onboarding/types';
import { userOnboardingImages } from '@/features/user-onboarding/utils';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

type Props = {
  step: InfoStep;
};

export function StepIllustration({ step }: Props) {
  return (
    <Image
      source={userOnboardingImages[step.illustration]}
      style={[
        styles.bgImage,
        step.illustrationStyle === 'full' ? styles.bgImageFull : styles.bgImagePart,
      ]}
      resizeMode={step.illustrationStyle === 'full' ? 'cover' : 'contain'}
    />
  );
}

const H_PADDING = 20;

const styles = StyleSheet.create({
  bgImage: {
    position: 'absolute',
    left: -H_PADDING,
    right: -H_PADDING,
    width: undefined,
    zIndex: 0,
  },
  bgImageFull: {
    bottom: screenHeight / 4,
  },
  bgImagePart: {
    bottom: 0,
    maxHeight: '100%',
    minHeight: '85%',
  },
});
