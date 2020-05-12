import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

export default class App extends Component {
  state = {status: false};

  componentDidMount() {
    axios
      .post('http://192.168.100.3:5000/api')
      .then((res) => {
        this.setState({status: res.data.status});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {this.state.status && <Text>Hello</Text>}
        </View>
      </>
    );
  }
}
