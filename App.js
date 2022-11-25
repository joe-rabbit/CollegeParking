import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import FindParking from './screens/FindParking';
import LeaveParking from './screens/LeaveParking';

import RegisterUSN from './screens/RegisterUSN';
import {store} from "./store";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';





export default function App() {
  
  
  

  return (<Provider store={store}>
    <NavigationContainer>
    <SafeAreaProvider> 
<Stack.Navigator>
   <Stack.Screen name='LoginScreen'
  component={LoginScreen}
  options={{headerShown:false}}
  /> 

  <Stack.Screen
   name="Dsce Parking"
    component={HomeScreen}
  options={{
   headerShown:false,
  }}

  />
  <Stack.Screen
   name="FindParking"
    component={FindParking}
  options={{
   headerShown:true,

  }}

  />
   <Stack.Screen
   name="LeaveParking"
    component={LeaveParking}
  options={{
   headerShown:true,

  }}

  />
   <Stack.Screen
   name="RegisterUSN"
    component={RegisterUSN}
  options={{
   headerShown:true,

  }}

  />


  </Stack.Navigator>

    </SafeAreaProvider>
    </NavigationContainer>  
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
