import React, { useEffect, useRef, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CustomError } from "../../../domain/entities/CustomError";
import { MultimediaFilesProduct } from "../../../domain/entities/MultimediaFilesProduct.d";
import { Products } from '../../../domain/entities/Products.d';
import { MultimediaFilesProductController } from '../../../infrastructure/controllers/MultimediaFilesProductController';
import { ProductsController } from '../../../infrastructure/controllers/ProductsController';
import ProductsViewModel from "../../../infrastructure/models/ProductsViewModel";
import Card from "../../components/ui/Card";

export default function HomeScreen(navigation) {
     const [isFetching, setIsFetching] = useState(false)
     const [apiError, setApiError] = useState('')
     const refBottomSheet = useRef<any>();
     const [productList, setProductList] = useState([] as Products[])
     const [multimediaFilesProductList, setMultimediaFilesProductList] = useState([] as MultimediaFilesProduct[])
     const [productViewModelList, setProductViewModelList] = useState([] as ProductsViewModel[])

     useEffect(() => {
          GetProducts()
     }, [])

     const GetProducts = async () => {
          const controller = new ProductsController()
          await controller.GetProductList().then(data => {
               const result = data as unknown as Products[]
               setProductList(result);
          }).catch(err => {
               const error = err as CustomError
               setApiError(error.message);
               refBottomSheet.current.open()
          });

          const multimediaFilesProductController = new MultimediaFilesProductController()
          await multimediaFilesProductController.GetMultimediaFilesProductList().then(data => {
               const result = data as unknown as MultimediaFilesProduct[]
               setMultimediaFilesProductList(result);
          }).catch(err => {
               const error = err as CustomError
               setApiError(error.message);
               refBottomSheet.current.open()
          });

          let productsViewModel: ProductsViewModel = {} as ProductsViewModel
          let productViewModelListTmp: ProductsViewModel[] = [] as ProductsViewModel[]

          productList.map((product) => {
               const imagesUrl = multimediaFilesProductList.filter(f => f.productId.includes(product.id)).find(f => f.secureUrl);
               const images = multimediaFilesProductList.filter(f => f.productId.includes(product.id));
               let imageList: string[] = []
               images.map((img) => {
                    imageList.push(img.secureUrl)
               })

               productsViewModel = {
                    ...product,
                    secureUrl: imagesUrl?.secureUrl,
                    images: imageList
               } as ProductsViewModel;

               productViewModelListTmp.push(productsViewModel)
               setProductViewModelList(productViewModelListTmp);
          });
          setIsFetching(false);
     }

     const ListEmpty = () => {
          return (
               <View style={{ alignItems: "center" }}>
                    <Text style={styles.item}>No data found</Text>
               </View>
          );
     };

     const onRefresh = () => {
          setIsFetching(true);
          GetProducts();
     }

     return (
          <SafeAreaView >
               <FlatList style={styles.container}
                    data={productViewModelList}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    keyExtractor={(product) => product.id}
                    ListEmptyComponent={ListEmpty}
                    renderItem={(product) => <Card product={product.item} navigation={navigation} />}
                    onRefresh={onRefresh}
                    refreshing={isFetching}
               />
          </SafeAreaView>
     );
}


const styles = StyleSheet.create({
     container: {
          marginBottom: 60,
     },
     row: {
          flex: 1,
          justifyContent: "space-around",
          gap: 5,
          marginVertical: 5,
          marginHorizontal: 10
     },
     item: {
          padding: 2,
          marginTop: 5,
          fontSize: 15,
     },
});
