import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

class Product extends React.Component {
    constructor(props){
      super(props);
      this.state=props
      console.log(props)
      this.state = { product:props.product , updated:0 , likes:0};
      this.addLikes = this.addLikes.bind(this);

    }

    render() {
  return (

    <Card style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src={require('../assets/images/'+this.props.image)} />
      <Card.Body className='text-center'>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>Price :{this.props.price}</Card.Text>
        <Card.Text>Quality :{this.props.quantity}</Card.Text>
        <Card.Text>Like :{this.props.likes}</Card.Text>

        <Card.Text>
        {this.props.description}
        </Card.Text>
        <Button variant="primary" className='d-flex' onClick={this.addLikes}>Like</Button>

      </Card.Body>
    </Card>


    
  );

  
}
  addLikes(e){
    e.preventDefault();
    this.setState((oldState) => ({
      likes: oldState.likes+1 , 
      updated : oldState.updated +1,
    }));
  }
 }

export default Product;
