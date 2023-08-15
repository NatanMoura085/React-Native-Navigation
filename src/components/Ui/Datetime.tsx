import { StyledComponent } from "nativewind"
import { View } from "react-native"

interface DatetimeProps{
day?:number
month?:string,
hours?:number,
nome?:string
className?:string 

}
const Datetime = ({nome,hours,month,className, ...rest}:DatetimeProps)=>{

    return(
        <StyledComponent component={View} {...rest}>
          
        </StyledComponent>
    )
}