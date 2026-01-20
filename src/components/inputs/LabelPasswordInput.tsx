import { useCallback, useEffect, useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

type LabelTextInputProps = {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  disabled?: boolean;
};

export default function LabelPasswordInput({
  label,
  value,
  onChangeText,
  disabled,
}: LabelTextInputProps) {
  const [isShown, setIsShown] = useState(false);
  const [isFloating, setIsFloating] = useState(!!value);

  const handleFocus = useCallback(() => {
    setIsFloating(true);
  }, []);

  const handleBlur = useCallback(() => {
    if (!value) {
      setIsFloating(false);
    }
  }, [value]);

  useEffect(() => {
    if (value) {
      setIsFloating(true);
    } else {
      setIsFloating(false);
    }
  }, [value]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(isFloating ? -24 : 0, {
          duration: 100,
          easing: Easing.inOut(Easing.quad),
          reduceMotion: ReduceMotion.System,
        }),
      },
    ],
  }));

  return (
    <View className={`relative rounded-lg border border-white ${disabled && 'border-gray-300'}`}>
      <Animated.View style={animatedStyles}>
        <View className="absolute left-2 top-4 z-10 bg-gray-700 px-1">
          <Text className={`font-light text-white ${disabled && 'text-gray-300'}`}>{label}</Text>
        </View>
      </Animated.View>
      <View className="w-full flex-row">
        <TextInput
          className={`w-full px-4 pt-4 font-regular text-white ${disabled && 'text-gray-300'}`}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!disabled}
          keyboardType="default"
          autoCapitalize="none"
          secureTextEntry={!isShown}
        />
        <TouchableOpacity
          onPress={() => setIsShown(!isShown)}
          disabled={disabled}
          className="absolute right-4 top-1/2 -translate-y-1/2">
          <Ionicons
            name={isShown ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color={disabled ? '#414141' : '#FFFFFF'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
