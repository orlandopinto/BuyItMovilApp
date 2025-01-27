import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { LoginScreen, RegisterScreen, ResetPasswordScreen, SplashScreen } from '../screens/authScreens';

const Stack = createNativeStackNavigator();

const AuthorizedStack = ({ navigation }: any) => {
     return (
          <Stack.Navigator initialRouteName='splashScreen'>
               <Stack.Screen name="splashScreen" component={SplashScreen} options={{ headerShown: false }} />
               <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
               <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
               <Stack.Screen name="resetPassword" component={ResetPasswordScreen} options={{ headerShown: false, }} />
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