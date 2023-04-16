import { View, Text } from 'react-native'
import React, { Children } from 'react'

const Card = ({children}) => {
  return (
    <View
    style={{
        backgroundColor: "white",
        marginTop: 20,
        minWidth: "35%",
        padding: 5,
        fontWeight: "600",
        display:"flex",
        alignItems:"center",
        borderRadius : 10,
        width: 100,
        shadowColor:  "#74858C",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
  
      elevation: 14,
    }}>{children}
    </View>
  )
}

export default Card