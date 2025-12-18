import { View, Text, Image, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { AppButton } from '@/shared/components/AppButton';
import { SlideData } from '../types';
import { Progress } from './Progress';

type Props = {
  item: SlideData;
  index: number;
  total: number;
  onNext: () => void;
};

const { width: window_width } = Dimensions.get('window');

export function OneSlide({ item, index, total, onNext }: Props) {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />

      <Progress index={index} total={total} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <AppButton onPress={onNext} text={item.cta} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: window_width,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 36,
  },
  image: {
    width: '100%',
    height: 316,
  },
  textContainer: {
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 39,
    color: '#000000',
  },
  description: {
    numberOfLines: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#808080',
    textAlign: 'center',
    lineHeight: 22,
    minHeight: 44,
  },
});
