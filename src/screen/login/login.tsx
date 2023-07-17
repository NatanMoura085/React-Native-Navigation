
import { View, TextInput, Text } from "react-native";
import { PressableBtn } from "../../components/Ui/Button";

export default function Login() {
  return (
    <View className="bg-[#f5007c] p-4 h-full justify-center gap-2">
      <Text className="font-bold text-4xl text-center text-lime-50">
        Sign In
      </Text>

      <TextInput
        className=" rounded-md p-2 bg-slate-300"
        placeholder="Username"
      />

      <TextInput
        className=" bg-slate-300 rounded-md p-2"
        placeholder="Password"
      />
      <PressableBtn Label={"Log In"} />
    </View>
  );
}
