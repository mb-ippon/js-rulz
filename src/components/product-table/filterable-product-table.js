(function(root) {
  root.FilterableProductTable = React.createClass({ // eslint-disable-line no-param-reassign
    loadFromServer: function(url) {
      var xhr = new XMLHttpRequest();
      return new Promise(function(resolve, reject) {
        xhr.addEventListener('error', reject);
        xhr.addEventListener('load', resolve);
        xhr.open('GET', url);
        xhr.send(null);
      }).then(function() {
        return JSON.parse(xhr.response);
      });
    },
    componentDidMount: function() {
      this.loadFromServer('api/products').then(function(products) {
        this.setState({ products: products });
      }.bind(this));
    },
    getInitialState: function() {
      return {
        products: [],
        filterText: '',
        inStockOnly: false
      };
    },
    handleUserInput: function(filterText, inStockOnly) {
      this.setState({
        filterText: filterText,
        inStockOnly: inStockOnly
      });
    },
    render: function() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          root.SearchBar,
          {
            filterText: this.state.filterText,
            onUserInput: this.handleUserInput,
            inStockOnly: this.state.inStockOnly
          }
        ),
        React.createElement(
          root.ProductTable,
          {
            products: this.state.products,
            filterText: this.state.filterText,
            inStockOnly: this.state.inStockOnly
          }
        )
      );
    }
  });
}(window));
