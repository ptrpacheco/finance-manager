import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type CategoryIconProps = {
  icon?: string;
};

export default function CategoryIcon({ icon }: CategoryIconProps) {
  return (
    (icon === 'car' && (
      <View className="size-14 items-center justify-center rounded-lg bg-red-700 shadow-md shadow-red-500">
        <Ionicons name="car-outline" size={28} color="#212121" />
      </View>
    )) ||
    (icon === 'home' && (
      <View className="size-14 items-center justify-center rounded-lg bg-blue-700 shadow-md shadow-blue-500">
        <Ionicons name="home-outline" size={28} color="#212121" />
      </View>
    )) ||
    (icon === 'other' && (
      <View className="size-14 items-center justify-center rounded-lg bg-yellow-500 shadow-md shadow-yellow-500">
        <Ionicons name="cash-outline" size={28} color="#212121" />
      </View>
    ))
  );
}
