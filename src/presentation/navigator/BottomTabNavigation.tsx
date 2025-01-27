import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Platform, View } from 'react-native';
import { colors } from '../../config/theme/theme';
import ImageIcons from '../icons/ImageIcons';
import { AlertsScreen, DashboardScreen, ProfileScreen, HomeScreen, SearchScreen } from '../screens/appScreens';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerHeader from '../components/sidebar/DrawerHeader';

const Tab = createBottomTabNavigator();

const screenOption = {
     tabBarShowLabel: false,
     headerShown: false,
     tabBarStyle: {
          position: "absolute" as "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 90 : 60,
          backgroundColor: 'white',
          paddingTop: 10
     },

}

const BottomTabNavigation = () => {
     return (
          <Tab.Navigator screenOptions={screenOption}>
               <Tab.Screen name="Home"
                    component={HomeScreen}
                    options={{
                         tabBarIcon: ({ focused }) => {
                              return (
                                   <Image
                                        source={focused ? ImageIcons.home : ImageIcons.homeOutline}
                                        resizeMode='contain'
                                        style={{
                                             height: 30,
                                             width: 30,
                                             tintColor: focused ? colors.primary : 'black'
                                        }}
                                   />
                              )
                         }
                    }}
               />
               <Tab.Screen name="dashboard"
                    component={DashboardScreen}
                    options={{
                         tabBarIcon: ({ focused }) => {
                              return (
                                   <Image
                                        source={focused ? ImageIcons.dashboard : ImageIcons.dashboardOutline}
                                        resizeMode='contain'
                                        style={{
                                             height: 25,
                                             width: 25,
                                             tintColor: focused ? colors.primary : 'black'
                                        }}
                                   />
                              )
                         }
                    }}
               />
               <Tab.Screen name="search"
                    component={SearchScreen}
                    options={{
                         tabBarIcon: () => {
                              return (
                                   <View
                                        style={{
                                             alignItems: 'center',
                                             justifyContent: 'center',
                                             backgroundColor: colors.primary,
                                             height: Platform.OS === 'ios' ? 70 : 60,
                                             width: Platform.OS === 'ios' ? 70 : 60,
                                             top: Platform.OS === 'ios' ? -20 : -30,
                                             borderRadius: Platform.OS === 'ios' ? 35 : 30,
                                             borderWidth: 2,
                                             borderColor: 'white',
                                        }}>
                                        <Icon name='search-outline' size={25} color='white' />
                                   </View>
                              )
                         }
                    }}
               />
               <Tab.Screen name="alerts"
                    component={AlertsScreen}
                    options={{
                         tabBarIcon: ({ focused }) => {
                              return (
                                   <Image
                                        source={focused ? ImageIcons.alert : ImageIcons.alertOutline}
                                        resizeMode='contain'
                                        style={{
                                             height: 30,
                                             width: 30,
                                             tintColor: focused ? colors.primary : 'black'
                                        }}
                                   />
                              )
                         }
                    }}
               />
               <Tab.Screen name="profile"
                    component={ProfileScreen}
                    options={{
                         tabBarIcon: ({ focused }) => {
                              return (
                                   <Image
                                        source={focused ? ImageIcons.profile : ImageIcons.profileOutline}
                                        resizeMode='contain'
                                        style={{
                                             height: 25,
                                             width: 25,
                                             tintColor: focused ? colors.primary : 'black'
                                        }}
                                   />
                              )
                         }
                    }}
               />
          </Tab.Navigator>
     )
}
export default BottomTabNavigation