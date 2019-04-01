import React from 'react';
import './App.css';
import currencies from './constants/currencies';
import CurrencyRow from './components/currency-row';

const App = () =>
    (
      <div className="App">
        <h1>Currency Exchange Rates</h1>
        <table className="exchange-table">
          <thead>
            <tr>
              <th className="col-heading" />
              {
                currencies.map(currency => <th key={currency}>{currency}</th>)
              }
            </tr>
          </thead>    
          <tbody>
            {
              currencies.map( (currency, index) =>
                <CurrencyRow 
                  key={currency} 
                  className={ index % 2 === 0 ? '' : "row-highlight"}
                  currency={currency} 
                />
              )
            }
          </tbody>
        </table>
      </div>
    );

export default App;
