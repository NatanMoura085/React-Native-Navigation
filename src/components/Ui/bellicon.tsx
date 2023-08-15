import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { useState } from "react";
import NotificationIcon from "./NotificationIcon";
export default function BellIcon() {
  const [notificationIcon, setNotificationIcon] = useState("");
  return (
    <View className=" flex items-center  justify-center ">
      <View className=" bg-[#e3dfdf] flex  items-center  justify-center rounded-md w-9 h-9">
        <MaterialIcons
          name="notifications"
          style={{ color: "rgb(125,138,137)" }}
          size={30}
        />
      </View>
      <View className="w-5 h-5 rounded-full font-bold bg-[#2d9374] left-3 bottom-9 ">
        {notificationIcon && (
          <NotificationIcon>{notificationIcon.length}</NotificationIcon>
        )}
      </View>
    </View>
  );
}
