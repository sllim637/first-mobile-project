import React, { useState ,useReducer } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const CounterComponent = () => {
const reducer = (state , action) => {
  return ({...state ,value : state.value + action.amount })
}
  const INCREMENT_RANGE = 10 ; 


 /* const [counter, setCounter] = useState(0);*/
  const [counter , dispatch] = useReducer(reducer , {value : 0} )
  return (
    <View style={styles.style}>
      <Text>Current Counter : {counter.value}</Text>
      <Button
        style={styles.buttonStyle}
        title="increase"
        onPress={() => {
         /* setCounter(counter + 1);*/
         dispatch({amount : INCREMENT_RANGE})
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="decrease"
        onPress={() => {
           /* setCounter(counter - 1);*/
            dispatch({amount :-1 *  INCREMENT_RANGE})
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
