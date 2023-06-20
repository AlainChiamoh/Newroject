import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import imgSrc from '../assets/logo.png'
import { useNavigation } from '@react-navigation/native'
const LandingScreen = () => {
    const navigation = useNavigation();

    useEffect(()=>{
       setTimeout(()=>{
        navigation.navigate('log-in');
       },800)
    },[navigation]) 
  return (
    <View className="justify-center relative items-center flex-1 bg-gray-10">
        <View className="h-10 w-10 absolute top-100">
             <Image source={require("../assets/logo.png")} resizeMode='contain' />
        </View>
        <View className=""><ActivityIndicator size={'large'} color="#00CCBB"/></View>
      
      <Text className="text-[20px] font-light text-gray-600">Welcome...</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    logo:{
        width: '240px',
        height: '240px',
    },
    page:{
        flex:1,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems:"center"
    }
})

export default LandingScreen