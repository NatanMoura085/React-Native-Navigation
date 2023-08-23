import React, { useRef } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
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
        snapPoints={[40, 100, height, 660]} 
        backgroundStyle={{ backgroundColor: "grey" }}
        handleIndicatorStyle={{ backgroundColor: "red" }}
        enableHandlePanningGesture
      >
        
      </BottomSheet>
    </View>
  );
}

export default gestureHandlerRootHOC(SwipeablePanel);
