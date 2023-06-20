import { View, Text,ScrollView,TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation = useNavigation()
    const [phoneNumber,setPhoneNumber] = useState(0);
    const [password, setPassword] = useState('');
  return (
    <ScrollView className="flex-1 gap-4">
      <Text className="mt-100 p-8 mx-auto text-3xl font-semibold bg-white shadow-sm w-[100%]">Welcome Back</Text>

      <View className="bg-white mt-10 gap-4  px-2 shadow-xl  py-6">

        <Text className="text-[20px] font-[600]">Email</Text>
        <TextInput className="border-[2px] h-[50] rounded-xl focus:border-blue-500"/>

        <Text className="text-[20px] font-[600]">Password</Text>
        <TextInput className="border-[2px] h-[50] rounded-xl focus:border-blue-500" secureTextEntry/>

        <TouchableOpacity className="bg-blue-400  p-4 flex items-center justify-center rounded-xl m active:bg-white active:border-blue-900 active:border-[2px]
        "><Text className="text-white text-xl active:text-blue-600">Continue</Text></TouchableOpacity>
        <TouchableOpacity className=""><Text className="text-blue-600 text-sm active:text-blue-600 text-right py-2">Forgot password?</Text></TouchableOpacity>
        <TouchableOpacity className="" onPress={()=>navigation.navigate('sign-up')}><Text className="text-blue-600 text-sm active:text-blue-700  py-2 text-left">Don't have an account? Register</Text></TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Login