import ReactDOM from 'react-dom';
import React from 'react';
import './app.css';
import FilterableProductTable from './components/product-table/filterable-product-table';

ReactDOM.render(
  <FilterableProductTable />, document.getElementById('container')
);
