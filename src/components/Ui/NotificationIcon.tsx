
import { Text } from "react-native"

interface NotificationIconProps{
    children:React.ReactNode
}
const NotificationIcon = ({children}:NotificationIconProps)=>{

    return(

        <Text className="h-4 w-4 text-center">{children}</Text>
    )
}

export default NotificationIcon