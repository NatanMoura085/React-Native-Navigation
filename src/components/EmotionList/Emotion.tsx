import { Image, Text, View, TouchableOpacity } from "react-native";

export default function EmotionList() {
  return (
    <View className="flex flex-row justify-center gap-11 ">
      <TouchableOpacity>
        <View className="flex flex-col items-center">
          <Image
            source={require("../../../assets/angry.png")}
            style={{ width: 42, height: 41 }}
          />
          <Text className="font-thin">Angry</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="flex flex-col items-center">
          <Image
            source={require("../../../assets/sad.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text className="font-thin">Sad</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>

      <View className="flex flex-col items-center">
        <Image
          source={require("../../../assets/neutral.png")}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "rgb(206,228,199)",
          }}
        />
        <Text className="font-thin">Neutral</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View className=" flex flex-col items-center">
        <Image
          source={require("../../../assets/happy.png.webp")}
          style={{
            width: 45,
            height: 41,
            borderColor: "rgb(125,138,137)",
            borderRadius: 25,
           
          }}
        />
        <Text className="font-thin">Happy</Text>
      </View>

      </TouchableOpacity>
    </View>
  );
}
