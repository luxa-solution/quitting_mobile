import { Href, router } from 'expo-router';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import type { ProtectionStage } from '@/features/user-onboarding/types';
import { AppButton } from '@/shared/components';
import { ProtectionCopy } from './ProtectionCopy';
import { ProtectionLayout } from './ProtectionLayout';
import { ProtectionShield } from './ProtectionShield';

export function ProtectionGrant() {
  const go = (s: ProtectionStage) =>
    router.replace(`/new-user-onboarding/protection?stage=${s}` as Href);

  return (
    <ProtectionLayout>
      <ProtectionShield size={158} />

      <ProtectionCopy
        title={'Grant access to protect\nyour browsing.'}
        subtitle="To block adult websites and display reminders, Quitting needs access to monitor your browser activity."
      />

      <View style={styles.card}>
        <View style={styles.cardGroup}>
          <Text>🔒</Text>
          <View style={styles.cardTextGroup}>
            <Text style={styles.cardTitle}>Fully Encrypted</Text>
            <Text style={styles.cardText}>Your data is protected with end-to-end encryption</Text>
          </View>
        </View>

        <View style={styles.cardGroup}>
          <Text>🛡️</Text>
          <View style={styles.cardTextGroup}>
            <Text style={styles.cardTitle}>Private &amp; Secure</Text>
            <Text style={styles.cardText}>We never share your information with anyone</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <AppButton text="Grant Access" onPress={() => go('activated')} />
      </View>

      <Text style={styles.footnote}>Your data stays private and is never shared.</Text>
    </ProtectionLayout>
  );
}

const styles = StyleSheet.create((theme) => ({
  card: {
    width: '100%',
    backgroundColor: theme.colors.surface.muted,
    borderRadius: theme.radii.lg,
    padding: 10,
    gap: 14,
  },
  cardGroup: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: theme.colors.content.primary,
  },
  cardTextGroup: {
    width: '70%',
    gap: 8,
  },
  cardText: {
    fontSize: 16,
    color: theme.colors.content.secondary,
  },
  footer: {},
  footnote: {
    textAlign: 'center',
    fontSize: 12,
    color: theme.colors.content.secondary,
  },
}));
