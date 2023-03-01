
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
import { useState } from "react";
import { Alert } from 'react-bootstrap';

function Product ({prod}){
   const [product,setProduct] = useState(prod);
   const [show,setShow] = useState(false);

   const className=product.like>5 ? "text-center bestProduct":"text-center"
   const  addLike = ()=>{
    setProduct({...product,like:product.like +1});
   };
   const buyProduct = () => {
    setProduct({...product,quantity:product.quantity -1});

    setShow(true);
    setTimeout(()=>{
      setShow(false);
    },2000);
   };

   //const buyProducts = ()=>{
   // setProduct({...product,quantity:product.quantity-1});
   //}
    // constructor(props){
    //     super(props);
    //     this.state =  {like : this.props.product.like,quantity:this.props.product.quantity, alertVisible:false};
    //     this.addLikes = this.addLikes.bind(this);
    //     this.buyProducts = this.buyProducts.bind(this);
    //     this.handleVisible = this.handleVisible.bind(this);
    // }

    // addLikes(){
    //     this.setState((oldState)=>({
    //         like : oldState.like +1
    //     }));
    // }

    

    // handleVisible = () => { 
    //     this.setState({alertVisible:true})
    //     setTimeout(() => { 
    //         this.setState({alertVisible:false})
    //     }, 2000);
    // } 

    // render(){

        return (<>
         <Row>
            <Card style={{ width: '25rem' , minHeight:'650px',display:'flex',padding:'20px'}} className={className}>
            <Card.Img variant="top" src={require('../assets/images/'+product.img)} />
            <Card.Body>
            <Link  to={`/product/${product.id}`} replace={true} ><Card.Title>{product.name}</Card.Title> </Link>
              <Card.Text>
                {product.description}
              </Card.Text>
              
              <Card.Text>
                {prod.price} DT
              </Card.Text>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Button variant="primary" onClick={addLike} style={{margin :'15px'}} >Like</Button> <small style={{marginRight:'25px'}}>{product.like} Likes</small>
              <Button variant="primary" onClick={buyProduct} disabled={product.quantity === 0} style={{margin :'15px'}}>Buy</Button> <small>{product.quantity} Products</small>
              </div>
            </Card.Body>
            {/* <Alert variant="primary" show={this.state?.alertVisible}  >you bought an Item !!!!</Alert>     */}
            <Alert show={show} variant="primary">YOU BROUGHT THE ITEM NAMED {prod.name}</Alert>
          </Card>
          </Row>
          </>
        );
    // }
}
export default Product;