import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Col } from 'react-bootstrap';

class Product extends React.Component {
    constructor(props){
      super(props);
      
      //console.log(props)
      this.state = { product:props.produit };
      console.log(this.state.product)
      //.addLikes = this.addLikes.bind(this);


    }
    addLikes=(e)=>{
      e.preventDefault();
      this.setState((oldState) => ({
        product :{...oldState.product,like:oldState.product.like +1}
  
         
        
      }
      ));     
    }
   

    render() {
  return (
    <Col>
    <Card style={{ width: '18rem' }}>
      
      <Card.Header style={{ height: "18rem" }}><Card.Img variant="top" src={require('../assets/images/'+this.state.product.img)} /></Card.Header>
      <Card.Body className='text-center'>
        <Card.Title>{this.state.product.name}</Card.Title>
        <Card.Text>Price :{this.state.product.price}</Card.Text>
        <Card.Text>Quality :{this.state.product.quantity}</Card.Text>
        <Card.Text>Like :{this.state.product.like}</Card.Text>

        <Card.Text>
        {this.state.product.description}
        </Card.Text>
        <Button variant="primary" className='d-flex' onClick={this.addLikes}>Like</Button>
        <Button variant="primary" className='text-right'disabled>Hello</Button>
      </Card.Body>
    </Card>
    </Col>


    
  );

  
}
} 

export default Product;
