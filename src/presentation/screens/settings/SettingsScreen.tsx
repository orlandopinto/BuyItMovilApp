import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { RootStackParams } from '../../navigator/StackNavigation';

interface Props extends StackScreenProps<RootStackParams, 'settings'> { }

const SettingsScreen = ({ navigation }: any) => {
     return (
          <View style={{ flex: 1, padding: 16 }}>
               <View
                    style={{
                         flex: 1,
                         alignItems: 'center',
                         justifyContent: 'center',
                    }}>
                    <Text
                         style={{
                              fontSize: 25,
                              textAlign: 'center',
                              marginBottom: 16
                         }}>
                         ESTA ES LA PAGINA DE SETTINGS
                    </Text>
                    <Button
                         title="Go to Profile Page"
                         onPress={() => navigation.navigate('profile')}
                    />
                    <Button
                         title="openDrawer"
                         onPress={() => navigation.openDrawer()}
                    />
               </View>
               <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
                    React Navigate Drawer
               </Text>
               <Text
                    style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
                    www.aboutreact.com
               </Text>
          </View>
     );
};
export default SettingsScreen;