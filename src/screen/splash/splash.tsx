import { View } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
export default function Splash() {
  const { navigate } = useNavigation();
  return (
    <>
      <LottieView
        source={require("../../assets/splash.json")}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigate("login")}
        resizeMode="cover"
        duration={0.5}
     
      />
    </>
  );
}
