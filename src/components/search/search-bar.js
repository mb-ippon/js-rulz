(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('react'));
  } else {
    root.SearchBar = factory(root.React); // eslint-disable-line no-param-reassign
  }
}(this || window, React => {
  class SearchBar extends React.Component {

    static displayName = 'SearchBar';

    static propTypes = {
      filterText: React.PropTypes.string,
      onUserInput: React.PropTypes.func.isRequired,
      inStockOnly: React.PropTypes.bool
    }

    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
      this.props.onUserInput(
        this.refs.filterTextInput.value,
        this.refs.inStockOnlyInput.checked
      );
    }

    render() {
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
  }
  return SearchBar;
}));
