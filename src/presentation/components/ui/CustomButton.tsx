import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ButtonVariant, Variant } from '../../../config/theme/theme';

interface Props {
     variant?: ButtonVariant;
     title: string;
     onPress: any;
     icon?: string;
     iconPosition?: 'left' | 'right' | string;
     buttonWidth?: 'auto' | '100%' | string;
}

export default function CustomButton({ variant = "primary", title, onPress, icon, iconPosition = 'left', buttonWidth = 'auto', ...props }: Props) {
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
                         borderRadius: 3,
                         boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)',
                    }]}
                    onPress={onPress}
                    {...props}
               >
                    <View style={{ ...styles.button, width: buttonWidth === 'auto' ? 'auto' : '100%' }}>
                         {
                              icon === undefined
                                   ?
                                   <View style={{ ...styles.buttonContainer, width: buttonWidth === 'auto' ? 'auto' : '100%' }}>
                                        <Text style={styles.text}>{title}</Text>
                                   </View>
                                   :
                                   iconPosition === 'left'
                                        ?
                                        (
                                             <View style={{ ...styles.buttonContainer, width: buttonWidth === 'auto' ? 'auto' : '100%' }}>
                                                  <Icon name={icon} size={30} color="#fff" style={{ marginRight: 5 }} />
                                                  <Text style={styles.text}>{title}</Text>
                                             </View>
                                        )
                                        :
                                        (
                                             <View style={{ ...styles.buttonContainer, width: buttonWidth === 'auto' ? 'auto' : '100%' }}>
                                                  <Text style={styles.text}>{title}</Text>
                                                  <Icon name={icon} size={30} color="#fff" style={{ marginLeft: 5 }} />
                                             </View>
                                        )
                         }
                    </View>
               </Pressable>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          paddingVertical: 5,
     },
     button: {
          flexDirection: 'row',
          padding: 8,
          alignItems: 'center',
          justifyContent: 'center',
     },
     buttonContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 30,
     },
     text: {
          color: '#fff',
          fontSize: 17,
          lineHeight: 26,
          paddingHorizontal: 10,
     },
})