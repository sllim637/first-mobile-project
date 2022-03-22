import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import ColorCounter from "../ReusableComponents/ColorCounter";

const RandomGenerator = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log("red :", red, "green:", green, "blue :", blue);
  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          setRed(red+1);
        }}
        onDecrease={() => {
          setRed(red-1);
        }}
        color="Red"
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => {
          setGreen(green+1);
        }}
        onDecrease={() => {
          setGreen(green-1);
        }}
        color="Blue"
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => {
          setBlue(blue+1);
        }}
        onDecrease={() => {
          setBlue(blue-1);
        }}
        color="Green"
      ></ColorCounter>
      <View style = {{height : 150 , width : 150 , backgroundColor : `rgb(${red},${green},${blue})`}}/>
    </View>
  );
};

export default RandomGenerator;
