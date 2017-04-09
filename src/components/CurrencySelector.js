import React, { Component } from 'react';
import {
  View,
  TextInput
} from 'react-native';
import ModalPicker from 'react-native-modal-picker';
import { currencyInputStyle } from '../styles';

class CurrencySelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInputValue: ''
    }
  }
  
  render() {
    let index = 0;
    const allCurrencies = [
      {key: index++, section: true, label: 'EUR'},
      {key: index++, label: 'USD'},
      {key: index++, label: 'JPY'},
      {key: index++, label: 'BGN'},
      {key: index++, label: 'CZK'},
      {key: index++, label: 'DKK'},
      {key: index++, label: 'GBP'},
      {key: index++, label: 'HUF'},
      {key: index++, label: 'PLN'},
      {key: index++, label: 'RON'},
      {key: index++, label: 'SEK'},
      {key: index++, label: 'CHF'},
      {key: index++, label: 'NOK'},
      {key: index++, label: 'HRK'},
      {key: index++, label: 'RUB'},
      {key: index++, label: 'TRY'},
      {key: index++, label: 'AUD'},
      {key: index++, label: 'BRL'},
      {key: index++, label: 'CAD'},
      {key: index++, label: 'CNY'},
      {key: index++, label: 'HKD'},
      {key: index++, label: 'IDR'},
      {key: index++, label: 'ILS'},
      {key: index++, label: 'INR'},
      {key: index++, label: 'KRW'},
      {key: index++, label: 'MXN'},
      {key: index++, label: 'MYR'},
      {key: index++, label: 'NZD'},
      {key: index++, label: 'PHP'},
      {key: index++, label: 'SGD'},
      {key: index++, label: 'THB'},
      {key: index++, label: 'ZAR'}
    ];

    return (
      <View>
        <ModalPicker
          data={allCurrencies}
        >
          <TextInput
            style={currencyInputStyle}
            editable={false}
            placeholder={this.props.placeholder}
            placeholderTextColor="white"
            value={this.state.textInputValue} />
        </ModalPicker>
      </View>
    )
  }
}

export default CurrencySelector;