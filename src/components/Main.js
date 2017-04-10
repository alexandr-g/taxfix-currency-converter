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
import api from '../utils/api';

class Main extends Component {
  state = {
    value: '',
    output: '',
    rates: []
  };

  componentWillMount() {
    api.getRates()
      .then(response => this.setState({ rates: response.data.rates }));
  }

  convertCurrency() {
    // console.log(this.state.value);
    // console.log(this.state.value * 1.06);
    let value = this.state.value;
    let rate = value * 1.06; // accepts currency as parameter
    let output = value * rate; // receive rate dynamically
    let number = output.toPrecision(5);
    console.log(number);
    this.setState({ output: number, value: '' });
  }

  // getCurrencyRate(value) {
  //   if (this.state.rates.map(text => {
  //     for (let i in text) {
  //       if(text[i] === value) {
  //         return console.log(text.rate)
  //       }
  //     }
  //
  //   })})}

  handleChange(event) {
    this.setState({
      value: event.nativeEvent.text
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
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <CurrencySelector placeholder='↓ from' />
          <CurrencySelector placeholder='↓ to' />
        </View>
        <TouchableHighlight
          style={styles.button}
          underlayColor='white'
          onPress={this.convertCurrency.bind(this)}
        >
          <Text style={styles.buttonText}>Convert</Text>
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
