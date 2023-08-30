import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from "react-native"



interface CardPraticesProps {
    source: ImageSourcePropType
    border?: boolean
    text: string
    backGround?: string
    className?: string
    min:string 
}
const CardPratices = ({ className,min, source, border, text, backGround, ...rest }: CardPraticesProps) => {
    return (
        <TouchableOpacity className={`mx-4 rounded-lg bg-${backGround} w-36 h-40`}{...rest}>
            {source &&
                <View className="mt-4 mx-2 flex flex-col justify-between h-28">
                    <View className=" flex  items-center  w-11 h-12 rounded-2xl bg-white  ">
                        <Image source={source} style={{ width: 40, height: 40 }} />
                    </View>
                    <View className="">

                        <Text className="font-Inter700">{text}</Text>
                        <Text className="font-thin">{min} min</Text>

                    </View>
                </View>}
        </TouchableOpacity>
    )
}

export default CardPratices