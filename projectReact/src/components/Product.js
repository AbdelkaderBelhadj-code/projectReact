import React, { useState } from "react";
import {Alert , Button , Row, Container} from "react-bootstrap";



const Product = (props) => {
    const[showWelcomeMessage,setShowWelcomeMessage] = useState(false);
    let img = require(`../assets/images/${props.image}`);
    const [showAlert , setShowAlert]= useState(false);
    const [count, setCount] = useState(0);
    const [quantity, setQuantity] = useState(props.quantity);
    const [isBestProduct, setIsBestProduct] = useState(false);
    const [like, setLikes] = useState(0);



    const handleLike = () => {
        // Code pour ajouter un "J'aime" à un produit spécifique
        setCount(count + 1);
        if (like + 1 > 5) {
            setIsBestProduct(true);
          }
      };
    const handleBuy = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            
          }
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);

      };

      return (
        <div>
         <Container>
         <Row>  
        <div >
            <img src={img} alt={props.name}  style={{ width: "200px", height: "200px", objectFit: "cover" }}/>        
            <h2>title:{props.title}</h2>
            <p>Price: {props.price}</p>
            <p>Description: {props.description}</p>  
            <p>quantity : {quantity} </p>
            <div>
            <p>Like : {count} </p>
            <div style={{ display: "flex" }}> 
            <Button variant="primary" onClick={handleLike}>
            like
          </Button>
          </div>
          <Button variant="primary" disabled={quantity === 0} onClick={handleBuy} style={{ backgroundColor: "skyblue", color: "white" }}  >
            buy
          </Button>
         
          </div>
          
           
        </div></Row></Container>{showAlert && (
            <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
           you bought an item 
            </Alert>
          )}
        </div>
      );
    };

    export default Product;