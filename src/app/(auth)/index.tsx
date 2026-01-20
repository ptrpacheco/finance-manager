import { Image, Text, View } from 'react-native';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import Header from '@/components/Header';
import DotPattern from '@/components/DotPattern';
import LabelTextInput from '@/components/inputs/LabelTextInput';
import LabelPasswordInput from '@/components/inputs/LabelPasswordInput';
import { Link, useRouter } from 'expo-router';

export default function SignIn() {
  const router = useRouter();

  return (
    <View className="relative flex-1 items-center justify-center">
      <Image
        source={require('@/assets/images/landing-background.jpg')}
        resizeMode="cover"
        className="absolute size-full"
      />
      <DotPattern location={[0, 0.2]} />
      <Header title="Fazer Login" subtitle="Para entrar em nossa plataforma" />

      <View className="w-full flex-col gap-12 p-6">
        <View className='flex-col gap-6'> 
          <LabelTextInput label="Email" value="" keyboardType="email-address" autoCapitalize="none" />
          <LabelPasswordInput label="Senha" value="" />
        </View>
        <View className='flex-col gap-4'>          
          <PrimaryButton title="Fazer Login" onPress={() => router.replace('/(app)/')} />
          <Text className="text-center font-light text-sm leading-tight text-white">
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
