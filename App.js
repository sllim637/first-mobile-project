import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button ,TouchableOpacity} from "react-native";
import { React } from "react";
import HelloWorldComponent from "./src/HelloWorldComponent";
import FiendsListComponent from "./src/FriendsListComponent";
import Navigator from './src/routes/homStack'
const sayHello = "hello";
export default function App() {

  return (

    <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
