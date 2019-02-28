import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class FirstComponent extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            color: "#060696",
            backgroundColor: "#42dcf4"
          }}
        >
          {this.props.name}'s first component
        </Text>
      </View>
    );
  }
}
