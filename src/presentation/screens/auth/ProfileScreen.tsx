import { Button, Text, View } from "react-native";

const ProfileScreen = ({ navigation }: any) => {
     return (
          <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
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
                         PAGINA DE PERFIL
                    </Text>
                    <Button
                         title="Go to Settings Page"
                         onPress={() => navigation.navigate('settings')}
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

export default ProfileScreen