import LottieView from "lottie-react-native";
import { View } from "react-native";
export default function Loading() {
  return (
    <View className="flex justify-center h-full ">
      <LottieView
        source={require("../../assets/loading2.json")}
        autoPlay
        loop
      />
    </View>
  );
}
