import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddTransaction from './screens/AddTransaction';
import MonthDetail from './screens/MonthDetail';
//import {RealmProvider} from './models/Realm';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import { AuthProvider } from './hooks/useAuth';
import LandingScreen from './screens/LandingScreen';
const Stack = createStackNavigator();

const leftToRightAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

export default function App() {
  return(
    <AuthProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="landing"
        screenOptions={{
          
          headerStyle:{
            backgroundColor:'green',
          },
          headerTintColor:'black',
        }}>

        <Stack.Screen name="landing" component={LandingScreen} title="Welvo" options={{
          presentation: "card",
          headerShown: false,
          cardStyle: {backgroundColor:'transparent'},
          cardOverlayEnabled: true

        }}/>
        <Stack.Screen name="month-detail" component={MonthDetail} title="Month Detail" options={leftToRightAnimation}/>
        <Stack.Screen name="add-transaction" component={AddTransaction} title="Add Transaction" options={{
          presentation: "card",
          headerShown: false,
          cardStyle: {backgroundColor:'transparent'},
          cardOverlayEnabled: true

        }}/>
        <Stack.Screen name="sign-up" component={SignUp} title="Register"/>
        <Stack.Screen name="log-in" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  )
}

