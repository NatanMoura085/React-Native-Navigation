import { NavigationContainer } from "@react-navigation/native";
import  StackRoutes  from "./app.routes";
import { useEffect, useState } from "react";
import Loading from "../components/Ui/Loading";
import {     
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  useFonts
} from "@expo-google-fonts/inter"

export default function Routes() {
  const [isLoading, setLoading] = useState(true);

  const [fontsLoaded] = useFonts({
      Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if(!fontsLoaded) {
    return <Loading  />;
  }
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
