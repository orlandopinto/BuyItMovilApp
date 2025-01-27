import React from "react";
import { StyleSheet, TextInput, View } from "react-native"
const Text = () => {
     return (
          <View>
               <TextInput
                    style={styles.input}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
               />
          </View>
     );
};

const styles = StyleSheet.create({
     input: {
          height: 25,
          margin: 25,
          borderWidth: 1,
          padding: 10,
     },
});

export default Text