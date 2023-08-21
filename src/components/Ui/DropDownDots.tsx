import { View, Text, TouchableOpacity } from "react-native";

interface DropDownDots{
    onPress:()=>void
}
const DropDownDots = () => {
  return (
    <View >
      <TouchableOpacity >
        <Text>Show drop</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity>
          <Text> opçao1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text> opçao2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text> opçao3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DropDownDots;
