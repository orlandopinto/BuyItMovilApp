import { TouchableOpacity, Image, StyleSheet, View } from "react-native"

interface Props {
     goBack: any
}

export default function BackButton({ goBack }: Props) {
     return (
          <TouchableOpacity onPress={goBack} style={{ ...styles.container }}>
               <View style={styles.imageContainer}>
                    <Image
                         style={styles.image}
                         source={require('../../assets/arrow_back.png')}
                    />
               </View>
          </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
     container: {
          position: 'absolute',
          top: 10,
          left: 10,
     },
     imageContainer: {
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#e0e0e0',
          borderRadius: 50,
          padding: 10,
          margin: 10,
     },
     image: {
          width: 30,
          height: 30,

     },
})