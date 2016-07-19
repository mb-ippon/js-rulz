(function(root) {
  root.ProductCategoryRow = React.createClass({ // eslint-disable-line no-param-reassign
    propTypes: {
      category: React.PropTypes.string
    },
    render: function() {
      return React.createElement(
        'tr',
        null,
        React.createElement('th', { colSpan: '2' }, this.props.category)
      );
    }
  });
}(window));
