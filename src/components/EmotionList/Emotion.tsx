import { Image, Text, View } from "react-native";

export default function EmotionList() {
  return (
    <View className="flex flex-row justify-center gap-16">
      <View>
        <Image className="mix-blend-multiply" source={require("../../../assets/angry.png")} style={{width:50, height:50}} />
        <Text>Angry</Text>
      </View>

      <View>
        <Text>😔</Text>
        <Text>Sad</Text>
      </View>
      <View>
        <Text>😶</Text>
        <Text>Neutral</Text>
      </View>
      <View>
        <Text>🥳</Text>
        <Text>Happy</Text>
      </View>
    </View>
  );
}
