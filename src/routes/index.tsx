import { NavigationContainer } from "@react-navigation/native";
import  StackRoutes  from "./app.routes";
export default function Routes() {

  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
