import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { LoginScreen, RegisterScreen, ResetPasswordScreen, StartScreen } from '../screens/auth';

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

// const DrawerNav = () => {
//      return (
//           <Drawer.Navigator initialRouteName='profile'>
//                <Drawer.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }} />
//                <Drawer.Screen name="dashboard" component={DashboardScreen} />
//                <Drawer.Screen name="settings" component={SettingsScreen} options={{ headerShown: false }} />
//                <Drawer.Screen name="alerts" component={AlertsScreen} options={{ headerShown: false, }} />
//           </Drawer.Navigator>
//      );
// };

const AuthorizedStack = ({ navigation }: any) => {
     return (
          <Stack.Navigator initialRouteName='startScreen'>
               <Stack.Screen name="startScreen" component={StartScreen} options={{ headerShown: false }} />
               <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
               <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
               <Stack.Screen name="resetPassword" component={ResetPasswordScreen} options={{ headerShown: false, }} />
               {/* <Stack.Screen
                    name="home"
                    component={DrawerNav}
                    options={{ headerShown: false }}
               /> */}
          </Stack.Navigator>
     );
};

const Navigator = () => {
     return (
          <NavigationContainer>
               <AuthorizedStack />
          </NavigationContainer>
     )
}

export default Navigator