import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

export default class Input extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      text: e
    });
  };
  render() {
    return (
      <View>
        <Text>{this.state.text}</Text>
        <TextInput
          placeholder="Type something here"
          onChange={e => this.handleChange()}
        />
      </View>
    );
  }
}
