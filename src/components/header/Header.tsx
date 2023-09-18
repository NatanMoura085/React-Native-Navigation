import { View, Text } from "react-native";
import Avatar from "../Ui/avatar";
import BellIcon from "../Ui/bellicon";

export default function Header() {
  return (
    <View className="w-full p-7 items-center flex-row justify-between">
      <Avatar
        source={require("../../../assets/avatar.png")}
        title="Natan Moura"
        office="pattient"
      />
      <BellIcon />
    </View>
  );
}
