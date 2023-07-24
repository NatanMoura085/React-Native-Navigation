import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
export default function BellIcon() {
  return (
    <View className=" bg-[#e3dfdf] flex  items-center  justify-center rounded-md w-9 h-9">
      <MaterialIcons
        name="notifications"
        style={{ color: "rgb(125,138,137)" }}
        size={30}
      />
    </View>
  );
}
