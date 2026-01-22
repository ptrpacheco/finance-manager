import { ImageBackground, Text, View } from 'react-native';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import Header from '@/components/Header';
import DotPattern from '@/components/DotPattern';
import LabelTextInput from '@/components/inputs/LabelTextInput';
import LabelPasswordInput from '@/components/inputs/LabelPasswordInput';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';

export default function SignUp() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View className="relative flex-1 items-center justify-center px-6 bg-gray-700">
      <View className='absolute inset-0'>
        <ImageBackground
          source={require('@/assets/images/landing-background.jpg')}
          resizeMode="cover"
          className="size-full"
        />
        <DotPattern opacity={10} location={[0, 0.2]} />
      </View>
      <Header title="Cadastrar-se" subtitle="Faça cadastro para entrar em nossa plataforma" />

      <View className="w-full flex-col gap-12">
        <View className="flex-col gap-6">
          <View className="w-full flex-row gap-2">
            <LabelTextInput
              label="Nome"
              value={name}
              onChangeText={setName}
              keyboardType="email-address"
              autoCapitalize="none"
              width="flex-1"
            />
            <LabelTextInput
              label="Sobrenome"
              value={surname}
              onChangeText={setSurname}
              keyboardType="email-address"
              autoCapitalize="none"
              width="flex-1"
            />
          </View>
          <LabelTextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <LabelPasswordInput label="Senha" value={password} onChangeText={setPassword} />
          <LabelPasswordInput
            label="Confirmar Senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <View className="flex-col gap-4">
          <PrimaryButton title="Cadastrar-se" onPress={() => router.push('/confirm-email')} />
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
