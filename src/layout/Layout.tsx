import React, { Children } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';





type LayoutProps = {
  children: React.ReactNode;
  scroll?: boolean;
  showHeader?: boolean;
  showMenu?: boolean;
};

const Layout = ({ children, scroll=false, showHeader = true, showMenu = true }: LayoutProps) => {
  const navigation = useNavigation();
  const Wrapper = scroll ? ScrollView : View 

  return (
    <SafeAreaView className='flex-1 bg-[#fff]'>
      {showHeader && (
        <View className='h-[60px] px-44 flex-row items-center border-spacing-2 '>
          {showMenu && (
            <TouchableOpacity 
            // onPress={() => navigation.openDrawer()}
            >
              <Ionicons name="menu" size={24} color="black" className="bg-red-700" />
            </TouchableOpacity>
          )}
          <View>
            <MaterialCommunityIcons name="credit-card-scan-outline" size={24} color="black" />
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>
        </View>
      )}
         {React.createElement(Wrapper, { style: { flex: 1, padding: 16 } }, children)}
    </SafeAreaView>
  );
};

export default Layout;