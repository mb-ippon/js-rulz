import React from 'react';
import css from '../../app.css';

export default class ProductRow extends React.Component {
  static propTypes = {
    product: React.PropTypes.object
  }

  render() {
    let name;
    if (this.props.product.stocked) {
      name = this.props.product.name;
    } else {
      name = <span className={css['out-stock']}>{this.props.product.name}</span>;
    }
    return (
      <tr>
        <td>
          {name}
        </td>
        <td>
          {this.props.product.price}
        </td>
      </tr>
    );
  }
}
