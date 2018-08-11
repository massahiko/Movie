import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Button
} from "react-native";

import Movies from "./src/shared/movies";
import axios from "axios";

export default class App extends React.Component {
  static navigationOptions = {
    title: "Page 2"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Page 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10
  },
  header: {
    backgroundColor: "black",
    height: 50,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 8,
    flexDirection: "row"
  },
  imageMenu: {
    width: 35,
    height: 35
  },
  search: {},
  boxInput: {
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "#DDD",
    height: 40,
    width: "100%"
  }
});
