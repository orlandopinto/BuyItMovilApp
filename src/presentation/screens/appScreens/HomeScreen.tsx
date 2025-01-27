import React from "react";
import { Text, View } from "react-native";
import { Background } from "../../components/ui";

const HomeScreen = ({ navigation }: any) => {
     return (
          // <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
          //      <View style={{ flex: 1, backgroundColor: '#fff' }}>
          //           <CustomHeader title="Home" isHome={true} navigation={navigation} />
          //      </View>

          // </SafeAreaView>
          <Background>
               <View
                    style={{
                         flex: 1,
                         alignItems: 'center',
                         justifyContent: 'center',
                    }}>
                    <Text
                         style={{
                              fontSize: 25,
                              textAlign: 'center',
                              marginBottom: 16
                         }}>
                         HOME
                    </Text>

               </View>
               <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
                    React Navigate Drawer
               </Text>
               <Text
                    style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
                    www.aboutreact.com
               </Text>
          </Background>
     )
}

export default HomeScreen