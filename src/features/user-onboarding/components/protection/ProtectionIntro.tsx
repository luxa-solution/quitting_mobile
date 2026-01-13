import { Href, router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import type { ProtectionStage } from '@/features/user-onboarding/types';
import { AppButton } from '@/shared/components';
import { ProtectionCopy } from './ProtectionCopy';
import { ProtectionLayout } from './ProtectionLayout';
import { ProtectionShield } from './ProtectionShield';

export function ProtectionIntro() {
  const go = (s: ProtectionStage) =>
    router.replace(`/new-user-onboarding/protection?stage=${s}` as Href);

  return (
    <ProtectionLayout>
      <ProtectionShield size={316} />

      <ProtectionCopy
        title={"Let's protect you from\ntemptation."}
        subtitle="Quitting can help you stay safe by gently blocking access to harmful websites and showing reminders when you need them most."
      />

      <View style={styles.footer}>
        <AppButton text="Enable Protection" onPress={() => go('grant')} />
        <Pressable
          testID="skip-protection"
          onPress={() => router.replace('/tabs' as Href)}
          style={styles.secondary}>
          <Text style={styles.secondaryText}>Skip for now</Text>
        </Pressable>
      </View>

      <Text style={styles.footnote}>You can enable this anytime from Settings.</Text>
    </ProtectionLayout>
  );
}

const styles = StyleSheet.create((theme) => ({
  footer: {},
  secondary: {
    marginTop: 10,
    height: 52,
    borderRadius: theme.radii.pill,
    backgroundColor: theme.colors.button.secondaryBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryText: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.button.secondaryText,
  },
  footnote: {
    textAlign: 'center',
    fontSize: 12,
    color: theme.colors.content.secondary,
  },
}));
