import React from 'react';
import ProductCategoryRow from './product-category-row';
import ProductRow from './product-row';

export default class ProductTable extends React.Component {

  static propTypes = {
    products: React.PropTypes.array,
    filterText: React.PropTypes.string,
    inStockOnly: React.PropTypes.bool
  }

  render() {
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach(product => {
      if (product.name.indexOf(this.props.filterText) === -1
      || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
           category={product.category}
           key={product.category}
          />
        );
      }
      rows.push(
        <ProductRow product={product} key={product.name}/>
      );
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <td>
              {'Name'}
            </td>
            <td>
              {'Price'}
            </td>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}
