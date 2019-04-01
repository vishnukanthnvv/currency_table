import React, { Component } from 'react';
import currencies from '../constants/currencies'

export default class currencyRow extends Component {
  state = {
    rates: {} 
  };

  componentDidMount() {
    fetch(`https://api.exchangeratesapi.io/latest?base=${this.props.currency}`)
      .then( response => response.json())
      .then( data => this.setState({rates: data.rates}));
  }
  
  render() {
        if (!Object.keys(this.state.rates).length) {
          return null;
        }

        return (
        <React.Fragment> 
            <tr className={this.props.className}>
              <td className="col-heading">1 {this.props.currency}: </td>
                {
                  currencies.map(currency => <td key={currency}>{this.props.currency === currency ? '1.00' : this.state.rates[currency].toFixed(2)}</td>)
                }
            </tr>
            <tr className={this.props.className}>
              <td className="col-heading">inverse: </td>
                {
                  currencies.map(currency => <td key={currency}>{this.props.currency === currency ? '1.00' : (1 / this.state.rates[currency]).toFixed(2)}</td>)
                }
            </tr>
        </React.Fragment>
        );
    }
}