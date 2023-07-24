import { View, Text } from "react-native";
import Avatar from "../Ui/avatar";
import BellIcon from "../Ui/bellicon";

export default function Header() {
  return (
    <View className=" w-full border border-gray-900 p-7 flex  items-center flex-row justify-between">
      <Avatar />
     <BellIcon/>
    </View>
  );
}
