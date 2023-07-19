import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { TouchableOpacityBtn } from '../../components/Ui/Button';
import { Feather } from '@expo/vector-icons';

export default function Login() {
  return (
    <View className = "bg-emerald-500 p-4 h-full justify-center">
      <Text className="font-bold text-4xl text-center text-lime-50">
        Sign In
      </Text>

      <View className= "flex-row items-center bg-slate-300 rounded-md p-2 my-2">
        <Feather name="user" size={24} color="black" className='mr-2'/>
        <TextInput
         className='flex-1 ml-1'
          placeholder="Username"
        />
      </View>

      <View className= 'flex-row items-center bg-slate-300 rounded-md p-2 my-2'>
        <Feather name="lock" size={24} color="black" className='mr-2'/>
        <TextInput
          className='flex-1 ml-1'
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacityBtn Label={"Log In"} />
    </View>
  );
}
