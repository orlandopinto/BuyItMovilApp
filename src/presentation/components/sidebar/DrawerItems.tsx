import React from "react";
import { Button, View } from 'react-native';
import CustomIcons from "../../icons/CustomIcons";
import BottomTabNavigation from "../../navigator/BottomTabNavigation";
import { SettingsScreen } from "../../screens/appScreens";
import DetailsProductScreen from '../../screens/appScreens/DetailsProductScreen';
import { LoginScreen, RegisterScreen, ResetPasswordScreen, SplashScreen } from "../../screens/authScreens";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import { BackButton } from "../ui";

export default [
     {
          name: 'home',
          component: BottomTabNavigation,
          options: {
               drawerLabel: 'home',
               title: 'home',
               headerShadowVisible: false,
               drawerItemStyle: { borderRadius: 5 },
               drawerIcon: () => <CustomIcons name='home' />,
          }
     },
     {
          name: 'splash',
          component: SplashScreen,
          options: {
               headerShown: false,
               drawerItemStyle: { display: 'none', borderRadius: 5 },
          }
     },
     {
          name: 'login',
          component: LoginScreen,
          options: {
               headerShown: false,
               drawerItemStyle: { display: 'none', borderRadius: 5 },
          }
     },
     {
          name: 'register',
          component: RegisterScreen,
          options: {
               headerShown: false,
               drawerItemStyle: { display: 'none', borderRadius: 5 },
          }
     },
     {
          name: 'resetPassword',
          component: ResetPasswordScreen,
          options: {
               headerShown: false,
               drawerItemStyle: { display: 'none', borderRadius: 5 },
          }
     },
     {
          name: 'settings',
          component: SettingsScreen,
          options: {
               drawerLabel: 'settings',
               title: 'settings',
               headerShadowVisible: false,
               drawerItemStyle: { borderRadius: 5 },
               drawerIcon: () => <CustomIcons name='settings' />
          }
     },
     {
          name: 'detailsproduct',
          component: DetailsProductScreen,
          options: {
               headerShown: true,
               drawerItemStyle: { display: 'none', borderRadius: 5 },
               header: () => {
                    const navigation = useNavigation();
                    return (
                         <View>
                              <BackButton goBack={() => navigation.navigate('home')} />
                         </View>
                    );
               },
          },
     },
]