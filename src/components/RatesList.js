import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import api from '../utils/api';

class RatesList extends Component {
  state = { rates: [] };

  componentWillMount() {
    api.getRates()
      .then(response => this.setState({ rates: response.data.rates }));
  }

  renderRates() {
    return this.state.rates.map(rate =>
      <Text key={rate.currency}>{rate.currency}, {rate.rate}</Text>
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderRates()}
      </ScrollView>
    );
  }
}

export default RatesList;
