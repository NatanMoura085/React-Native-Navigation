import Icon from "react-native-vector-icons/AntDesign";
import { View } from "react-native";
import Header from "../../components/header/Header";
import EmotionList from "../../components/EmotionList/Emotion";

export default function Home() {
  return (
    <View className="bg-[#f5f5f5] h-full w-full  my-10">
      <Header />
      <EmotionList/>
    </View>
  );
}
