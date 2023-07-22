import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { TouchableOpacityBtn } from '../../components/Ui/Button';
import { Feather ,MaterialIcons} from '@expo/vector-icons';

export default function Login() {
  return (
    <View className = "bg-[#1c2d27] p-4 h-full justify-center">
      <Text className="font-bold text-4xl text-center text-lime-50">
        Sign In
      </Text>

      <View className= "flex-row items-center bg-[#ffffff] rounded-md p-2 my-2">
        <MaterialIcons name="alternate-email" size={24} color="black" className='mr-2'/>
        <TextInput
         className='flex-1 ml-1'
          placeholder="Email ID"
        />
      </View>

      <View className= 'flex-row items-center bg-[#ffffff] rounded-md p-2 my-2'>
        <Feather name="lock" size={24} color="black" className='mr-2'/>
        <TextInput
          className='flex-1 ml-1'
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacityBtn Label={"Login"} />
    </View>
  );
}
