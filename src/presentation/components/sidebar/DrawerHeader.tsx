import { DrawerToggleButton } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function DrawerHeader(props: any) {
     return (
          <View style={headerStyles.container}>
               <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
                    <DrawerToggleButton  {...props} />
                    {/* <Icon name="menu-outline"
                         size={35}
                    onPress={() => {
                         navigation.openDrawer()
                    }}
                    /> */}
               </View>

          </View>
     )
}

const headerStyles = StyleSheet.create({
     container: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#fff',
          elevation: 5,
          height: 50,
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'space-between'
     }
});


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