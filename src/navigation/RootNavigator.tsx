import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '~/screens/SignUp';
import LoginScreen from '~/screens/Login';
import BottomTabs from './BottomTabs';

export default function RootNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName='LogIn'>
        <Stack.Screen name="LogIn" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
        <Stack.Screen name="HomeTabs" component={DrawerNavigator} options={{headerShown: false}} />
        {/* <Stack.Screen name="Drawer" component={DrawerNavigator} options={{}} /> */}
        {/* <DrawerNavigator /> */}
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
