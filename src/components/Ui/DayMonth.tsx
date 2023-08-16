import { Text, View, ViewProps } from "react-native";

interface DayMonthProps extends ViewProps {
  day?: number;
  month?: string;
}

const DayMonth = ({ day, month, ...rest }: DayMonthProps) => {
  return (
    <View {...rest} className="bg-customCinza w-16 h-20 rounded-3xl flex items-center justify-center">
      <Text className="text-white font-Inter800 text-xl">{day}</Text>
      <Text className="text-white  font-thin font-Inter400">{month}</Text>
    </View>
  );
};

export default DayMonth;
