import React from 'react';
export default class ProductCategoryRow extends React.Component {

  static propTypes = {
    category: React.PropTypes.string
  }

  render() {
    return (
      <tr>
        <th colSpan= '2'>
          {this.props.category}
        </th>
      </tr>
    );
  }
}
