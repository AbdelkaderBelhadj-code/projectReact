import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
    render() {
        const productsList = this.props.products.map((product, index) => (
            <Product
      key={index}
      name={product.name}
      description={product.description}
      image={product.img}
    />
  ));
  return <div>{productsList}</div>;
};
}


export default Products;