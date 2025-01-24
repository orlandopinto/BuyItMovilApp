import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';
import { Background, CustomButton, CustomHeader, Logo, Paragraph } from '../../components/ui';

export default function StartScreen({ navigation }: any) {
     return (
          <Background>
               <View style={globalStyles.imageContainer} collapsable={false}>
                    <Logo />
               </View>
               <View style={globalStyles.centerContext} collapsable={false}>
                    <CustomHeader>Acceso</CustomHeader>
               </View>
               <Paragraph>
                    La forma más fácil de empezar con tu increíble aplicación.
               </Paragraph>
               <CustomButton variant='primary' title={'Iniciar sesión'} onPress={() => navigation.navigate('login')} />
               <CustomButton variant='secondary' title={'Regístrate'} onPress={() => navigation.navigate('register')} />
          </Background>
     )
}