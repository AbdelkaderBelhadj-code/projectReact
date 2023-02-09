import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

class Product extends React.Component {
    

    render() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.image} />
      <Card.Body>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Text>
        {this.props.description}
        </Card.Text>
        <Button variant="primary">Goo somewhere</Button>
      </Card.Body>
    </Card>
  );

}
}

export default Product;