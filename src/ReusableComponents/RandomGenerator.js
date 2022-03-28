import React, { useReducer } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import ColorCounter from "../ReusableComponents/ColorCounter";

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      //never goin to do :state.red = state.red + 15
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };

    default:
  }
};
const RandomGenerator = () => {
  const COLOR_INCREAMENT = 15;

  const [state, dispatch] = useReducer(
    reducer,{red: 0,green: 0 ,blue: 0}
  );

  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: "red", amount: COLOR_INCREAMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREAMENT });
        }}
        color="Red"
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: "blue", amount: COLOR_INCREAMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREAMENT });
        }}
        color="Blue"
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: "green", amount: COLOR_INCREAMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREAMENT });
        }}
        color="Green"
      ></ColorCounter>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};

export default RandomGenerator;
