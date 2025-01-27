import React from 'react'
import { View } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet'

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
                         backgroundColor: 'rgba(0,0,0,0.09)',
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
               <View style={{ flex: 1, backgroundColor: 'white' }}>
                    {children}
               </View>
          </RBSheet>
     )
}
export default BottomSheet