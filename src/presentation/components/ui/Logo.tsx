import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
     return <Image
          style={styles.image}
          source={require('../../assets/logo.png')}
     />
}

const styles = StyleSheet.create({
     image: {
          width: 85,
          height: 85,
          marginBottom: 8,
     },
})