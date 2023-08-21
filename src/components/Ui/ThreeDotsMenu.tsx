import {Octicons} from "@expo/vector-icons"
import { View } from "react-native"

interface ThreeDotsMenu{


}
const ThreeDotsMenu = ()=>{

    return(
        <View className=" ">
            <Octicons name="kebab-horizontal" size={25} style={{ color: "rgb(228, 237, 237)" }}/>
        </View>
    )
}

export default ThreeDotsMenu