import { View, Text, TouchableOpacity, FlatList } from "react-native";

interface DropDownDots {
  onPress: (selectedValue: string) => void;
}
const options = [
  { id: "1", label: "14:40" },
  { id: "2", label: "15:40" },
  { id: "3", label: "16:40" },
];
const DropDownDots = ({onPress,...rest}:DropDownDots) => {
  return (
    <View {...rest}>
      <View className="absolute right-2 top-8 bg-gray-400 rounded-md w-20">
        <FlatList
          data={options}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity className="px-4 py-2"  onPress={() => {
              onPress(item.label); 
            }}>
              <Text className="text-white">{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default DropDownDots;
