import { View, ViewProps, Text } from "react-native";

interface HoursNameProps extends ViewProps {
  hours?: string;
  name?: string;
}
const HoursName = ({ hours, name, ...rest }: HoursNameProps) => {
  return (
    <View {...rest} className="bg-customCinza w-56 h-20 rounded-3xl px-3 py-4">
      <Text className="font-Inter800 text-white">{hours}</Text>
      <Text className=" font-thin font-Inter400 text-white">{name}</Text>
    </View>
  );
};
export default HoursName;
