import {View} from 'react-native'
import LottieView from 'lottie-react-native'
export default function Splash(){
    return(
        <View>
            <LottieView source={require('../../assets/splash.json')} autoPlay loop autoSize />
        </View>
    )
}