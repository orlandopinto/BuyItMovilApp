import React from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../../../config/theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
     value: string
     onChangeText: (text: string) => void
     placeholder?: string
     icon?: string
     autoCorrect?: boolean
     autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
     autoComplete?: any
     keyboardType?: KeyboardTypeOptions | undefined;
     textContentType?: any
     secureTextEntry?: boolean | undefined;
}

export default function CustomTextInput({ value, onChangeText, secureTextEntry, placeholder, autoCorrect, autoCapitalize, autoComplete, keyboardType, textContentType, icon, ...props }: Props) {
     return (
          <View style={styles.container}>

               <TextInput
                    style={[
                         styles.inputContainerStyle,
                         styles.inputStyle,
                         styles.leftIconContainerStyle,
                    ]}
                    placeholder={placeholder}
                    selectionColor={colors.text}
                    autoCorrect={autoCorrect}
                    autoCapitalize={autoCapitalize}
                    autoComplete={autoComplete}
                    keyboardType={keyboardType}
                    textContentType={textContentType}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    onChangeText={onChangeText}
                    {...props}
               />
               {
                    icon
                         ?
                         <Ionicons
                              name={icon}
                              color='#000'
                              size={30}
                              style={styles.icon}
                         />
                         :
                         null
               }

          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          width: '100%',
          marginVertical: 4,
     },
     inputContainerStyle: {
          marginLeft: 10,
     },
     inputStyle: {
          minHeight: 50,
          borderWidth: 1,
          borderColor: '#e0e0e0',
          backgroundColor: '#fff',
          fontSize: 17
     },
     leftIconContainerStyle: {
          marginRight: 10,
          paddingLeft: 50,
          paddingTop: 0,
          paddingBottom: 0,
          marginVertical: 0,
          marginHorizontal: 0,
          height: undefined,
     },
     icon: {
          position: 'absolute',
          left: 18,
          top: 11,
          opacity: .5
     }
})