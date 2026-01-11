import { ReactNode } from 'react';
import { StyleSheet } from 'react-native-unistyles';

import { ScreenLayout } from '@/shared/components/ScreenLayout';

type Props = {
  children: ReactNode;
};

export function ProtectionLayout({ children }: Props) {
  return (
    <ScreenLayout topOffset={30} style={styles.container}>
      {children}
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    gap: 40,
  },
});
