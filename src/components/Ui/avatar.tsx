import { View, Image, Text } from "react-native";

export default function Avatar() {
  return (
    <View className="flex flex-row gap-2 -mx-5">
      <Image
        source={require("../../../assets/avatar.png")}
        style={{ width: 55, height: 55, borderRadius: 20 }}
      />
      <View>
        <Text className="font-semibold">Natan Moura</Text>
        <Text className="font-thin">pattient</Text>
      </View>
    </View>
  );
}
