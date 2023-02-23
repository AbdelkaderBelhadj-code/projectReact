import { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Products from './Products';
function NavigationBar() {

  return (

 
        

    <Navbar bg="light" variant="light">

    <Container>
    
    <Navbar.Brand to="/products">MyStore</Navbar.Brand>
    
    <Nav className="me-auto">
    
    <Nav.Link as={NavLink} to="/products" style={({isActive})=>({textDecoration:isActive&&'underline'})}>Products</Nav.Link>
    
    </Nav>
    
    </Container>
    
    </Navbar>
    
  );
}

export default NavigationBar;