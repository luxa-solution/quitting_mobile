import { Ionicons } from '@expo/vector-icons';
import { View, Text, Pressable } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type Props = {
  step: number;
  total: number;
  onBack: () => void;
  onSkip: () => void;
};

export function ProgressHeader({ step, total, onBack, onSkip }: Props) {
  const pct = Math.round((step / total) * 100);

  return (
    <View style={styles.wrapper}>
      <View style={styles.counterContainer}>
        <Text style={styles.stepText}>{`${step}/${total}`}</Text>
      </View>

      <View style={styles.container}>
        <Pressable
          testID="uob-back"
          onPress={onBack}
          style={styles.backBtn}
          accessibilityRole="button">
          <Ionicons name="chevron-back" size={24} color="#111111" />
        </Pressable>

        <View style={styles.center}>
          <View style={styles.track}>
            <View style={[styles.bar, { width: `${pct}%` }]} />
          </View>
        </View>

        <Pressable testID="uob-skip" onPress={onSkip} accessibilityRole="button">
          <Text style={styles.skip}>Skip</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  wrapper: {
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  counterContainer: {
    alignItems: 'center',
    bottom: -15,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: theme.radii.round,
    backgroundColor: theme.colors.surface.soft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    fontSize: 22,
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  stepText: {
    fontSize: 10,
    color: theme.colors.content.muted,
    marginBottom: 6,
  },
  track: {
    width: '70%',
    height: 6,
    borderRadius: theme.radii.round,
    backgroundColor: theme.colors.border.subtle,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    borderRadius: theme.radii.round,
    backgroundColor: theme.colors.content.primary,
  },
  skip: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    color: theme.colors.content.primary,
  },
}));
