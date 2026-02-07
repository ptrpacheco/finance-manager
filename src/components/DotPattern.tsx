import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from 'nativewind';
import { Image, View } from 'react-native';

type DotPatternProps = {
  location?: [number, number];
  opacity?: number;
};

export default function DotPattern({ location, opacity }: DotPatternProps) {
  const { colorScheme } = useColorScheme();

  return (
    <View className="absolute size-full rounded-full" style={{ opacity: opacity ?? 1 }}>
      <Image
        source={
          colorScheme === 'dark'
            ? require('@/assets/patterns/dot-pattern-dark.png')
            : require('@/assets/patterns/dot-pattern-light.png')
        }
        resizeMode="repeat"
        className="size-full"
      />
      <LinearGradient
        colors={
          colorScheme === 'dark'
            ? ['rgba(33, 33, 33, .2)', 'rgba(33, 33, 33, .95)']
            : ['rgba(255, 255, 255, .2)', 'rgba(255, 255, 255, .95)']
        }
        locations={location ?? [0, 0.8]}
        className="absolute size-full"
      />
    </View>
  );
}
