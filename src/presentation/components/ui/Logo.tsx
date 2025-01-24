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
          width: 110,
          height: 110,
          marginBottom: 8,
          //justifyContent: 'center',
          //alignContent: 'center'
     },
})