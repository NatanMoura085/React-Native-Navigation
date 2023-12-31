import React, { useRef } from "react";
import { View, Dimensions, TouchableOpacity, Text, FlatList, ScrollView } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider
} from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import CardPratices from "../PraticesCard/CardPratices";
const { width, height } = Dimensions.get("window");

function SwipeablePanel() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  console.log(height)
  const snapPoints = ['90%']

  return (
    <BottomSheetModalProvider>
      <TouchableOpacity className="flex-1 flex-row  items-center p-3 justify-between pr-5"
        activeOpacity={0.9}
        onPress={() => {
          bottomSheetModalRef.current?.present()
        }}
      >

      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: "white" }}
        handleIndicatorStyle={{ backgroundColor: "grey", width: 60, height: 7 }}
      >
        <ScrollView className="">
          <View className="flex flex-row">
            <CardPratices min={"20:30"} border={true} text="Meditation" source={require("../../../assets/meditation.png")} className="bg-brightBlueCard" />
            <CardPratices min={"20:30"} border={true} text="Wake-Up" source={require("../../../assets/wake-up.png")} className="bg-BurntYellow" />

          </View>
          <View className="flex flex-row my-2">
            <CardPratices min={"20:30"} border={true} text="Positive focus" source={require("../../../assets/amen-hand.png")} className="bg-LightBlue" />
            <CardPratices min={"20:30"} border={true} text="Deep Breathing" source={require("../../../assets/deep-breathing.png")} className="bg-LightBlue2" />
          </View>
        </ScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

export default SwipeablePanel;
