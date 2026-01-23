import CategoryCarousel from '@/components/CategoryCarousel';
import Ionicons from '@expo/vector-icons/Ionicons';
import StickyHeader from '@/components/headers/StickyHeader';
import LabelTextInput from '@/components/inputs/LabelTextInput';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import StickyFooter from '@/components/StickyFooter';
import SecundaryButton from '@/components/buttons/SecundaryButton';
import PrimaryButton from '@/components/buttons/PrimaryButton';

export default function Income() {
  return (
    <View className="flex-1 items-center bg-gray-700">
      <StickyHeader title="Adicionar Receita" subtitle="Adicione saldo à sua carteira" />
      <ScrollView className="w-full pt-36 px-4" contentContainerClassName='flex-col gap-6'>
        <LabelTextInput label="Descrição" />
        <View className="flex-col gap-2">
          <Text className="font-light text-white">Valor</Text>
          <View className="flex-row items-end justify-center gap-1 p-6">
            <Text className="font-light text-2xl text-white">R$</Text>
            <Text className="font-semibold text-5xl text-white shadow-md shadow-white">1000</Text>
            <Text className="font-light text-2xl text-white">,00</Text>
          </View>
          <LabelTextInput label="Selecionar Moeda" />
        </View>
        <View className="flex-col gap-2">
          <Text className="font-light text-white">Categoria</Text>
          <CategoryCarousel />
        </View>
        <View className='flex-row gap-2'>
          <LabelTextInput width='flex-1' label="Repetir" disabled />
          <TouchableOpacity className="border rounded-lg border-red-500 items-center justify-center w-14">
            <Ionicons name="close-outline" color={'#BD3436'} size={24} />
          </TouchableOpacity>
        </View>
        <LabelTextInput label='Data' disabled />
      </ScrollView>
      <StickyFooter>
        <View className='flex-row size-full gap-2 px-4'>
          <SecundaryButton label='Restaurar' className='flex-1' />
          <PrimaryButton label='Salvar' className='flex-1' />
        </View>
      </StickyFooter>
    </View>
  );
}
