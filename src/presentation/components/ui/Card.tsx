import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../../types/navigation';

export default function Card(props) {
     const navigation = useNavigation<NavigationProp<MainStackParamList>>();

     return (
          <TouchableOpacity
               style={styles.card}
               onPress={() => { navigation.navigate('detailsproduct', { props: props }); }}
          >
               <Image style={styles.image} source={{ uri: props.product.secureUrl }} />
               <Text style={styles.title}>{props.product.productName}</Text>
               <Text style={styles.description}>{props.product.productDescription.substring(0, 23) + '...'}</Text>
               <Text style={styles.price}>{props.product.price} €</Text>
          </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
     card: {
          flex: 1,
          borderColor: 'white',
          borderRadius: 5,
          backgroundColor: 'white',
          height: 'auto',
     },
     image: {
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          marginBottom: 10,
          width: '100%',
          height: 250,
     },
     title: {
          flex: 1,
          fontSize: 14,
          marginLeft: 5,
     },
     description: {
          marginLeft: 5,
          fontSize: 14,
          marginBottom: 10,
          flexWrap: 'wrap'

     },
     price: {
          alignContent: 'center',
          fontSize: 12,
          marginLeft: 5,
          marginBottom: 10,
          fontWeight: 'bold',
     }
})