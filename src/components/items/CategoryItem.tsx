import { useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import CategoryIcon from '@/components/CategoryIcon';

type CategoryItemProps = {
  icon?: string;
  onPress?: () => void;
  disabled?: boolean;
};

export default function CategoryItem({ icon, onPress, disabled }: CategoryItemProps) {
  const scale = useSharedValue(1);

  const handlePressIn = useCallback(() => {
    if (!disabled) {
      scale.value = withTiming(0.95, { duration: 60 });
    }
  }, [disabled, scale]);

  const handlePressOut = useCallback(() => {
    if (!disabled) {
      scale.value = withTiming(1, { duration: 60 });
    }
  }, [disabled, scale]);

  return (
    <Pressable onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View className={`flex-col items-center gap-1 ${disabled && 'opacity-60'}`}>
        <CategoryIcon icon={icon} size="large" />
        <Text className="font-light text-xs text-white">{icon}</Text>
      </Animated.View>
    </Pressable>
  );
}
