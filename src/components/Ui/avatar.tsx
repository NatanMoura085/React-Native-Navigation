import { View, Image,Text } from "react-native";

export default function Avatar() {
  return (
    <View>
      <Image source={require("../../../assets/avatar.png")}  style={{width:55, height:55,borderRadius:20}}/>
      <Text>Natan Moura</Text>
      <Text>pattient</Text>
    </View>
  );
}
