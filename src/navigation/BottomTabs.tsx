//drawer + bottom tabs


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '~/screens/HomeScreen';
import RewardsScreen from '~/screens/RewardsScreen';
import MeScreen from '~/screens/MeScreen';
import Navbar from '~/components/UI/Navbar';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown:false}}
      tabBar={(props) => <Navbar {...props} />}
      >
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Rewards" component={RewardsScreen} /> */}
      {/* <Tab.Screen name="Me" component={MeScreen} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabs;
