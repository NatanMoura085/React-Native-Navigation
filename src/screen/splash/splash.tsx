import { View } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
export default function Splash() {
  const { navigate } = useNavigation();
  return (
    <View className="h-full">
      <LottieView
        source={require("../../assets/splash.json")}
        autoPlay
        loop={false}
        autoSize
        onAnimationFinish={() => navigate("login")}
      />
    </View>
  );
}
