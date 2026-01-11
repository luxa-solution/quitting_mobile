import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { authImages } from '../utils';

type Props = {
  variant?: 'shield' | 'flash';
  children: React.ReactNode;
  testID?: string;
};

export function InfoRow({ variant = 'shield', children, testID }: Props) {
  const icon = variant === 'shield' ? authImages.shield : authImages.flash;

  return (
    <View style={styles.row}>
      <Image
        testID={testID ? `${testID}-icon` : 'info-row-icon'}
        source={icon}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  row: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    width: 15,
    height: 15,
  },
  text: {
    flex: 1,
    fontSize: 14,
    lineHeight: 15,
    color: theme.colors.content.secondary,
  },
}));
