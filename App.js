import React, { Component } from 'react';
import { View, Text } from 'react-native';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import Main from './src/screens/main';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}
