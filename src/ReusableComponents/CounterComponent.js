import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.style}>
      <Text>Current Counter : {counter}</Text>
      <Button
        style={styles.buttonStyle}
        title="increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="decrease"
        onPress={() => {
            setCounter(counter - 1);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {},
  style: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default CounterComponent;
