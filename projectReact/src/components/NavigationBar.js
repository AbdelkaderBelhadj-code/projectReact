import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import product from './Products';

function NavigationBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/product">MyStore</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/product" style={({isActive})=>({textDecoration:isActive? "underline":"black"})}>Products</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
