import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    Icon: AntDesign,
    iconName: 'upload',
    text: 'Upload',
    page: 'UploadScreen',
  },
  {
    id: '2',
    Icon: FontAwesome,
    iconName: 'history',
    text: 'History',
    page: 'HistoryScreen',
  },
  {
    id: '3',
    Icon: MaterialIcons,
    iconName: 'support-agent',
    text: 'Support',
    page: 'SupportScreen',
  },
];

const Cta =  () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {data.map(({ id, Icon, iconName, text, page }) => (
        <TouchableHighlight
          key={id}
          style={styles.button}
          underlayColor="#D32F2F"
          onPress={() => navigation.navigate(page)}>

          <View style={styles.inner}>
            <Icon name={iconName} size={24} color="#FFFFFF" />
            <Text style={styles.text}>{text}</Text>
          </View>
          
        </TouchableHighlight>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#212121',
    borderRadius: 10,
  },
  button: {
    borderRadius: 8,
  },
  inner: {
    alignItems: 'center',
    padding: 8,
  },
  text: {
    marginTop: 10,
    fontSize: 12,
    color: '#FFFFFF'
  },
});

export default Cta;