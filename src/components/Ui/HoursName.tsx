import { View, ViewProps, Text } from "react-native";

interface HoursNameProps extends ViewProps {
  hours?: string;
  name?: string;
}
const HoursName = ({ hours, name, ...rest }: HoursNameProps) => {
  return (
    <View {...rest} className="bg-customCinza w-56 h-20 rounded-2xl px-3 py-2">
      <Text>{hours}</Text>
      <Text>{name}</Text>
    </View>
  );
};
export default HoursName;
