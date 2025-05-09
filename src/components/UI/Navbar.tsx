import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons, Octicons } from '@expo/vector-icons';
import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Navbar = (props: BottomTabBarProps) => {
  const { navigation } = props;
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[style.navGroup, { paddingBottom: bottom }]} className="justify-between">
      <View style={style.navSection}>
        <TouchableOpacity style={style.navItem} onPress={() => navigation.navigate('Home')}>
          <Octicons name="home" size={30} color="white" />
          <Text style={style.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.navItem} onPress={() => navigation.navigate('Rewards')}>
          <Ionicons name="wallet" size={30} color="white" />
          <Text style={style.navText}>Rewards</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.navItem} onPress={() => navigation.navigate('Me')}>
          <FontAwesome name="user" size={30} color="white" />
          <Text style={style.navText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  navGroup: {
    backgroundColor: 'black',
  },
  navSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    gap: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
    padding: 5,
  },
  navText: {
    fontSize: 12,
    color: 'white',
    marginTop: 4,
  },
});

export default Navbar;
