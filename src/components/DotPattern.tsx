import { LinearGradient } from 'expo-linear-gradient';
import { Image, View } from 'react-native';

type DotPatternProps = {
    location?: [number, number];
    opacity?: number;
};

export default function DotPattern({ location, opacity }: DotPatternProps) {
  return (
    <View className="absolute size-full backdrop-blur-xl" style={{ opacity: opacity ?? 1 }}>
      <Image
        source={require('@/assets/patterns/dot-pattern-dark.png')}
        resizeMode="repeat"
        className="absolute size-full"
      />
      <LinearGradient
        colors={['rgba(33, 33, 33, .2)', 'rgba(33, 33, 33, .95)']}
        locations={location ?? [0, 0.8]}
        className="absolute size-full"
      />
    </View>
  );
}
