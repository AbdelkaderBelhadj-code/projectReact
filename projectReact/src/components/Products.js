import React, { Component } from "react";
import { Col, Container , Row } from "react-bootstrap";
import Product from "./Product";


class Products extends Component {
  

 
  render() {
    const productsList = this.props.products.map((product, index) => (
      
      
      <Product
        key={index}
        produit = {product}
      />
      
      
    
    ));
    return <Container><Row>{productsList}</Row></Container>;
  }
}

export default Products;
