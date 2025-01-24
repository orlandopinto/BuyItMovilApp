import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ButtonVariant, Variant } from '../../../config/theme/theme';

interface Props {
     variant?: ButtonVariant;
     title: string;
     onPress: any
}

export default function CustomButton({ variant = "primary", title, onPress, ...props }: Props) {
     let extractColor: string = ''
     switch (variant) {
          case 'primary':
               extractColor = Variant.primary
               break;

          case 'secondary':
               extractColor = Variant.secondary
               break;

          case 'danger':
               extractColor = Variant.danger
               break;

          default:
               extractColor = Variant.primary
               break;
     }

     return (

          <View style={{ ...styles.container }} collapsable={false} >
               <Pressable style={({ pressed }) => [
                    {
                         backgroundColor: pressed ? '#3F8f7F' : extractColor,
                    }, styles.button]}
                    onPress={onPress}
                    {...props}
               >
                    <Text style={styles.text}>{title}</Text>
               </Pressable>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 5
     },
     button: {
          width: '100%',
          height: 50,

          marginVertical: 10,
          paddingVertical: 2,
          verticalAlign: 'middle',
          justifyContent: 'center',
          borderRadius: 3,
     },
     text: {
          color: '#fff',
          width: '100%',
          fontWeight: 'bold',
          fontSize: 20,
          lineHeight: 26,
          textAlign: 'center'
     },
})