import { useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';

type PrimaryButtonProps = {
  title?: string;
  width?: number;
  onPress?: () => void;
  disabled?: boolean;
};

export default function PrimaryButton({ title, width, onPress, disabled }: PrimaryButtonProps) {
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
        className={`items-center justify-center rounded-lg bg-yellow-500 p-4 shadow-[0_4px_20px] shadow-yellow-500/30 ${disabled && 'bg-gray-300 shadow-none'}`}>
        <Text className="font-semibold text-lg text-gray-700">{title}</Text>
      </Animated.View>
    </Pressable>
  );
}
