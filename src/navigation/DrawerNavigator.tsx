//sidenavbar ]

import { View, Text } from 'react-native'
import React from 'react'
import BottomTabs from './BottomTabs';
import { createDrawerNavigator } from '@react-navigation/drawer'
import KycScreen from '~/screens/KycScreen';
import PricingScreen from '~/screens/PricingScreen';
import DrawerNav from '~/components/UI/DrawerNav';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
   
   <Drawer.Navigator initialRouteName='HomeTabs'
   drawerContent={(props) => <DrawerNav {...props} />}>
    <Drawer.Screen name='HomeTabs' component={BottomTabs} />
    <Drawer.Screen name='Kyc' component={KycScreen} />
    <Drawer.Screen name='Pricing' component={PricingScreen} />
  </Drawer.Navigator>
    
  )
}

export default DrawerNavigator