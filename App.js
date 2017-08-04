import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { Button, View } from "react-native";
import styled from "styled-components/native";

const Pair = styled.Text`color: blue;`;

export default class App extends React.Component {
  render() {
    return <Pair>Hey</Pair>;
  }
}
