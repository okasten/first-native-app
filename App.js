import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import FirstComponent from "./components/FirstComponent";
import Buttons from "./components/Buttons";
import Input from "./components/Input";

export default class App extends React.Component {
  render() {
    let pic = {
      uri:
        "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn"
    };
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, Chloe!</Text>
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <FirstComponent name="Olivia" />
        <Buttons />
        <Input />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "red"
  }
});
