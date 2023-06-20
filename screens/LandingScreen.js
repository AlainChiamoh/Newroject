import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import imgSrc from '../assets/logo.png'
import { useNavigation } from '@react-navigation/native'
const LandingScreen = () => {
    const navigation = useNavigation();

    useEffect(()=>{
       const returnFunction =setTimeout(()=>{
        navigation.navigate('log-in');
       },800) 

       return returnFunction;
    },[])
  return (
    <View style= {styles.page} className="justify-center items-center flex-1 md:bg-red-500">
        <View className="h-10 w-10 ">
            {/* <Image source={require("../assets/logo.png")} resizeMode='contain' /> */}
            <Image source={{uri:imgSrc}} style={styles.logo} resizeMode='contain' />
        </View>
        <View><ActivityIndicator/></View>
      
      <Text className="text-sm ">Welcome to chiam-Ca</Text>
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