import Icon from "react-native-vector-icons/AntDesign";
import { Text, View } from "react-native";
import { lazy, Suspense } from "react"
import Header from "../../components/header/Header";
import EmotionList from "../../components/EmotionList/Emotion";
import TitleToday from "../../components/Ui/TitleToday";
import NextAppoitment from "../../components/NextAppoitment/NextAppoitment";

const SwipeablePanelEdit = lazy(() => import("../../components/SwipeablePanel/SwipeablePanel"))
export default function Home() {
  return (
    <>
      <View className="bg-[#f5f5f5] h-full w-full  my-10 ">
        <Header />
        <View className="px-6">
          <TitleToday
            title="How Do You Feel Today?"
            className="text-slate-800 bottom-2 mb-2 text-lg font-bold"
          />
        <EmotionList />
        </View>
        <View className="mt-4">
          <NextAppoitment />

        </View>
        <Suspense fallback={<Text>Loading...</Text>}>
          <SwipeablePanelEdit />

        </Suspense>
      </View>


    </>
  );
}
