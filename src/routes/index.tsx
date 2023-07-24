import { NavigationContainer } from "@react-navigation/native";
import  StackRoutes  from "./app.routes";
import { useEffect, useState } from "react";
import Loading from "../components/Ui/Loading";
export default function Routes() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if(isLoading) {
    return <Loading  />;
  }
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
