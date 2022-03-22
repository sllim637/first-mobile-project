import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import ImageDetailComponent from "../src/ReusableComponents/ImageDetailComponent";
const ImageScreenComponent = () => {
  return (
    <View>
      <ImageDetailComponent
        imageSource={require("../assets/AdobeStock_485539210_SIW_2.jpg")}
        title="parking of INSAT"
      ></ImageDetailComponent>
      <ImageDetailComponent
        imageSource={require("../assets/AdobeStock_485539210_SIW_2.jpg")}
        title="forest"
      ></ImageDetailComponent>
      <ImageDetailComponent
        imageSource={require("../assets/AdobeStock_485539210_SIW_2.jpg")}
      ></ImageDetailComponent>
      <ImageDetailComponent
        imageSource={require("../assets/AdobeStock_485539210_SIW_2.jpg")}
      ></ImageDetailComponent>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
export default ImageScreenComponent;
