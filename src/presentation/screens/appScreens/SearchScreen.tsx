import React from "react";
import { Text, View } from "react-native";
import { Background } from "../../components/ui";

const HomeScreen = () => {
     return (
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
                         SEARCH
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