import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "../screen//login/login";

import TabRoute from "./tab.routes";

export default function StackRoutes() {
  const { Screen, Navigator } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen name="login" component={login} options={{headerTitleAlign:'center',headerShown:false}}/>
      <Screen name="tabroute" component={TabRoute}  options={{headerTitleAlign:'center',headerShown:false}}/>
    </Navigator>
  );
}
