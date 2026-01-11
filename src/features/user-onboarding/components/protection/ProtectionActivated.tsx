import { Href, router } from 'expo-router';
import { View } from 'react-native';

import { AppButton } from '@/shared/components';
import { ProtectionCopy } from './ProtectionCopy';
import { ProtectionLayout } from './ProtectionLayout';
import { ProtectionShield } from './ProtectionShield';

export function ProtectionActivated() {
  return (
    <ProtectionLayout>
      <ProtectionCopy
        title="Protection activated"
        subtitle="You’re now protected. When you try to access adult content, Quitting will gently intervene to help you pause, reflect, and regain control."
      />

      <ProtectionShield size={316} />

      <View>
        <AppButton text="See how it works" onPress={() => router.replace('/tabs' as Href)} />
      </View>
    </ProtectionLayout>
  );
}
