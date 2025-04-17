import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';

const DrawerNav = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <FontAwesome name="user" size={24} color="White" />
        <Text>Plan: Customer</Text>
      </View>

      <DrawerItem label="Dasboard" onPress={() => props.navigation.navigate('Home')} />
      <DrawerItem label="Kyc" onPress={() => props.navigation.navigate('Kyc')} />
      <DrawerItem label="Pricing" onPress={() => props.navigation.navigate('Pricing')} />
      <DrawerItem label="Developers API" onPress={() => props.navigation.navigate('/')} />

      <View>
        <TouchableOpacity>
          <Text>Toggle Theme </Text>
        </TouchableOpacity>
        <Text>Logout</Text>
        <Text> Version 1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerNav;
