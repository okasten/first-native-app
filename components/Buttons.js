import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default class Buttons extends Component {
  showAlert = title => {
    Alert.alert(`You hit the button ${title}!`);
  };
  render() {
    return (
      <View>
        <Button title="one" onPress={() => this.showAlert("one")} />
        <Button title="two" onPress={() => this.showAlert("two")} />
      </View>
    );
  }
}
