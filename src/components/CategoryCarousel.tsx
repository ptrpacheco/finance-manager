import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, View } from 'react-native';
import CategoryItem from '@/components/items/CategoryItem';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function CategoryCarousel() {
  const [scrollState, setScrollState] = useState<'start' | 'middle' | 'end'>('start');

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement, contentSize } = e.nativeEvent;
    const isAtStart = contentOffset.x <= 0;
    const isAtEnd = contentOffset.x + layoutMeasurement.width >= contentSize.width - 1;

    if (isAtStart) {
      setScrollState('start');
    } else if (isAtEnd) {
      setScrollState('end');
    } else {
      setScrollState('middle');
    }
  };

  return (
    <View className="relative w-full">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <View className="flex-col gap-2">
          <View className="flex-row gap-4">
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </View>
          <View className="flex-row gap-4">
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </View>
        </View>
      </ScrollView>
      {(scrollState === 'middle' || scrollState === 'end') && (
        <LinearGradient
          colors={['rgb(33, 33, 33)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="absolute bottom-0 left-0 top-0 z-10 w-10"
        />
      )}
      {(scrollState === 'middle' || scrollState === 'start') && (
        <LinearGradient
          colors={['transparent', 'rgb(33, 33, 33)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="absolute bottom-0 right-0 top-0 z-10 w-10"
        />
      )}
    </View>
  );
}
