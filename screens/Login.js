import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation = useNavigation()
    const [phoneNumber,setPhoneNumber] = useState(0);
    const [password, setPassword] = useState('');
  return (
    <View>
      <Text>Login Page</Text>
    </View>
  )
}

export default Login