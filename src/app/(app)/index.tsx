import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Modal, ScrollView, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import DotPatternItem from '@/components/items/DotPatternItem';
import Line from '@/components/Line';
import TransactionItem from '@/components/items/TransactionItem';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import DotPattern from '@/components/DotPattern';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import ProfileModal from '@/components/modals/ProfileModal';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';

export default function Dashboard() {
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <ScrollView
      className="bg-white dark:bg-gray-700"
      contentContainerClassName="items-center gap-4 pb-12 px-4">
        
      <ProfileModal visible={isProfileVisible} onClose={() => setIsProfileVisible(false)} />

      <View className="absolute inset-0 flex-col">
        <ImageBackground
          source={require('@/assets/images/dashboard-background.jpg')}
          resizeMode="cover"
          className="size-full h-[60vh]"
        />
        <LinearGradient
          className="absolute h-[60vh] w-full"
          colors={
            colorScheme === 'dark'
              ? ['rgba(33, 33, 33, 1)', 'rgba(33, 33, 33, .2)', 'rgba(33, 33, 33, 1)']
              : ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, .2)', 'rgba(255, 255, 255, 1)']
          }
          locations={[0, 0.5, 1]}
        />
      </View>

      <View className="mt-16 w-full flex-row gap-6">
        <DotPatternItem
          className="size-16 items-center justify-center"
          onPress={() => setIsProfileVisible(true)}>
          <Ionicons
            name="person-outline"
            size={24}
            color={colorScheme === 'dark' ? '#fff' : '#212121'}
          />
        </DotPatternItem>
        <DotPatternItem className="flex-1 flex-row items-center justify-center gap-6">
          <Text className="font-light text-xs text-gray-700 dark:text-white">Ordenar por:</Text>
          <View className="flex-row items-center gap-1">
            <Text className="font-semibold text-lg text-gray-700 shadow-md shadow-gray-700 dark:text-white">
              Semana
            </Text>
            <Ionicons
              name="chevron-down-outline"
              size={20}
              color={colorScheme === 'dark' ? '#fff' : '#212121'}
            />
          </View>
        </DotPatternItem>
        <DotPatternItem
          className="size-16 items-center justify-center"
          onPress={() => toggleColorScheme()}>
          <Ionicons
            name={colorScheme === 'dark' ? 'sunny-outline' : 'moon-outline'}
            size={24}
            color={colorScheme === 'dark' ? '#fff' : '#212121'}
          />
        </DotPatternItem>
      </View>

      <BlurView
        className="relative size-96 flex-row items-center justify-center overflow-hidden rounded-full border border-gray-50 dark:border-gray-300"
        intensity={40}
        tint="dark">
        <DotPattern />
        <View className="absolute flex-row items-end gap-1">
          <Text className="font-light text-gray-700 dark:text-white">R$</Text>
          <Text className="font-semibold text-4xl text-gray-700 shadow-md shadow-gray-700 dark:text-white">
            1000
          </Text>
          <Text className="font-light text-gray-700 dark:text-white">,00</Text>
        </View>
      </BlurView>

      <View className="w-full flex-row gap-2">
        <DotPatternItem
          className="h-16 flex-1 flex-row items-center justify-center gap-1"
          onPress={() => router.push('/income')}>
          <Text className="font-regular text-sm text-gray-700 shadow-md shadow-gray-700 dark:text-white">
            Adicionar Receita
          </Text>
          <Feather
            name="arrow-up-right"
            size={20}
            color={colorScheme === 'dark' ? '#fff' : '#212121'}
          />
        </DotPatternItem>
        <DotPatternItem
          className="h-16 flex-1 flex-row items-center justify-center gap-1"
          onPress={() => router.push('/expense')}>
          <Text className="font-regular text-sm text-gray-700 shadow-md shadow-gray-700 dark:text-white">
            Adicionar Despesa
          </Text>
          <Feather
            name="arrow-down-left"
            size={20}
            color={colorScheme === 'dark' ? '#fff' : '#212121'}
          />
        </DotPatternItem>
      </View>

      <Line />

      <View className="w-full flex-col gap-4">
        <TransactionItem
          name="Transporte"
          category="car"
          type="expense"
          currency="BRL"
          value={400}
        />
        <TransactionItem
          name="Salário"
          category="other"
          type="income"
          currency="BRL"
          value={4375.20819734219783612}
        />
        <TransactionItem
          name="Conta de Luz"
          category="home"
          type="income"
          currency="BRL"
          value={128.23978}
        />
        <TransactionItem
          name="Transporte"
          category="car"
          type="expense"
          currency="BRL"
          value={400}
        />
        <TransactionItem
          name="Salário"
          category="other"
          type="income"
          currency="BRL"
          value={4375.20819734219783612}
        />
        <TransactionItem
          name="Conta de Luz"
          category="home"
          type="income"
          currency="BRL"
          value={128.23978}
        />
        <PrimaryButton label="Ver Relatório" />
      </View>
    </ScrollView>
  );
}
