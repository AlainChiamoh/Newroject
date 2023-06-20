import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddTransaction from './screens/AddTransaction';
import MonthDetail from './screens/MonthDetail';
import {RealmProvider} from './models/Realm';
import SignUp from './screens/SignUp';
const Stack = createStackNavigator();

export default function App() {
  return(
    <RealmProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign Up"
        screenOptions={{
          
          headerStyle:{
            backgroundColor:'green',
          },
          headerTintColor:'black',
        }}>

        <Stack.Screen name="month-detail" component={MonthDetail} title="Month Detail"/>
        <Stack.Screen name="add-transaction" component={AddTransaction} title="Add Transaction"/>
        <Stack.Screen name="Sign Up" component={SignUp} title="Register"/>
      </Stack.Navigator>
    </NavigationContainer>
  </RealmProvider>
    
    
  )
}

