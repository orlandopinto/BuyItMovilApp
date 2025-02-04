import React from 'react'
import { View, StyleSheet } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet'
import { colors, Variant } from '../../../config/theme/theme'

const BottomSheet = ({ bottomSheetRef, children }) => {
     return (
          <RBSheet
               ref={bottomSheetRef}
               height={300}
               openDuration={250}
               dragOnContent={true}
               closeOnPressMask={true}
               draggable={true}
               customStyles={{
                    container: {
                         borderTopLeftRadius: 10,
                         borderTopRightRadius: 10,
                    },
                    wrapper: {
                         backgroundColor: 'rgba(0,0,0,0.5)',
                    },
                    draggableIcon: {
                         backgroundColor: '#e0e0e0',
                         width: 80,
                         height: 8,
                    },
               }}
               customModalProps={{
                    animationType: 'slide',
                    statusBarTranslucent: true,
               }}
               customAvoidingViewProps={{
                    enabled: false,
               }}
          >
               <View style={styles.container}>
                    {children}
               </View>
          </RBSheet>
     )
}

export default BottomSheet

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: 'white',
          padding: 10,
     }
});