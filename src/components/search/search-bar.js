(function(root) {
  root.SearchBar = React.createClass({ // eslint-disable-line no-param-reassign
    handleChange: function() {
      this.props.onUserInput(
        this.refs.filterTextInput.value,
        this.refs.inStockOnlyInput.checked
      );
    },
    render: function() {
      return React.createElement(
        'form',
        null,
        React.createElement('input', {
          type: 'text',
          placeholder: 'Search...',
          value: this.props.filterText,
          ref: 'filterTextInput',
          onChange: this.handleChange
        }),
        React.createElement(
          'p',
          null,
          React.createElement('input', {
            type: 'checkbox',
            checked: this.props.inStockOnly,
            ref: 'inStockOnlyInput',
            onChange: this.handleChange
          }),
          ' ',
          'Only show products in stock'
        )
      );
    }
  });
}(window));
