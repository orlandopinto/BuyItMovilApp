import React, { useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImageIcons from "../../icons/ImageIcons";
import BottomSheet from '../ui/BottomSheet';

interface Props {
     title: string;
     onPress: () => void;
}

export default function DrawerHeader({ title, onPress }: Props) {
     const refBottomSheet = useRef<any>();
     return (
          <View style={styles.container}>
               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                         onPress={onPress}
                         style={styles.iconContainer}>
                         <Image
                              resizeMode='contain'
                              style={styles.iconMenu}
                              source={ImageIcons.menu}
                         />
                    </TouchableOpacity>
                    <Text style={{
                         fontSize: 17,
                         marginLeft: 0,
                         fontWeight: 'bold',
                    }}>{title}</Text>
               </View>
               <TouchableOpacity style={styles.iconContainer} onPress={() => refBottomSheet.current.open()} >
                    <Image
                         resizeMode='contain'
                         style={styles.icon}
                         source={ImageIcons.elipsis}
                    />

               </TouchableOpacity>
               <BottomSheet bottomSheetRef={refBottomSheet}>
                    <View>
                         <Text>aqui componente</Text>
                    </View>
               </BottomSheet>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 0,
          paddingTop: 15,
          paddingHorizontal: 16,
     },
     iconContainer: {
          height: 25,
          width: 25,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#e0e0e0',
          paddingBottom: 50,
          marginBottom: 10,
          paddingLeft: 50,

     },
     iconMenu: {
          height: 25,
          width: 25,
          tintColor: '#000',
          marginRight: 45,
          marginTop: 48,
     },
     icon: {
          height: 25,
          width: 25,
          tintColor: '#000',
          marginRight: 50,
          marginTop: 50,
     },
});
