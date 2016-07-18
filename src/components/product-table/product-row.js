(function(root) {
  root.ProductRow = React.createClass({ // eslint-disable-line no-param-reassign
    render: function() {
      var name;
      if (this.props.product.stocked) {
        name = this.props.product.name;
      } else {
        name = React.createElement('span', { className: 'out-stock' }, this.props.product.name);
      }
      return React.createElement(
        'tr',
        null,
        React.createElement('td', null, name),
        React.createElement('td', null, this.props.product.price));
    }
  });
}(window));
