import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text,StyleSheet,View, FlatList } from 'react-native';
import Card from '../components/Card';
import Transaction from '../components/Transaction';
import { DUMMY_TRANSACTIONS } from '../constants/transactions';
import CalendarPicker from 'react-native-calendar-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
const style = StyleSheet.create({
    head:{
        width:'100%',
        height: 50,
        fontSize: 40,
        backgroundColor: "#FF1694",
        display: "flex",
        flexDirection: "row",
        justifyContent:'space-between',
        padding: 10,
        alignItems: "center"

    }
})


const  MonthDetail = ({month, year}) => {
    const navigation = useNavigation();
    const route = useRoute();
    const [newTransaction,setNewTransaction] =useState( [route?.params] || []);
    const [showTextInput, setShowTextInput] = useState(false);
    const [showCalendar,setShowCalendar] = useState(false);
    const [showForAllDays, setShowForAllDays] = useState(true);
    const [date, setDate] = useState( new Date())
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(1500);
    const [target, setTarget] = useState(2000);
    const barWidth = (expense*100/target + "%") || 100;
    const [dummyTransactions, setDummyTransactions] = useState([...DUMMY_TRANSACTIONS])
    const onDelete = (transaction) =>{
        let newTransactions = [...dummyTransactions];
        newTransactions.splice(dummyTransactions.findIndex(item=>item.transaction_id===transaction.transaction_id),1)
        setDummyTransactions(newTransactions)


    }
    const addNewTransaction = ( newTransaction) =>{
        setDummyTransactions({...dummyTransactions,newTransaction})
    }
    useEffect(()=>{
        if(route?.params) setDummyTransactions([...DUMMY_TRANSACTIONS,route?.params])

    },[route?.params])
    return (
        <View style={{backgroundColor:"white", flexGrow:1, display: "flex", alignItems:'center'}}>
            <View style={style.head}>
                <Text style={{fontWeight:500, color:"white"}}>{date.getFullYear()} {monthNames[date.getMonth()]}</Text>
                <View style={{justifyContent:'center', alignItems: 'center'}}>
                    <MaterialCommunityIcons name="calendar-blank" size={30} color="#000" onPress={()=>setShowCalendar(!showCalendar)}
                                        style={{color:'white'}}/>
                    <Text style={{position:'absolute', color:'white'}}>{showForAllDays?'A':date.getDate()}</Text>
                </View>
                
                {showCalendar && <DateTimePickerModal
                    isVisible={true}
                    mode="date"
                    onConfirm={(selectedDate)=>{
                        setDate(selectedDate);
                        setShowCalendar(false);
                        setShowForAllDays(false);
                    }}
                    onCancel={()=>setShowCalendar(false)}
                /> }
                
            </View>
            <Card>
                <Text style={{fontWeight: "600",margin:5}}>Balance</Text>
                <Text style={{color:"green"}}>XAF: {balance||50000}</Text>
            </Card>

            {/*  expenses bar*/}
            <View style={{
                width: "85%",
                height: 20,
                borderRadius: 5,
                backgroundColor: "#B8B8B833",
                marginTop: 20,
                display:"flex",
                
            }}>
                <View style={{
                    display:"flex",
                    backgroundColor:"red",
                    height: "100%",
                    width: barWidth,
                    borderRadius: 5,
                }}>

                </View>
                {!showTextInput &&<Text style={{position:'absolute', right: 5, fontWeight:500}} onPress={()=>setShowTextInput(!showTextInput)}>{target}XAF</Text>}
                {showTextInput && <TextInput 
                    style={{backgroundColor:'gray'}}
                    keyboardType = 'numeric'
                    onChangeText = {(text)=> setTarget(text)}
                    value = {target}
                    /> }
            </View>

            {/* income and expense */}

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 60
            }}>
            <Card>
                <Text style={{fontWeight: "600",margin:5}}>Income</Text>
                <Text style={{color:"green"}}>XAF: {income||12000}</Text>
            </Card>
            <Card>
                <Text style={{fontWeight: "600",margin:5}}>Expense</Text>
                <Text style={{color:"red"}}>XAF: {expense||0}</Text>
            </Card>
            </View>

            {/*Transactions*/}
            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                backgroundColor: "white",
                margin: 50,
                borderRadius: 5
                
            }}>
                <Text style={{
                width: 200,
                textAlign: "center",
                borderRadius: 5,
                fontWeight: "600",
                

                }}
            >{JSON.stringify(route?.params)}</Text></View>
            <TouchableOpacity style={{
                backgroundColor:"green",
                borderRadius: 20,
                flexDirection: 'row',
                marginTop: -30,             
            }}
            onPress={()=>{
                navigation.navigate('add-transaction',{
                    params:{
                        addNewTransaction
                    }
                })
            }}
            ><Text style={{
                fontSize: 15,
                padding: 5,
                color: 'white'
            }}>Add transaction</Text>
            <Text style={{
                fontSize: 15,
                padding: 5,
                color: 'white'
            }}>+</Text>
            
            </TouchableOpacity>
            <View style={{ width: "90%", flexGrow:1, marginBottom:20, height:20}}>
                
                {dummyTransactions.length>0&&<FlatList 
                    data={dummyTransactions}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=><Transaction transaction={item}  onDelete={onDelete}/>}
                    keyExtractor={(transaction=>transaction.transaction_id)}
                    extraData={onDelete}
                    />}
                {
                    dummyTransactions<=0 && <Text style={{alignSelf:"center", fontWeight: 600}}>No Transactions available.</Text>
                }
                    
            </View>
    
            
        </View>
    
        
    );
}

export default MonthDetail;