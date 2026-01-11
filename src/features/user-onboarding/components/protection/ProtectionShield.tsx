import { Image } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { userOnboardingImages } from '@/features/user-onboarding/utils';

type Props = {
  size: number;
};

export function ProtectionShield({ size }: Props) {
  return (
    <Image
      source={userOnboardingImages.protectionShield}
      style={[styles.shield, { width: size, height: size }]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  shield: { alignSelf: 'center' },
});
