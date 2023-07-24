import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "../screen//login/login";
import TabRoute from "./tab.routes";
import Splash from "../screen/splash/splash";

export default function StackRoutes() {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen
        name="splash"
        component={Splash}
        options={{ headerShown: false }}
      />

      <Screen
        name="login"
        component={login}
        options={{
          headerTitleAlign: "center",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Screen
        name="tabroute"
        component={TabRoute}
        options={{ headerTitleAlign: "center", headerShown: false }}
      />
    </Navigator>
  );
}
