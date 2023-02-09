import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    const productsList = this.props.products.map((product, index) => (
      <Product
        key={index}

        title = {product.name}

        price={product.price}

        quantity={product.quantity}

        likes = {product.like}

        image={product.img}
      />
    ));
    return <div>{productsList}</div>;
  }
}

export default Products;
