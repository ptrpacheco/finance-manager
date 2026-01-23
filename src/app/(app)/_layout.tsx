import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="income/index" options={{ headerShown: false }} />
      <Stack.Screen name="expense/index" options={{ headerShown: false }} />
      <Stack.Screen name="report/index" options={{ headerShown: false }} />
    </Stack>
  );
}
