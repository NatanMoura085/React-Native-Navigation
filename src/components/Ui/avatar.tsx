import { View, Image, Text, ImageSourcePropType } from "react-native";

interface AvatarProps {
  source: ImageSourcePropType;
  title: string;
  office:string;
}
export default function Avatar({ source, title,office }: AvatarProps) {
  return (
    <View className="flex flex-row gap-2 -mx-5">
      <Image
        source={source}
        style={{ width: 55, height: 55, borderRadius: 20 }}
      />
      <View>
        <Text className="font-semibold">{title}</Text>
        <Text className="font-thin">{office}</Text>
      </View>
    </View>
  );
}
