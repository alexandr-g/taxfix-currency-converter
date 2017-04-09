import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import Main from './src/components/Main';

export default class Taxfix extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Taxfix',
          component: Main
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
});

AppRegistry.registerComponent('Taxfix', () => Taxfix);
