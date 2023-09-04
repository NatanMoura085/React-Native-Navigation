import React, { useRef } from "react";
import { View, Dimensions, TouchableOpacity, Text, FlatList, ScrollView } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import CardPratices from "../PraticesCard/CardPratices";
const { width, height } = Dimensions.get("window");
function SwipeablePanel() {
  const bottomSheetRef = useRef<BottomSheet>(null);
console.log(height)
  return (
    <View className="flex-1 ">
      <TouchableOpacity className="flex-row  items-center p-3 justify-between pr-5"
        activeOpacity={0.9}
        onPress={() => {
          bottomSheetRef.current?.expand();
        }}
      >

      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={[60, 1, height, 700]}
        backgroundStyle={{ backgroundColor: "white" }}
        handleIndicatorStyle={{ backgroundColor: "grey", width: 60, height: 7 }}
        enableHandlePanningGesture
        
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
      </BottomSheet>
    </View>
  );
}

export default gestureHandlerRootHOC(SwipeablePanel);
