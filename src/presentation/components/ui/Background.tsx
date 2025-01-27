import React from 'react';
import { ImageBackground, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { colors } from '../../../config/theme/theme';

type Props = { children: React.ReactNode }

const Background = ({ children }: Props) => {
     return (
          <ImageBackground source={require('../../assets/background_dot.png')} resizeMode="repeat" style={styles.background}>
               <KeyboardAvoidingView style={styles.container} behavior="padding">
                    {children}
               </KeyboardAvoidingView>
          </ImageBackground>
     )
}

const styles = StyleSheet.create({
     background: {
          flex: 1,
          width: '100%',
          backgroundColor: colors.background,
          paddingBottom: 90
     },
     container: {
          flex: 1,
          padding: 20,
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
     },
})

export default Background