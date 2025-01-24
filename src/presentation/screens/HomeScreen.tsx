import { StyleSheet, View } from "react-native";
import { CustomHeader } from "../components/ui";

// interface Props {
//      navigation: StackNavigationProp<DrawerStackParamList>
// }

const HomeScreen = () => {
     // const navigation = useNavigation<NativeStackNavigationProp<DrawerStackParamList>>();
     return (
          <View style={{ flex: 1 }}>
               <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <CustomHeader>HOME PAGE</CustomHeader>
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

export default HomeScreen