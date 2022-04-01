import React, { useState, useReducer } from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";

const BoxModel = () => {
  return (
    <View style={styles.boxStyle}>
      <Text style={styles.textOneStyle}>child#1</Text>
      <Text style={styles.textTwoStyle}>child#2</Text>
      <Text style={styles.textThreeStyle}>child#3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent : 'center',
    alignItems: 'center',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});

export default BoxModel;
