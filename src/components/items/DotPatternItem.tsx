import { Pressable, Text, View } from 'react-native';
import DotPattern from '@/components/DotPattern';
import { BlurView } from 'expo-blur';

type DotPatternItemProps = {
  children: React.ReactNode;
  onPress?: () => void;
  className?: string;
};

export default function DotPatternItem({ children, onPress, className }: DotPatternItemProps) {
  return (
    <BlurView
      className={`relative overflow-hidden rounded-lg border border-gray-300 ${className}`}
      intensity={40}
      tint="dark">
      <DotPattern />
      {children}
      <Pressable className="absolute size-full" onPress={onPress} />
    </BlurView>
  );
}
