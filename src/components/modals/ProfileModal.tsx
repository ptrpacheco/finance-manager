import { ImageBackground, Modal, Pressable, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Line from '../Line';

interface ProfileModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function ProfileModal({ visible, onClose }: ProfileModalProps) {
  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
      <Pressable className="flex-1 bg-black/50" onPress={onClose}>
        <Pressable className="h-full w-3/5 gap-6 bg-gray-700 px-4 py-16" onPress={() => {}}>
          <View className="flex-row items-center gap-4">
            <View className="size-16 overflow-hidden rounded-full">
              <ImageBackground
                className="size-full"
                source={require('@/assets/images/dashboard-background.jpg')}
              />
            </View>
            <View>
              <Text className="font-semibold text-white shadow-md shadow-white">
                Nome Sobrenome
              </Text>
              <Text className="font-light text-xs text-white">e***@e***.com</Text>
            </View>
          </View>
          <Line />
          <View className="w-full flex-row items-center justify-between">
            <Text className="font-regular text-sm text-white">Tema:</Text>
            <Pressable className="flex-row items-center gap-1">
              <Text className="font-semibold text-white shadow-md shadow-white">Escuro</Text>
              <Ionicons name="chevron-down-outline" size={18} color="#fff" />
            </Pressable>
          </View>
          <View className="w-full flex-row items-center justify-between">
            <Text className="font-regular text-sm text-white">Moeda:</Text>
            <Pressable className="flex-row items-center gap-1">
              <Text className="font-semibold text-white shadow-md shadow-white">BRL (Real)</Text>
              <Ionicons name="chevron-down-outline" size={18} color="#fff" />
            </Pressable>
          </View>
          <Line />
            <Pressable className='flex-row gap-2 items-center'>
                <Ionicons name='swap-horizontal-outline' size={18} color='#fff' />
                <Text className='font-regular text-white'>Trocar de Conta</Text>
            </Pressable>
            <Pressable className='flex-row gap-2 items-center'>
                <Ionicons name='exit-outline' size={18} color='#BD3436' />
                <Text className='font-regular text-red-500'>Sair da Conta</Text>
            </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
