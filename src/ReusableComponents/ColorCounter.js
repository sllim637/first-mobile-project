import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        onPress={() => {
          onIncrease();
        }}
        title={`increase ${color}`}
      />
      <Button
        onPress={() => {
          onDecrease();
        }}
        title={`decrease ${color}`}
      />
    </View>
  );
};
export default ColorCounter;
