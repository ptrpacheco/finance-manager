import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type CategoryIconProps = {
  icon?: string;
  size?: 'small' | 'medium' | 'large';
};

export default function CategoryIcon({ icon, size }: CategoryIconProps) {
  return (
    <View
      className={`items-center justify-center rounded-lg shadow-md ${
        (icon === 'car' && 'bg-red-700 shadow-red-500') ||
        (icon === 'home' && 'bg-blue-700 shadow-blue-500') ||
        'bg-yellow-500 shadow-yellow-500'
      } ${(size === 'large' && 'p-8') || (size === 'medium' && 'p-4') || 'p-2'}`}>
      <Ionicons
        name={
          ((icon === 'car' && 'car-outline') ||
            (icon === 'home' && 'home-outline') ||
            'cash-outline') as any
        }
        size={24}
        color="#212121"
      />
    </View>
  );
}
