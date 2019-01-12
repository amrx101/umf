import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './navigator/navigator'
import {createStore} from 'redux'

import { reducer } from '../reducers/index'
const umfStore = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <TabNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
