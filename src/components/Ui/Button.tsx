import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyledComponent } from 'nativewind';
import {useNavigation} from '@react-navigation/native'
interface Btn {
  Label: string;
  onPress?: () => void;
  className?: string;
}


export const TouchableOpacityBtn: React.FC<Btn> = ({ Label, onPress, className}) => {
  const {navigate} =  useNavigation()
  return (
    <StyledComponent
      component={TouchableOpacity}
      className={` bg-[#299272] w-full justify-center items-center py-4 px-2 my-2 rounded-lg `}
      onPress={()=> navigate('tabroute')}
  
    >
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{Label}</Text>
    </StyledComponent>
  );
};
