import { createStackNavigator } from "@react-navigation/stack";
import { DashboardScreen, ProfileScreen } from "../screens/auth";
import SettingsScreen from "../screens/settings/SettingsScreen";
import AlertsScreen from "../screens/alerts/AlertsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createStackNavigator();

const AppNavigation = () => {
     return (
          <GestureHandlerRootView style={{ flex: 1 }}>
               <NavigationContainer>
                    <Stack.Navigator
                         initialRouteName='Main'
                         screenOptions={{ headerShown: false }}
                    >
                         <Stack.Screen name="Main" component={DrawerNavigation} />
                    </Stack.Navigator>
               </NavigationContainer>
          </GestureHandlerRootView>
     )
}

export default AppNavigation