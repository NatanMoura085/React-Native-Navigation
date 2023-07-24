import { View, Text } from "react-native";
import Avatar from "../Ui/Avatar";
import BellIcon from "../Ui/Bellicon";

export default function Header() {
  return (
    <View className=" w-full  p-7 flex  items-center flex-row justify-between">
      <Avatar />
     <BellIcon/>
    </View>
  );
}
