import { View, ViewProps, Text } from "react-native";
import ThreeDotsMenu from "./ThreeDotsMenu";

interface HoursNameProps extends ViewProps {
  hours?: string;
  name?: string;
  Icon:React.ReactNode
 
}
const HoursName = ({ hours, name,Icon, ...rest }: HoursNameProps) => {
  return (
    <View {...rest} className="bg-customCinza w-56 h-20 rounded-3xl px-4  ">
      <View className="flex items-end  h-4 mt-2">

      {Icon}
      </View>
      <Text className="font-Inter800 text-white">{hours}</Text>
      <Text className=" font-thin font-Inter400 text-white">{name}</Text>
    </View>
  );
};
export default HoursName;
