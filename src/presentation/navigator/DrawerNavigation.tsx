import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import AlertsScreen from '../screens/alerts/AlertsScreen';
import { DashboardScreen, LoginScreen, ProfileScreen, RegisterScreen, ResetPasswordScreen, StartScreen } from '../screens/auth';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

export type RootDrawerParams = {
     start: typeof StartScreen;
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
          <NavigationContainer>
               <Drawer.Navigator initialRouteName='start'
                    // drawerContent={(props) => <DrawerContent {...props} />}
               >
                    <Drawer.Screen name="start" component={StartScreen} options={{ drawerItemStyle: { display: 'none' } }} />
                    <Drawer.Screen name="login" component={LoginScreen} options={{ drawerItemStyle: { display: 'none' } }} />
                    <Drawer.Screen name="register" component={RegisterScreen} options={{ drawerItemStyle: { display: 'none' } }} />
                    <Drawer.Screen name="resetPassword" component={ResetPasswordScreen} options={{ drawerItemStyle: { display: 'none' } }} />
                    <Drawer.Screen name="home" component={HomeScreen} />
                    <Drawer.Screen name="dashboard" component={DashboardScreen} />
                    <Drawer.Screen name="profile" component={ProfileScreen} />
                    <Drawer.Screen name="alerts" component={AlertsScreen} />
                    <Drawer.Screen name="settings" component={SettingsScreen} />
               </Drawer.Navigator>
          </NavigationContainer>
     );
};

const DrawerContent = ({ navigation }: any) => {
     return (
          <DrawerContentScrollView style={{ backgroundColor: '#e0e0e0' }}>
               <View>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('home')}>
                         <Text>Home</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                         <Text>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('settings')}>
                         <Text>Settings</Text>
                    </TouchableOpacity>
               </View>

          </DrawerContentScrollView>
     )
}

export default DrawerNavigation;