import { View, Text, StyleSheet } from "react-native"
import { colors, globalStyles } from "../../../config/theme/theme"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface Props {
     text: string
     safe?: boolean
     white?: boolean
     justifyContent?: 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'center'
     style?: any
}

const Title = ({ text, safe = false, white = false, justifyContent = 'center', style }: Props) => {

     const { top } = useSafeAreaInsets();
     return (
          <View style={{
               ...styles.container,
               justifyContent: justifyContent
          }}>
               <Text
                    style={{
                         ...style,
                         ...globalStyles.title,
                         ...styles.text,
                         marginTop: safe ? top : 0,
                         //color: white ? 'white' : (style ? colors.text : style),
                    }}
               >{text}</Text>
          </View >
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          width: 'auto',
     },
     text: {
          marginBottom: 10,
          width: 'auto'
     }
});

export default Title