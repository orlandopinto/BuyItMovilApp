import React, { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ProductsViewModel from "../../../infrastructure/models/ProductsViewModel";

export default function DetailsProductScreen(props) {
     const product: ProductsViewModel = props.route.params.props.product
     return (
          <ScrollView style={styles.container}>
               <Image style={styles.image} source={{ uri: product.secureUrl }} />
               <Text style={styles.title}>{product.productName}</Text>
               <Text style={styles.description}>{product.productDescription}</Text>
               <Text style={styles.price}>{product.price} €</Text>
               <Text style={styles.description}>Codigo de barra: {product.codeBar}</Text>
               <Text style={styles.detalle}>sku: {product.sku}</Text>
               <Text style={styles.detalle}>categoria: {product.categoryId}</Text>
          </ScrollView>
     )
}

const styles = StyleSheet.create({
     container: {
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
          height: 500,
     },
     title: {
          flex: 1,
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
          width: '100%',
          marginVertical: 15,
     },
     description: {
          margin: 15,
          fontSize: 14,
          marginBottom: 10,
          flexWrap: 'wrap'

     },
     price: {
          margin: 15,
          alignContent: 'center',
          fontSize: 12,
          fontWeight: 'bold',
     },
     detalle: {
          marginVertical: 15,
          fontSize: 14,
          marginBottom: 10,
          flexWrap: 'wrap'

     },
})