import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomTabNavigation from "./BottomTabNavigation";

const Stack = createStackNavigator();

const AppNavigation = () => {
     return (
          <GestureHandlerRootView style={{ flex: 1 }}>
               <NavigationContainer>
                    <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}                    >
                         <Stack.Screen name="Main" component={BottomTabNavigation} />
                    </Stack.Navigator>
               </NavigationContainer>
          </GestureHandlerRootView>
     )
}

export default AppNavigation