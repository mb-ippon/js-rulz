(function(root) {
  root.ProductCategoryRow = React.createClass({
    render: function() {
      return React.createElement('tr', null,
                                 React.createElement('th', { colSpan: '2' }, this.props.category)
                                );
    }
  });
}(window));
