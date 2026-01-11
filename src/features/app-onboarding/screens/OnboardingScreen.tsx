import { Href, router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';
import { Header, Footer, OneSlide } from '../components';
import { slide_data } from '../data';

export function OnboardingScreen() {
  const listRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);
  const { width: window_width } = useWindowDimensions();

  const { top, bottom } = useSafeAreaInsets();

  const handleNext = () => {
    if (index < slide_data.length - 1) {
      listRef.current?.scrollToIndex({ index: index + 1 });
    } else {
      router.replace('/auth/signup' as Href);
    }
  };

  const handleSwipeEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = event.nativeEvent.contentOffset.x;
    setIndex(Math.round(offset / window_width));
  };

  return (
    <View style={[styles.container, { paddingTop: top, paddingBottom: bottom }]}>
      <Header />

      <View>
        <FlatList
          ref={listRef}
          data={slide_data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <OneSlide item={item} index={index} total={slide_data.length} onNext={handleNext} />
          )}
          onMomentumScrollEnd={handleSwipeEnd}
        />
      </View>

      <Footer onSignIn={() => router.push('/auth/login' as Href)} />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.screen,
    justifyContent: 'space-evenly',
  },
}));
