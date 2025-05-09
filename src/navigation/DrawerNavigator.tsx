import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { View, Text } from 'react-native';

import BottomTabs from './BottomTabs';

import DrawerNav from '~/components/UI/DrawerNav';
import KycScreen from '~/screens/KycScreen';
import PricingScreen from '~/screens/PricingScreen';
import { Colors } from '~/theme/theme';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTabs"
      drawerContent={(props) => <DrawerNav {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 280, 
          backgroundColor: Colors.background,
        },
        drawerActiveBackgroundColor: Colors.secondary,
        drawerActiveTintColor: Colors.white,
      }}>
      <Drawer.Screen name="HomeTabs" component={BottomTabs} />
      <Drawer.Screen name="Kyc" component={KycScreen} />
      <Drawer.Screen name="Pricing" component={PricingScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import React from 'react';
// import { DrawerContentScrollView } from '@react-navigation/drawer';
// import { FontAwesome } from '@expo/vector-icons';
// import { Colors, Spacing } from '~/theme/theme';

// const DrawerNav = (props: any) => {
//   const currentRoute = props?.state?.routeNames?.[props.state.index] || '';

//   const drawerItems = [
//     { label: 'Dashboard', route: 'HomeTabs' },
//     { label: 'KYC', route: 'Kyc' },
//     { label: 'Pricing', route: 'Pricing' },
//     { label: 'Developers API', route: '/' },
//   ];

//   return (
//     <DrawerContentScrollView
//       {...props}
//       contentContainerStyle={{ flex: 1, justifyContent: 'space-between', padding: Spacing.lg }}
//     >
//       <View style={{ alignItems: 'center', marginTop: Spacing.lg }}>
//         <FontAwesome
//           name="user"
//           size={30}
//           color="white"
//           style={{
//             backgroundColor: Colors.secondary,
//             padding: Spacing.lg,
//             borderRadius: Spacing.xs,
//             marginBottom: Spacing.sm,
//           }}
//         />
//         <Text style={{ color: Colors.primaryText }}>Plan: Customer</Text>
//       </View>

//       <View>
//         {drawerItems.map((item) => {
//           const isActive = currentRoute === item.route;
//           return (
//             <TouchableOpacity
//               key={item.route}
//               onPress={() => props.navigation.navigate(item.route)}
//               style={[
//                 styles.drawerItem,
//                 isActive && { backgroundColor: Colors.secondary },
//               ]}
//             >
//               <Text style={[styles.drawerText, isActive && { color: Colors.white }]}>
//                 {item.label}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>

//       <View style={{ padding: Spacing.lg, gap: Spacing.md }}>
//         <TouchableOpacity>
//           <Text style={{ color: Colors.primaryText }}>Toggle Theme</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={{ color: Colors.primaryText }}>Logout</Text>
//         </TouchableOpacity>
//         <Text style={{ color: Colors.mutedText }}>Version 1.0.0</Text>
//       </View>
//     </DrawerContentScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   drawerItem: {
//     paddingVertical: Spacing.sm,
//     paddingHorizontal: Spacing.md,
//     borderRadius: Spacing.sm,
//     marginBottom: Spacing.sm,
//   },
//   drawerText: {
//     fontSize: 16,
//     color: Colors.primaryText,
//   },
// });

// export default DrawerNav;
