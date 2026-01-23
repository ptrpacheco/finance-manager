import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Line from '@/components/Line';
import DotPattern from '@/components/DotPattern';
import { BlurView } from 'expo-blur';

type StickyHeaderProps = {
  title?: string;
  subtitle?: string;
};

export default function StickyHeader({ title, subtitle }: StickyHeaderProps) {
  const router = useRouter();

  return (
    <BlurView
      className="absolute top-0 z-10 h-32 w-full flex-col justify-end gap-4 overflow-hidden"
      intensity={40}
      tint="dark">
      <DotPattern />
      <View className="flex-row items-center gap-2 px-4">
        <Pressable
          onPress={router.back}
          className="inset-shadow-lg inset-shadow-white/50 items-center justify-center rounded-full border-2 border-white p-2">
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
        <View className="flex-1 flex-col">
          <Text className="font-semibold text-lg text-white shadow-lg shadow-white">{title}</Text>
          <Text className="truncate font-light text-xs text-white">{subtitle}</Text>
        </View>
      </View>
      <Line />
    </BlurView>
  );
}
