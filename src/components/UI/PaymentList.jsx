import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons/';

import React from 'react';
import { useNavigation } from '@react-navigation/native';

const PaymentList = () => {
  const navigation = useNavigation();
  const data = [
    { id: 1, Icon: FontAwesome5, iconName: 'wifi', text: 'Buy Data', page: 'BuyData' },
    { id: 2, Icon: FontAwesome6, iconName: 'phone', text: 'Airtime', page: 'Airtime' },
    {
      id: 3,
      Icon: MaterialIcons,
      iconName: 'electric-bolt',
      text: 'Electricity',
      page: 'Electricity',
    },
    { id: 4, Icon: MaterialIcons, iconName: 'live-tv', text: 'Tv Sub', page: 'TvSub' },
  ];
  return (
    <View>
      <Text style={styles.title}> Payment List</Text>
      <View style={styles.contaner}>
        {data.map(({ text, id, Icon, iconName, page }) => (
          <TouchableOpacity
            key={id}
            onPress={() => {
              navigation.navigate(page);
            }}>
            <View style={styles.inner}>
              <Icon
                name={iconName}
                size={24}
                color="#FFFFFF"
                //    background="#212121"
                style={styles.button}
              />
              <Text style={styles.text}>{text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  contaner: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
  },
  inner: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#212121',
    borderRadius: 8,
    padding: 20,
  },
  text: {
    color: '',
    marginTop: 10,
    fontSize: 14,
  },
});
export default PaymentList;
