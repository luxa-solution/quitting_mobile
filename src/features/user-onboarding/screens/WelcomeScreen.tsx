import { Href, router } from 'expo-router';
import { Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

import { AppButton } from '@/shared/components';
import { TitleBlock } from '../components';
import { userOnboardingImages } from '../utils';

export function WelcomeScreen() {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top, paddingBottom: bottom }]}>
      <Image source={userOnboardingImages.startJourney} style={styles.bgImage} resizeMode="cover" />

      <View style={styles.content}>
        <TitleBlock
          title="Welcome to Quitting."
          subtitle={
            'A safe space to regain control, protect your\nheart, and grow closer to Allah.'
          }
          align="center"
        />
      </View>

      <View style={styles.cta}>
        <AppButton
          text="Start My Journey"
          onPress={() => router.push('/new-user-onboarding/steps?step=1' as Href)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.screen,
  },
  bgImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 90,
    zIndex: 1,
  },
  cta: {
    paddingHorizontal: 20,
    paddingBottom: 18,
    zIndex: 2,
  },
}));
