import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons, Octicons } from '@expo/vector-icons';
import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';


const Navbar = (props: BottomTabBarProps) => {
  const {navigation} = props;
  return (
    <View>
      <TouchableOpacity style={style.navItem} onPress={()=> navigation.navigate('Home')}>
        <Octicons name="home" size={24} color="White" />
        <Text style={style.navText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.navItem} onPress={()=> navigation.navigate('Rewards')}>
        <Ionicons name="wallet" size={24} color="White" />
        <Text style={style.navText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.navItem} onPress={()=> navigation.navigate('Me')}>
        <FontAwesome name="user" size={24} color="White" />
        <Text style={style.navText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  navItem: {
    alignItems: 'center',
    gap: 4,
  },
  navText: {
    fontSize: 12,
    color: 'white',
  },
});

export default Navbar;
