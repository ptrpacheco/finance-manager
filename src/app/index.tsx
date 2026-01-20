import { Image, Text, View } from 'react-native';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import DotPattern from '@/components/DotPattern';
import { useRouter } from 'expo-router';
import SecundaryButton from '@/components/buttons/SecundaryButton';

export default function SignIn() {
  const router = useRouter();

  return (
    <View className="relative flex-1 items-center justify-end">
      <Image
        source={require('@/assets/images/landing-background.jpg')}
        resizeMode="cover"
        className="absolute size-full"
      />
      <DotPattern opacity={10} />

      <View className="w-full gap-6 px-6 py-16">
        <View className="flex-col gap-2">
          <Text className="font-regular text-lg text-white">Pietro Pacheco</Text>
          <Text className="font-semibold text-4xl leading-8 text-white">
            Gerenciador de Finanças Pessoais
          </Text>
        </View>
        <View className="gap-4">
          <PrimaryButton title="Fazer Login" onPress={() => router.push('/(auth)/')} />
          <SecundaryButton title="Cadastrar-se" onPress={() => router.push('/(auth)/sign-up')} />
        </View>
      </View>
    </View>
  );
}
