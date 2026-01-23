import { useCallback, useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
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
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  width?: string;
};

export default function LabelTextInput({
  label,
  value,
  onChangeText,
  disabled,
  keyboardType,
  autoCapitalize,
  width,
}: LabelTextInputProps) {
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
    <View
      className={`relative rounded-lg border ${width ? width : 'w-full'} ${(disabled && 'border-gray-300') || 'border-white'}`}>
      <Animated.View style={animatedStyles}>
        <View className="absolute left-2 top-4 z-10 bg-gray-700 px-1">
          <Text className={`font-light ${(disabled && 'text-gray-300') || 'text-white'}`}>
            {label}
          </Text>
        </View>
      </Animated.View>
      <TextInput
        className={`px-4 pt-4 font-regular ${(disabled && 'text-gray-300') || 'text-white'}`}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        editable={!disabled}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
}
