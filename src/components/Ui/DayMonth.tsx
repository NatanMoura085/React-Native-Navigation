import { Text, View, ViewProps } from "react-native";

interface DayMonthProps extends ViewProps {
  day?: number;
  month?: string;
}

const DayMonth = ({ day, month, ...rest }: DayMonthProps) => {
  return (
    <View {...rest} className="bg-customCinza w-16 h-20 rounded-2xl flex items-center justify-center">
      <Text>{day}</Text>
      <Text>{month}</Text>
    </View>
  );
};

export default DayMonth;
