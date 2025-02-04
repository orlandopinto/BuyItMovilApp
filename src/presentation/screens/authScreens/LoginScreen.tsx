import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../../../config/theme/theme';
import { AuthProfile } from '../../../domain/entities/AuthProfile';
import { CustomError } from '../../../domain/entities/CustomError';
import { emailValidator } from '../../../helpers/emailValidator';
import { passwordValidator } from '../../../helpers/passwordValidator';
import { TokenResult } from '../../../domain/entities/TokenResult';
import { User } from '../../../domain/entities/User';
import AccountController from '../../../infrastructure/controllers/AccountController';
import { LoginViewModel } from '../../../infrastructure/models/LoginViewModel';
import { useAuth } from '../../../providers/AuthProvider';
import { encrypt } from '../../../utils/EncryptDecryptManager';
import { Background, CustomButton, CustomHeader, CustomTextInput, Logo } from '../../components/ui';
import BottomSheet from '../../components/ui/BottomSheet';

export default function LoginScreen({ navigation }: any) {
     const { setAuthProfile } = useAuth();

     const [email, setEmail] = useState({ value: 'javier@gmail.com', error: '' })
     const [apiError, setApiError] = useState('')
     const [password, setPassword] = useState({ value: '123456', error: '' })
     const refBottomSheet = useRef<any>();
     const emailError = emailValidator(email.value)
     const passwordError = passwordValidator(password.value)

     const onLoginPressed = async () => {
          if (emailError || passwordError) {
               setEmail({ ...email, error: emailError })
               setPassword({ ...password, error: passwordError })
               refBottomSheet.current.open()
               return
          }
          const loginViewModel: LoginViewModel = { id: uuid.v4(), email: email.value, password: encrypt(password.value) }
          await Login(loginViewModel)

     }

     const Login = async (loginViewModel: LoginViewModel) => {
          const controller = new AccountController()
          const tokenResult: TokenResult = {
               accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJkNWVhZDcwMy03MWM3LTQ5NGYtODgxMS0yYjBjMTkxMTU0MGIiLCJ1bmlxdWVfbmFtZSI6ImphdmllckBnbWFpbC5jb20iLCJuYmYiOjE3Mzg1ODk4MTEsImV4cCI6MTczODU5MDcxMSwiaWF0IjoxNzM4NTg5ODExfQ.UIEul1OapEMnwt8LtbV_mC3BDW-bEhYaXFUCVhkrHos",
               refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJkNWVhZDcwMy03MWM3LTQ5NGYtODgxMS0yYjBjMTkxMTU0MGIiLCJ1bmlxdWVfbmFtZSI6ImphdmllckBnbWFpbC5jb20iLCJuYmYiOjE3Mzg1ODk4MTEsImV4cCI6MTczODU5MDcxMSwiaWF0IjoxNzM4NTg5ODExfQ.h1zhTSTlebCpo58jmZF8I0XrpyVvzrg8MANAfenK5xM"
          }

          await controller.Login(loginViewModel).then(data => {
               const result = data.filter(f => f.email === loginViewModel.email)[0] as unknown as User
               if (result.passwordHash !== loginViewModel.password) {
                    setApiError('Usuario o contraseña invalida.');
                    refBottomSheet.current.open()
                    return
               }
               const user: AuthProfile = {
                    userName: result.userName as string,
                    email: loginViewModel.email as string,
                    fullName: `${result.firstName} ${result.lastName}` as string,
                    isAuthenticated: true,
                    tokenResult: tokenResult
               }
               setAuthProfile(user);
               navigation.navigate('home')
          }).catch(err => {
               const error = err as CustomError
               setApiError(error.message);
               refBottomSheet.current.open()
          });
     }

     return (
          <Background>
               <View style={globalStyles.imageContainer} collapsable={false}>
                    <Logo />
               </View>
               <View style={globalStyles.centerContext} collapsable={false}>
                    <CustomHeader style={{ fontSize: 22, paddingBottom: 10 }}>Bienvenid@</CustomHeader>
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
               <CustomButton variant='primary' title={'Iniciar sesión'} onPress={onLoginPressed} buttonWidth='100%' />
               <View style={globalStyles.row}>
                    <Text style={styles.text}>¿Tienes una cuenta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('register')}>
                         <Text style={styles.link}>Regístrate</Text>
                    </TouchableOpacity>
               </View>
               <BottomSheet bottomSheetRef={refBottomSheet} >
                    <View style={styles.container}>
                         <View>
                              <Icon name='warning-outline' size={100} color={'orange'} />
                         </View>
                         <View style={styles.container}>
                              <Text style={styles.errorText}>{apiError}</Text>
                         </View>
                         <CustomButton variant='primary' title={'Cerrar'} onPress={() => refBottomSheet.current.close()} buttonWidth='100%' />
                    </View>
               </BottomSheet>
          </Background>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          textAlign: 'center'
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
     errorText: {
          fontSize: 17,
          fontWeight: 'bold',
          color: 'gray',
          width: 250,
          textAlign: 'center',
     },
     link: {
          fontSize: 17,
          fontWeight: 'bold',
     }
})