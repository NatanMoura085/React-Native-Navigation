import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/home/Home";
import Store from "../screen/store/Strore";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabRoute() {
  const { Screen, Navigator } = createBottomTabNavigator();
  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="store"
        component={Store}
        options={{
          tabBarLabel: "store",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="store" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
}
