import React, { useRef } from "react";
import { View, Dimensions, TouchableOpacity, Text } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import CardPratices from "../PraticesCard/CardPratices";
const { width, height } = Dimensions.get("window");
function SwipeablePanel() {
  const bottomSheetRef = useRef<BottomSheet>(null);

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
        snapPoints={[70, 100, height, 660]}
        backgroundStyle={{ backgroundColor: "white" }}
        handleIndicatorStyle={{ backgroundColor: "grey", width: 60, height:7 }}
        enableHandlePanningGesture
      >
        <CardPratices  min={"20:30"} border={true} text="Meditation" source={require("../../../assets/meditation.png")} className="bg-brightBlueCard" />
      </BottomSheet>
    </View>
  );
}

export default gestureHandlerRootHOC(SwipeablePanel);
