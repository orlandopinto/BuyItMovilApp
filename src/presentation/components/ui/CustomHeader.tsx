import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function CustomHeader(props: any) {
     return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
     header: {
          color: '#000',
          fontWeight: 'bold',
          paddingVertical: 12,
     },
})