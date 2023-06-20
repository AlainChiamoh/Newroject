import {useState,React} from 'react';
import { TouchableOpacity,StyleSheet,SafeAreaView } from 'react-native';
import { TextInput, Text } from 'react-native';
import { Button } from 'react-native';
import { View } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
//import { Month, useQuery, useRealm } from '../models/Realm';
import { Alert } from 'react-native';
import { Transaction } from '../models/Transaction';

 const style = StyleSheet.create({
    awesome:{
        margin: 25,
        color: 'orange',
        borderWidth: 3,
        borderColor: '#004EFF',
        width: 400,
    }
 })
function AddTransaction(props) {
    // REALM 
    //const realm = useRealm();
    //const result = useQuery('transactions')
    const [showForm,setShowForm] = useState(false);
    const [transactionType, setTransactionType] = useState('');
    const [color, setColor] = useState('green');
    const navigation = useNavigation();
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const onSubmitHandler = () =>{

        let date = new Date();
        let transaction_id = (Math.random()+1).toString(36).substring(7);
        let calcAmount = Math.abs(amount);
        if(transactionType==='Expense') calcAmount *= -1;

        // add the transaction to the db
        

        
        navigation.navigate('month-detail',
        //pass the new Transaction back to monthly Detail
            );
    }

    return (
        <SafeAreaView style={{
            backgroundColor: 'pink',
            flexGrow:1,
            alignItems: 'center'
        }} className="space-y-10 bg-transparent">
            
            {!showForm && <View style={{
                backgroundColor: 'white',
                flex: 0.25,
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <Button title='Income' onPress={()=>{
                    setTransactionType('Income');
                    setColor('green');
                    
                    setShowForm(true)
                }} ></Button>

                <Button title='Expense' color='red' onPress={()=>{
                    setTransactionType('Expense');
                    setColor('red')
                    setShowForm(true)
                }}></Button>
            
                
            </View>}
              
            {showForm &&<View className="  w-[100%] flex-1 py-10 px-2 space-y-5 bg-transparent">
                {/* <Text style={{alignSelf:'center', fontWeight: '700', color: {color}, fontSize:20, marginVertical:20}}>New {transactionType}</Text>
                <TextInput placeholder='Enter Category' style={style.awesome} 
                onChangeText={(text)=>setCategory(text)}></TextInput>
                <TextInput placeholder='Enter Amount' keyboardType='numeric' style={style.awesome} 
                    onChangeText={(text)=>setAmount(text)}></TextInput>
                <Button title='Add' onPress={onSubmitHandler}/> */}
                <Text className="text-3xl font-[600] text-center">{transactionType}</Text>
                <Text className="text-[20px] font-[600]">Category</Text>
                <TextInput className="border-[2px] h-[50] rounded-xl focus:border-blue-500" />

                <Text className="text-[20px] font-[600]">Amount</Text>
                <TextInput className="border-[2px] h-[50] rounded-xl focus:border-blue-500" keyboardType='number-pad'/>
                <View className="flex-row items-center justify-center p-5">
                <TouchableOpacity className={`${transactionType==="Income"?'bg-green-500':'bg-red-500'} px-6 py-3 rounded-xl`}><Text className="text-white font-medium" >{`Add ${transactionType}`}</Text></TouchableOpacity>
                </View>
        
            </View>}
            
        </SafeAreaView>
    );
}

export default AddTransaction;