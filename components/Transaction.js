import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

const Transaction = ({transaction,index, onDelete}) => {
    const [deleted, setDeleted] = useState(true);
    const color = (transaction.amount>0)? 'green' : 'red';
    const del = ()=>{
        setDeleted((state)=>!state)
        onDelete(transaction)
    }
  return (
    <View style={{
        flexDirection: 'row',
        borderBottomColor: '#000',
        backgroundColor: "white",
        height: 80,
        justifyContent:'space-between',
        paddingLeft: 2,
        paddingRight: 4,
        borderBottomWidth: .5,
        borderEndColor: "gray",
        alignItems: 'center'
    }}>
      
      <View style={{
        flexDirection: 'row',
        gap: 5
      }}>
        <Text style={{fontWeight:600}}>.{transaction.category} :</Text>
        <Text style={{fontWeight:"bold"}}><Text style={{color}}>{color=="green"?"+":""}{transaction.amount} XAF</Text></Text>
      </View>
      <TouchableOpacity onPress={del}><Text style={{backgroundColor:"white", aspectRatio:1, textAlign:'center', color:"red", height:'40%', textAlignVertical:'center', fontWeight:'900', borderColor:'red', borderWidth: 2, borderRadius:10}}>x</Text></TouchableOpacity>
    </View>
  )
}

export default Transaction