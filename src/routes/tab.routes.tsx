import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/home/home";
import Messenger from "../screen/messenger/messenger";
import { MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import Appointment from "../screen/appointment/appointment";
import Calendar from "../screen/calendar/calendar";
import Settings from "../screen/settings/settings";
export default function TabRoute() {
  const { Screen, Navigator } = createBottomTabNavigator();
  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
        options={{
          headerShown:false,
          tabBarLabel: "home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="messenger"
        component={Messenger}
        options={{
          tabBarLabel: "messenger",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="facebook-messenger" color={color} size={size} />
          ),
        }}
      />

      <Screen
        name="appointment"
        component={Appointment}
        options={{
          tabBarLabel: "appointment",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={color} size={size = 37}/>
          ),
        }}
      />
      <Screen
        name="calendario"
        component={Calendar}
        options={{
          tabBarLabel: "calendario",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="calendar" color={color} size={size} />
          ),
        }}
      />

      <Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: "settings",
          tabBarIcon: ({ color, size  }) => (
            <Ionicons name="settings-sharp" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
}
