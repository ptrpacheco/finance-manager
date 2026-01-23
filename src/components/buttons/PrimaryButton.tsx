import { useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';

type PrimaryButtonProps = {
  label?: string;
  className?: string;
  onPress?: () => void;
  disabled?: boolean;
};

export default function PrimaryButton({ label, className, onPress, disabled }: PrimaryButtonProps) {
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
        className={`items-center justify-center rounded-lg p-4 shadow-md ${disabled ? 'bg-gray-300 shadow-none' : 'bg-yellow-500 shadow-yellow-500'}`}>
        <Text className="font-semibold text-lg text-gray-700">{label}</Text>
      </Animated.View>
    </Pressable>
  );
}
