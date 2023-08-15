import { Text } from "react-native";
import { StyledComponent, styled } from "nativewind";

interface TitleToday {
  title: string;
  className:string;
}
const TitleToday = ( { title, className, ...rest  }: TitleToday, ) => {
  return (
    <StyledComponent component={Text} className="" {...rest}>
      {title}
    </StyledComponent>
  );
};

export default TitleToday;
