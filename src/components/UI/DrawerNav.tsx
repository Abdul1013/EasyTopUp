import { FontAwesome } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem, DrawerContent } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';

import { Colors, Spacing } from '~/theme/theme';

const DrawerNav = (props: any) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, justifyContent: 'space-between', padding: Spacing.lg }}>
      <View style={{ marginTop: Spacing.lg, alignItems: 'center' }}>
        <FontAwesome
          name="user"
          size={30}
          color={Colors.white}
          style={{
            backgroundColor: Colors.secondary,
            padding: Spacing.lg,
            borderRadius: Spacing.xs,
            marginBottom: Spacing.sm,
          }}
        />
        <Text>Plan: Customer</Text>
      </View>

      <View>
        <DrawerItem label="Dasboard" onPress={() => props.navigation.navigate('Home')} />
        <DrawerItem label="Kyc" onPress={() => props.navigation.navigate('Kyc')} />
        <DrawerItem label="Pricing" onPress={() => props.navigation.navigate('Pricing')} />
        <DrawerItem label="Developers API" onPress={() => props.navigation.navigate('/')} />
      </View>

      <View style={{ padding: Spacing.lg, gap: Spacing.md, alignItems: 'flex-start' }}>
        <TouchableOpacity>
          <Text>Toggle Theme </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Logout</Text>
        </TouchableOpacity>
        <Text> Version 1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerNav;
