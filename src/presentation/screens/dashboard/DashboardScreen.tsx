import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { CustomButton, CustomHeader } from "../../components/ui";

// interface Props {
//      navigation: StackNavigationProp<DrawerStackParamList>
// }

const DashboardScreen = () => {
     // const navigation = useNavigation<NativeStackNavigationProp<DrawerStackParamList>>();
     return (
          <View style={{ flex: 1, borderWidth: 1, borderColor: '#000' }}>
               <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#000' }}>
                    <CustomHeader>DASHBOARD PAGE</CustomHeader>
                    {/* <CustomButton title="ir a profile" onPress={() => navigation.navigate('profile')} /> */}
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
     },
     navigationContainer: {
          backgroundColor: '#ecf0f1',
     },
     paragraph: {
          padding: 16,
          fontSize: 15,
          textAlign: 'center',
     },
});

export default DashboardScreen