import { Text, View } from 'react-native';
import DotPatternItem from './DotPatternItem';
import CategoryIcon from '../CategoryIcon';

type TransactionItemProps = {
  name: string;
  category: string;
  type: 'income' | 'expense';
  currency: 'BRL' | 'USD';
  value: number;
};

export default function TransactionItem({
  name,
  category,
  type,
  currency,
  value,
}: TransactionItemProps) {
  return (
    <DotPatternItem className="h-20 w-full flex-row items-center justify-between">
      <View className="flex-row items-center justify-center gap-2 px-3">
        <CategoryIcon icon={category} />
        <View className="flex-col">
          <Text className="font-semibold text-white">{name}</Text>
          <Text className="font-light text-sm text-white">{category}</Text>
        </View>
      </View>
      <Text
        className={`px-3 font-regular text-sm shadow-[0_4px_20px] ${type === 'income' ? 'text-green-500 shadow-green-500' : 'text-red-500 shadow-red-500'}`}>
        {type === 'income' ? '+' : '-'}
        {(currency === 'BRL' && 'R$ ') || (currency === 'USD' && '$ ')}
        {value.toFixed(2)}
      </Text>
    </DotPatternItem>
  );
}
