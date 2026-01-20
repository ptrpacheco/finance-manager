import { useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';

type SecundaryButtonProps = {
  title?: string;
  width?: number;
  onPress?: () => void;
  disabled?: boolean;
};

export default function SecundaryButton({ title, width, onPress, disabled }: SecundaryButtonProps) {
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
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}>
      <Animated.View
        style={{ width: width ?? '100%', transform: [{ scale }] }}
        className={`items-center justify-center rounded-lg border-2 border-yellow-500 p-4 shadow-[0_4px_20px] shadow-yellow-500/30 ${disabled && 'border-gray-300 shadow-none'}`}>
        <Text className="font-semibold text-lg text-yellow-500">{title}</Text>
      </Animated.View>
    </Pressable>
  );
}
