import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { Children } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

type LayoutProps = {
  children: React.ReactNode;
  scroll?: boolean;
  showHeader?: boolean;
  showMenu?: boolean;
};

const Layout = ({ children, scroll = false, showHeader = true, showMenu = true }: LayoutProps) => {
  const navigation = useNavigation();
  const Wrapper = scroll ? ScrollView : View;

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1 }}>
      {showHeader && (
        <View
          className="flex-column flex  h-[60px]  border-spacing-2 items-center bg-yellow-600 px-44 "
          style={style.navHeader}>
          {showMenu && (
            <TouchableOpacity onPress={() => openDrawer()}>
              <Ionicons name="menu" size={30} color="black" />
            </TouchableOpacity>
          )}
          <View style={style.otherNav}>
            <MaterialCommunityIcons name="credit-card-scan-outline" size={30} color="black" />
            <Ionicons name="notifications-outline" size={30} color="black" />
          </View>
        </View>
      )}
      {React.createElement(Wrapper, { style: { flex: 1, padding: 5 } }, children)}

    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  navHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    padding: 10,
  },
  otherNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    rowGap: 100,
  },
});
export default Layout;
