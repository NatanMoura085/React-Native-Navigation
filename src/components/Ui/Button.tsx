import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { StyledComponent } from 'nativewind';
import {useNavigation} from '@react-navigation/native'
interface Btn {
  Label: string;
  onPress?: () => void;
  className?: string;
}


export const PressableBtn: React.FC<Btn> = ({ Label, onPress, className}) => {
  const {navigate} =  useNavigation()
  return (
    <StyledComponent
      component={Pressable}
      className={`w-full justify-center items-center py-4 px-2 my-2 rounded-md border border-slate-300`}
      onPress={()=> navigate('home')}
  
    >
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{Label}</Text>
    </StyledComponent>
  );
};
