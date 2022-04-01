import React, { useState, useReducer } from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";

const TextInputComponent = () => {
  const [name, setName] = useState("");
  const [displayError , setDisplayError] = useState(true)
  return (
    <View>
      <Text>Enter Your Name :</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        autoCorrect={false}
        value={name}
        onChangeText={(newName) => {
            if (name.length > 5 ){
                setDisplayError(false) 
            }else{
                setDisplayError(true)
            }
          setName(newName);
        }}
      />
      { displayError ? <Text>your name must be more than 5 caracters </Text> : null }
      <Text>Your name is : {name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    height: 20,
  },
});
export default TextInputComponent;
