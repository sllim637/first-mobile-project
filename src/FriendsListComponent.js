import React from "react";
import { StyleSheet, Text, FlatList , Button} from "react-native";

const friendList = [
  { name: "slim hammami", age: 22, key: "1" },
  { name: "omar hammami", age: 29, key: "2" },
  { name: "rim  hammami", age: 27, key: "3" },
  { name: "bacha hammami", age: 67, key: "4" },
  { name: "sonia hammami", age: 53, key: "5" },
];
const FriendsListComponent = () => {
  
  return (
    <FlatList
      style={styles.spacing}
      data={friendList}
      renderItem={({ item }) => {
        return <Text style={styles.spacing}> {item.name} - {item.age} </Text>;
      }}
    ></FlatList>

  );
};
const styles = StyleSheet.create({
  spacing: {
    marginVertical: 50,
  },
});
export default FriendsListComponent;
