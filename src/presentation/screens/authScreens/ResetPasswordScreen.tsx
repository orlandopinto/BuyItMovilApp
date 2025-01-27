import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../../config/theme/theme'
import { emailValidator } from '../../../helpers/emailValidator'
import { BackButton, Background, CustomButton, CustomHeader, CustomTextInput, Logo } from '../../components/ui'

export default function ResetPasswordScreen({ navigation }: any) {
     const [email, setEmail] = useState({ value: '', error: '' })

     const sendResetPasswordEmail = () => {
          const emailError = emailValidator(email.value)
          if (emailError) {
               setEmail({ ...email, error: emailError })
               return
          }
          navigation.navigate('login')
     }

     return (
          <Background>
               <BackButton goBack={() => navigation.navigate('login')} />
               <View style={globalStyles.imageContainer} collapsable={false}>
                    <Logo />
               </View>
               <View style={globalStyles.centerContext} collapsable={false}>
                    <CustomHeader>Restaurar contraseña</CustomHeader>
               </View>
               <CustomTextInput
                    icon={'mail-outline'}
                    placeholder="Correo electrónico"
                    autoCorrect={true}
                    autoCapitalize="none"
                    autoComplete="email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: '' })}
               />
               <View style={globalStyles.row}>
                    <Text style={styles.text}>Recibirá un correo electrónico con un enlace para restablecer la contraseña. </Text>
               </View>
               <CustomButton variant='primary' title={'Enviar instrucciones'} onPress={() => navigation.navigate('login')} />
          </Background>
     )
}

const styles = StyleSheet.create({
     text: {
          fontSize: 17
          //color: theme.colors.primary,
     },
})