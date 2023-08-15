import { View } from "react-native"
import TitleToday from "../Ui/TitleToday"

const NextAppoitment = ()=>{

    return(
        <View className="h-40 bg-teal-800 rounded-2xl">
        <TitleToday title="Next Appointment" className="text-white px-7 py-4 font-bold text-lg"/>

        </View>
    )
}

export default NextAppoitment