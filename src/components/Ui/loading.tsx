import LottieView from "lottie-react-native";
import { View } from "react-native";
export default function Loading() {
  return (
    <View>
      <LottieView
        source={require("../../assets/loading.json")}
        autoPlay
        loop
        autoSize
      />
    </View>
  );
}
