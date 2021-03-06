import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import { currencyInputStyle } from '../styles';
import CurrencySelector from './CurrencySelector';
import RatesList from './RatesList';

class Main extends Component {

  state = {
    value: '',
    output: '',
    rates: []
  };


  goToRates() {
    this.props.navigator.push({
      component: RatesList,
      title: 'Rates'
    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Currency Converter</Text>
        <View style={styles.wrapper}>
          <TextInput
            style={currencyInputStyle}
            keyboardType='numeric'
            placeholder='convert value'
            placeholderTextColor="white"
          />
          <CurrencySelector placeholder='↓ from' />
          <CurrencySelector placeholder='↓ to' />
        </View>
        <TouchableHighlight
          style={styles.button}
          underlayColor='white'>
          <Text style={styles.buttonText}>Convert</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor='white'
          onPress={this.goToRates.bind(this)}
        >
          <Text style={styles.buttonText}>All Rates</Text>
        </TouchableHighlight>
        <Text style={styles.outputText}>{this.state.output}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#32C850'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  wrapper: {
    flexDirection: 'column',
  },
  outputText: {
    fontSize: 50,
    color: 'white',
    marginTop: 20,
    textAlign: 'center'
  }
});

export default Main;
