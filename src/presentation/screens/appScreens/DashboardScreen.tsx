import React from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/ui";


const DashboardScreen = () => {
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
                         DASHBOARD
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

export default DashboardScreen