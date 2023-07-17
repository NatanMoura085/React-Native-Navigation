import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "../screen//login/login";
import home from "../screen/home/home";

export default function StackRoutes() {
  const { Screen, Navigator } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen name="login" component={login} options={{headerTitleAlign:'center',headerShown:false}}/>
      <Screen name="home" component={home}  options={{headerTitleAlign:'center'}}/>
    </Navigator>
  );
}
