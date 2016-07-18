(function(root) {
  root.ProductTable = React.createClass({ // eslint-disable-line no-param-reassign
    render: function() {
      var rows = [];
      var lastCategory = null;
      this.props.products.forEach(function(product) {
        if (product.name.indexOf(this.props.filterText) === -1
        || (!product.stocked && this.props.inStockOnly)) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(React.createElement(root.ProductCategoryRow, {
            category: product.category,
            key: product.category
          }));
        }
        rows.push(React.createElement(root.ProductRow, { product: product, key: product.name }));
        lastCategory = product.category;
      }.bind(this));
      return React.createElement(
        'table',
        null,
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement('th', null, 'Name'),
            React.createElement('th', null, 'Price')
          )
        ),
        React.createElement('tbody', null, rows)
      );
    }
  });
}(window));
