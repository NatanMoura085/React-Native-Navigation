import React from "react";
import { Text, View } from "react-native";
import Routes from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Routes />
    </GestureHandlerRootView>
  );
}
