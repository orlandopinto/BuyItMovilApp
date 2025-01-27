import React from "react";
import { Button, Text, View } from "react-native";
import { Background, CustomButton } from "../../components/ui";

const ProfileScreen = ({ navigation }: any) => {
     return (
          <Background>
               <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 16 }}>
                         PAGINA DE PERFIL
                    </Text>
                    <CustomButton variant='primary' title={'Go to  Alerts'} onPress={() => navigation.navigate('alerts')} buttonWidth="100%" />
                    <CustomButton variant='primary' title={'Go to dashboard'} onPress={() => navigation.navigate('dashboard')} buttonWidth="100%" />
                    <CustomButton variant='primary' title={'Go to Settings'} onPress={() => navigation.navigate('settings')} buttonWidth="100%" />
               </View>
               <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
                    React Navigate Drawer
               </Text>
               <Text
                    style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
                    www.aboutreact.com
               </Text>
          </Background>
     );
};

export default ProfileScreen