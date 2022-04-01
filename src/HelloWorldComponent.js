import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const HelloWorldComponent = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}> Hello my fcken name is slim !</Text>
      <Button
        title="go to FlatListComponent"
        onPress={() => {
          navigation.navigate('Friends');
        }}
      />
      <Button
        title="go to ImageScreenComponent"
        onPress={() => {
          navigation.navigate('Images');
        }}
      />
      <Button
        title="go to CounterComponent"
        onPress={() => {
          navigation.navigate('Counter');
        }}
      />
      <Button
        title="go to Random generator component"
        onPress={() => {
          navigation.navigate('Random');
        }}
      />
      <Button
        title="go to Text Input Component"
        onPress={() => {
          navigation.navigate('TextInput');
        }}
      />
      <Button
        title="go to box model component"
        onPress={() => {
          navigation.navigate('BoxModel');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default HelloWorldComponent;
