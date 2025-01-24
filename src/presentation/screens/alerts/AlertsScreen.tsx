import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, globalStyles } from "../../../config/theme/theme";
//import { CustomButton } from "../../components/ui";

const AlertsScreen = () => {
     return (
          <View style={globalStyles.mainContainer}>
               <View style={globalStyles.globalMargin}>
                    <View style={{ ...styles.container }}>
                         {/* <CustomButton variant='primary' title={'Iniciar sesión'} onPress={navigation.navigate('dashboard')} /> */}
                         <Pressable>
                              <Icon name="cube-outline" size={25} style={{ marginRight: 10 }} color={colors.primary} />
                              <Text style={{ color: '#000' }}>Ir a Home Screen</Text>
                              <Icon name={'chevron-forward-outline'} size={25} style={{ marginLeft: "auto", color: colors.primary }} />
                         </Pressable>
                    </View>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 5
     }
})

export default AlertsScreen