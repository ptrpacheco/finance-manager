import { useColorScheme } from "nativewind";
import { View } from "react-native";

type LineProps = {
    length?: number;
    thickness?: number;
    color?: string;
};

export default function Line({ length, thickness, color }: LineProps) {

    const { colorScheme } = useColorScheme();

    return (
        <View style={{width: length ?? '100%', height: thickness ?? 1, backgroundColor: color ?? colorScheme === 'dark' ? '#414141' : '#EBEBEB'}} className="rounded-full" />
    )
}