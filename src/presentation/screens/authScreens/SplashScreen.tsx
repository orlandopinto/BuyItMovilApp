import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

export default function SplashScreen({ navigation }: any) {
     useEffect(() => {
          const timer = setTimeout(() => {
               navigation.navigate('login');
          }, 5000);
          return () => clearTimeout(timer);
     }, [navigation]);

     return (
          <React.Fragment>
               <FastImage style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}
                    source={require('../../assets/Animation.gif')}
                    resizeMode={FastImage.resizeMode.contain}
               />
               <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', height: 50 }}>
                    <Image
                         style={{ height: 50, width: 50 }}
                         source={require('../../assets/logo.png')}
                    />
               </View>
               <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', height: 50 }}>
                    <Text style={{ fontWeight: 'bold', color: 'gray' }}>Buy It Store Mobile</Text>
               </View>
          </React.Fragment>

     );
}