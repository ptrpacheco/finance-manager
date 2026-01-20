import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type HeaderProps = {
  title?: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  const router = useRouter();

  return (
    <View className="absolute top-12 w-full flex-row items-center gap-2 px-6">
      <Pressable
        onPress={router.back}
        className="items-center justify-center rounded-full border-2 border-white p-2 inset-shadow-lg inset-shadow-white/50">
        <Ionicons name="arrow-back" size={24} color="white" />
      </Pressable>
      <View className="flex-col flex-1">
        <Text className="font-semibold text-white shadow-lg shadow-white">{title}</Text>
        <Text className="font-light text-white truncate">{subtitle}</Text>
      </View>
    </View>
  );
}
