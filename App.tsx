/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

export default class App extends Component {
  state = {status: 'false'};

  componentWillMount = async () => {
    try {
      
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Hello, {this.state.status}</Text>
        </View>
      </>
    );
  }
}
