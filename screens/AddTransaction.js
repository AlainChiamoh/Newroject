import {useState,React} from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native';
import { TextInput, Text } from 'react-native';
import { Button } from 'react-native';
import { View } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { Month, useQuery, useRealm } from '../models/Realm';
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
    const realm = useRealm();
    const result = useQuery('transactions')
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
        try{
            realm.write(()=>{
                // I will have to check for the month first and create it
                let name = `${toString(date.getFullYear)}${toString(date.getMonth())}`
                const q = `name ==  '${name}'`;
                let months = realm.objects('Month').filtered(q);
                if(!months.length){
                    months = [
                        realm.create(
                            'Month',
                            new Month({year:date.getFullYear(), target: 200000, monthId: date.getMonth()})
                        )
                    ]
                }
                const month0 = months[0];
                const transaction = realm.create('Transaction', new Transaction({amount:calcAmount,category:category,date: date.toDateString()}));
                month0.transactions.push(transaction);
            })
        }catch(e){
            Alert.alert('Error Adding Transaction')
        }
        const newTransaction = {
                transaction_id,
                date: date.toDateString,
                amount: calcAmount,
                category,
            }

        
        navigation.navigate('month-detail',
                newTransaction );
    }

    return (
        <View style={{
            backgroundColor: 'whitesmoke',
            flexGrow:1,
            alignItems: 'center'
        }}>
            
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
              
            {showForm &&<View>
                <Text style={{alignSelf:'center', fontWeight: '700', color: {color}, fontSize:20, marginVertical:20}}>New {transactionType}</Text>
                <TextInput placeholder='Enter Category' style={style.awesome} 
                onChangeText={(text)=>setCategory(text)}></TextInput>
                <TextInput placeholder='Enter Amount' keyboardType='numeric' style={style.awesome} 
                    onChangeText={(text)=>setAmount(text)}></TextInput>
                <Button title='Add' onPress={onSubmitHandler}/>

            </View>}
        </View>
    );
}

export default AddTransaction;