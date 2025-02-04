import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../config/theme/theme';
import { AuthProvider } from '../../providers/AuthProvider';
import DrawerHeader from '../components/sidebar/DrawerHeader';
import DrawerItems from '../components/sidebar/DrawerItems';
import Logo from '../components/ui/Logo';
import { SplashScreen } from '../screens/authScreens';

export type RootDrawerParams = {
     splash: typeof SplashScreen;
     login: undefined;
     register: undefined;
     resetPassword: undefined;
     home: undefined;
     dashboad: undefined;
     alerts: undefined;
     profile: undefined;
     settings: undefined;
}

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
     return (
          <AuthProvider>
               <NavigationContainer>
                    <Drawer.Navigator initialRouteName='splash'
                         screenOptions={{
                              //drawerActiveBackgroundColor: 'orange',
                              // drawerStyle: {
                              //      backgroundColor: '#fff',
                              //      width: 300,
                              // },
                              // headerStyle: {
                              //      backgroundColor: '#red',
                              // },
                              // headerTintColor: '#000',
                              // drawerLabelStyle: {
                              //      color: '#000',
                              //      fontSize: 14,
                              // },
                              header: (props) => (
                                   <DrawerHeader title="" onPress={() => props.navigation.toggleDrawer()} />
                              )

                         }}
                         drawerContent={
                              (props) => {
                                   return (
                                        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                                             <View style={styles.logo}>
                                                  <Logo />
                                             </View>
                                             <DrawerContentScrollView {...props}>
                                                  <DrawerItemList {...props} />
                                             </DrawerContentScrollView>
                                             <TouchableOpacity
                                                  onPress={() => props.navigation.navigate('login')}
                                                  style={styles.container}
                                             >
                                                  <View style={styles.iconContainer}>
                                                       <Icon name='log-out-outline' size={30} style={styles.icon} />
                                                       <Text style={{ color: 'white' }}>Logout out</Text>
                                                  </View>
                                             </TouchableOpacity>

                                        </SafeAreaView>
                                   )
                              }
                         }
                    >
                         {
                              DrawerItems.map((item, index) => {
                                   return (
                                        <Drawer.Screen
                                             key={index}
                                             name={item.name}
                                             component={item.component}
                                             options={{
                                                  ...item.options,
                                                  drawerItemStyle: {
                                                       ...item.options?.drawerItemStyle,
                                                       display: item.options?.drawerItemStyle?.display === 'none' ? 'none' : 'flex'
                                                  },

                                             }}
                                        />
                                   )
                              })
                         }
                    </Drawer.Navigator >
               </NavigationContainer>
          </AuthProvider>
     );
};

const styles = StyleSheet.create({
     logo: {
          justifyContent: 'center',
          height: 200,
          alignItems: 'center',
     },
     container: {
          flexDirection: 'row',
          height: 50,
          width: 'auto',
          justifyContent: 'space-around',
          backgroundColor: colors.primary,
          margin: 10,
     },
     iconContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
     },
     icon: {
          paddingRight: 10,
          color: 'white',
     },
     footer: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          position: 'absolute',
          bottom: 0,
     }
});

export default DrawerNavigation;