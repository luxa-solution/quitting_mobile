import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { AppButton } from '@/shared/components';

type BaseProps = {
  title?: string;
  subtitle?: string;
};

type WithCTA = {
  ctaText: string;
  onPressCta: () => void;
};

type WithoutCTA = {
  ctaText?: never;
  onPressCta?: never;
};

type Props = BaseProps & (WithCTA | WithoutCTA);

export function InProgressScreen({
  title = 'Welcome 👋',
  subtitle = 'This screen is still in progress.',
  ctaText,
  onPressCta,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        {ctaText && onPressCta && (
          <View style={styles.cta}>
            <AppButton text={ctaText} onPress={onPressCta} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.screen,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  content: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: theme.colors.surface.base,
    borderRadius: theme.radii.lg,
    padding: 20,
    borderWidth: 1,
    borderColor: theme.colors.border.default,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.content.primary,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: theme.colors.content.secondary,
  },
  cta: {
    marginTop: 16,
  },
}));
