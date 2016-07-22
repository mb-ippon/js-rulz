import React from 'react';
import SearchBar from '../search/search-bar';
import ProductTable from './product-table';

export default class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filterText: '',
      inStockOnly: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  loadFromServer(url) {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.addEventListener('error', reject);
      xhr.addEventListener('load', resolve);
      xhr.open('GET', url);
      xhr.send(null);
    }).then(() => JSON.parse(xhr.response));
  }

  componentDidMount() {
    this.loadFromServer('api/products').then(products => {
      this.setState({ products });
    });
  }

  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText,
      inStockOnly
    });
  }

  render() {
    return (
      <div>
        <SearchBar
         filterText={this.state.filterText}
         onUserInput={this.handleUserInput}
         inStockOnly={this.state.inStockOnly}
        />
        <ProductTable
         products={this.state.products}
         filterText={this.state.filterText}
         inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}
