import { View } from "react-native";

type LineProps = {
    length?: number;
    thickness?: number;
    color?: string;
};

export default function Line({ length, thickness, color }: LineProps) {
    return (
        <View style={{width: length ?? '100%', height: thickness ?? 1, backgroundColor: color ?? '#414141'}} className="rounded-full" />
    )
}