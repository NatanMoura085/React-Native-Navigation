import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

interface ThreeDotsMenu {
  onPress: () => void;
}
const ThreeDotsMenu = ({ ...rest }: ThreeDotsMenu) => {
  return (
    <TouchableOpacity {...rest}>
      <Octicons
        name="kebab-horizontal"
        size={25}
        style={{ color: "rgb(228, 237, 237)" }}
      />
    </TouchableOpacity>
  );
};

export default ThreeDotsMenu;
