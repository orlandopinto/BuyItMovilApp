import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../../../config/theme/theme'
import { useAuth } from '../../../providers/AuthProvider'
import { user } from '../../../types/user.type'
import { Background, CustomButton, CustomHeader, CustomTextInput, Logo } from '../../components/ui'

export default function LoginScreen({ navigation }: any) {
     const { user, setUser } = useAuth();

     const [email, setEmail] = useState({ value: '', error: '' })
     const [password, setPassword] = useState({ value: '', error: '' })

     const onLoginPressed = () => {
          // const emailError = emailValidator(email.value)
          // const passwordError = passwordValidator(password.value)
          // if (emailError || passwordError) {
          //      setEmail({ ...email, error: emailError })
          //      setPassword({ ...password, error: passwordError })
          //      return
          // }
          const currentUser: user = { name: 'Orlando Pinto', email: 'opinto@gmail.com', isLogged: true }
          setUser(currentUser)
          console.log('user: ', user)
          navigation.navigate('home')
     }

     return (
          <Background>
               <View style={globalStyles.imageContainer} collapsable={false}>
                    <Logo />
               </View>
               <View style={globalStyles.centerContext} collapsable={false}>
                    <CustomHeader>Bienvenid@</CustomHeader>
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
               <CustomTextInput
                    placeholder="Contraseña"
                    icon="code-working-outline"
                    autoCapitalize="none"
                    value={password.value}
                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                    secureTextEntry
               />
               <View style={styles.forgotPassword} collapsable={false}>
                    <TouchableOpacity onPress={() => navigation.navigate('resetPassword')}>
                         <Text style={styles.text}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
               </View>
               <CustomButton variant='primary' title={'Iniciar sesión'} onPress={() => navigation.navigate('home')} buttonWidth='100%' />
               <View style={globalStyles.row}>
                    <Text style={styles.text}>¿Tienes una cuenta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('register')}>
                         <Text style={styles.link}>Regístrate</Text>
                    </TouchableOpacity>
               </View>
          </Background>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
     },
     forgotPassword: {
          alignItems: 'flex-end',
          marginHorizontal: 11,
          marginTop: 5,
          marginBottom: 16,
     },
     forgot: {
          justifyContent: 'flex-end',
     },
     text: {
          fontSize: 17,
     },
     link: {
          fontSize: 17,
          fontWeight: 'bold',
     }
})