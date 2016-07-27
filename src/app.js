import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './app.css';
import FilterableProductTable from './components/product-table/filterable-product-table';

ReactDOM.render(
  <AppContainer>
    <FilterableProductTable />
  </AppContainer>,
  document.getElementById('container')
);

if (module.hot) {
  module.hot.accept('./components/product-table/filterable-product-table', () => {
    const NextFilterableProductTable = require('./components/product-table/filterable-product-table').default;
    ReactDOM.render(
      <AppContainer>
        <NextFilterableProductTable />
      </AppContainer>,
      document.getElementById('container')
    );
  });
}
