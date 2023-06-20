import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
import {getAuth} from 'firebase/auth'
const SignUp = () => {
  const [error,setError] = useState('');
  const registerUser = () =>{
    
  }
  return (

    <ScrollView className="flex-1 gap-4">
      <Text className="mt-100 p-8 mx-auto text-3xl font-semibold bg-white shadow-sm w-[100%]">Sign Up</Text>

      <View className="bg-white mt-10 gap-4  px-2 shadow-xl  py-6">
        {error.length>1&&<Text>{error}</Text>}

        <Text className="text-[20px] font-[600]">Email</Text>
        <TextInput className="border-[2px] h-[50] rounded-xl focus:border-blue-500"/>

        <Text className="text-[20px] font-[600]">Username</Text>
        <TextInput className="border-[2px] h-[50] rounded-xl focus:border-blue-500"/>

        <Text className="text-[20px] font-[600]">Password</Text>
        <TextInput className="border-[2px] h-[50] rounded-xl focus:border-blue-500" secureTextEntry/>

        <Text className="text-[20px] font-[600]">Confirm Password</Text>
        <TextInput className="border-[2px] h-[50] rounded-xl focus:border-blue-500" secureTextEntry/>

        <TouchableOpacity className="bg-blue-400  p-4 flex items-center justify-center rounded-xl m active:bg-white active:border-blue-900 active:border-[2px]
        " onPress={registerUser}><Text className="text-white text-xl active:text-blue-600">Register</Text></TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default SignUp