import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from "react-native"



interface CardPraticesProps {
    source: ImageSourcePropType
    border?: boolean
    text: string
    backGround: string
    className?: string
}
const CardPratices = ({ className, source, border, text, backGround, ...rest }: CardPraticesProps) => {
    return (
        <TouchableOpacity className={` bg-green-400 bg-${backGround} w-36 h-40`}{...rest}>
            {source &&
                <View className="">
                    <View className="border border-purple-900 w-20 h-20 ">
                        <Image source={source} style={{ width: 40, height: 40 }} />
                    </View>
                </View>}
        </TouchableOpacity>
    )
}

export default CardPratices