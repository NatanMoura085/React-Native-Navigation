import { View } from "react-native";
import { useState} from "react"
import TitleToday from "../Ui/TitleToday";
import DayMonth from "../Ui/DayMonth";
import HoursName from "../Ui/HoursName";
import ThreeDotsMenu from "../Ui/ThreeDotsMenu";
import DropDownDots from "../Ui/DropDownDots";

const NextAppoitment = () => {
  const [isOpen,setOpen] = useState(false)
  const HandleClik = ()=>{
    setOpen(prev => !prev)
  }
  return (
    <View className="h-44 w-screen bg-[#1c2d27] rounded-2xl">
      <TitleToday
        title="Next Appointment"
        className="text-white px-7 py-4 text-lg font-Inter800"
      />
      <View className="flex flex-row ">
        <DayMonth day={11} month="apr" className="p-1 mx-7 " />
        <HoursName hours="12:40" name="Natan moura" Icon={<ThreeDotsMenu onPress={HandleClik}/>}/>
        {isOpen && <DropDownDots />}
      </View>
    </View>
  );
};

export default NextAppoitment;
