import React from "react";
import { StyleSheet, Text, Button, View, Image } from "react-native";

const ImageDetailComponent = (props) => {
  console.log(props);
  return (
    <View>
      <Image style={styles.myImg} source={props.imageSource} />
      <Text  style={styles.textStyle} > {props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginLeft : 5,
    fontSize: 30,
  },
  myImg: {
    width: 100,
    height: 100,
  },
});
export default ImageDetailComponent;
