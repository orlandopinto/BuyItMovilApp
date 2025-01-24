import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { globalStyles } from "../../../config/theme/theme"
import { Background, CustomButton, CustomHeader, CustomTextInput, Logo } from "../../components/ui"
import Icon from "react-native-vector-icons/Ionicons"

// import { emailValidator } from "../../../helpers/emailValidator"
// import { nameValidator } from "../../../helpers/nameValidator"
// import { passwordValidator } from "../../../helpers/passwordValidator"

export default function RegisterScreen({ navigation }: any) {
     const [name, setName] = useState({ value: '', error: '' })
     const [email, setEmail] = useState({ value: '', error: '' })
     const [password, setPassword] = useState({ value: '', error: '' })

     const onSignUpPressed = () => {
          // const nameError = nameValidator(name.value)
          // const emailError = emailValidator(email.value)
          // const passwordError = passwordValidator(password.value)
          // if (emailError || passwordError || nameError) {
          //      setName({ ...name, error: nameError })
          //      setEmail({ ...email, error: emailError })
          //      setPassword({ ...password, error: passwordError })
          //      return
          // }
     }

     return (
          <Background>
               <View style={globalStyles.imageContainer} collapsable={false}>
                    <Logo />
               </View>
               <View style={globalStyles.centerContext} collapsable={false}>
                    <CustomHeader>Crear una cuenta</CustomHeader>
               </View>
               <Icon name="airplane-outline" size={30} />
               <CustomTextInput
                    icon={'terminal-outline'}
                    placeholder="Nombre de usuario"
                    autoCorrect={true}
                    autoCapitalize="none"
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: '' })}
               />
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
               <CustomButton variant='primary' title={'Registrarse'} onPress={() => navigation.navigate('home')} />
               <View style={globalStyles.row}>
                    <Text style={styles.text}>¿Tienes una cuenta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                         <Text style={styles.link}>Inicia sesión</Text>
                    </TouchableOpacity>
               </View>
          </Background>
     )
}

const styles = StyleSheet.create({
     imageContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0,
          height: 150,
          width: 'auto'
     },
     link: {
          fontWeight: 'bold',
          fontSize: 17
          //color: theme.colors.primary,
     },
     text: {
          fontSize: 17
          //color: theme.colors.primary,
     },
})