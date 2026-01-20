import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicon from '@expo/vector-icons/Ionicons';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import Header from '@/components/Header';
import DotPattern from '@/components/DotPattern';
import LabelTextInput from '@/components/inputs/LabelTextInput';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';

export default function ConfirmEmail() {
  const router = useRouter();

  const [code, setCode] = useState('');

  return (
    <View className="relative flex-1 items-center justify-center">
      <Image
        source={require('@/assets/images/landing-background.jpg')}
        resizeMode="cover"
        className="absolute size-full"
      />
      <DotPattern location={[0, 0.2]} />
      <Header
        title="Confirmar Email"
        subtitle="Confirme seu email para entrar em nossa plataforma"
      />

      <View className="w-full flex-col gap-12 p-6">
        <View className="flex-col gap-6">
          <Text className="text-center font-regular text-white">
            Enviamos um código para o email: <Text className="font-semibold">e***@e***.com</Text>,
            insira-o abaixo para confirmar seu email. Utilize o botão ao lado para reenviar o
            código.
          </Text>
          <View className="w-full flex-row gap-2">
            <LabelTextInput
              label="Código de Confirmação"
              value={code}
              onChangeText={setCode}
              width="flex-1"
            />
            <TouchableOpacity className="flex size-14 items-center justify-center rounded-lg bg-white shadow">
              <Ionicon name="reload" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-col gap-4">
          <PrimaryButton
            title="Confirmar Email"
            onPress={() => router.replace('/(app)')}
          />
          <Text className="text-center font-light text-sm leading-tight text-white shadow-[0_4px_20px] shadow-white/30">
            Ao entrar em nossa plataforma você concorda com nossos{' '}
            <Link href="/" className="font-semibold underline">
              Termos de Serviço
            </Link>{' '}
            e de{' '}
            <Link href="/" className="font-semibold underline">
              Privacidade
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
}
