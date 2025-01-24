import React from 'react'
import { StyleSheet, Text } from 'react-native'
//import { Text } from 'react-native-paper'
//import { theme } from '../core/theme'

export default function CustomHeader(props: any) {
     return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
     header: {
          fontSize: 21,
          color: '#000',
          fontWeight: 'bold',
          paddingVertical: 12,
     },
})