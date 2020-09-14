import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component {
  render() {
    return (
      <View styles={{ flex: 1 }}>
        <HomeScreen />
      </View>
    );
  }
}
