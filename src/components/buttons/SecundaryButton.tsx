import { useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';

type SecundaryButtonProps = {
  label?: string;
  className?: string;
  onPress?: () => void;
  disabled?: boolean;
};

export default function SecundaryButton({
  label,
  className,
  onPress,
  disabled,
}: SecundaryButtonProps) {
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
      disabled={disabled}
      className={className ? className : 'w-full'}>
      <Animated.View
        style={{ transform: [{ scale }] }}
        className={`inset-shadow-md items-center justify-center rounded-lg border-2 p-4 ${(disabled && 'border-gray-300 shadow-none') || 'border-yellow-500 shadow-yellow-500'}`}>
        <Text className="font-semibold text-lg text-yellow-500">{label}</Text>
      </Animated.View>
    </Pressable>
  );
}
