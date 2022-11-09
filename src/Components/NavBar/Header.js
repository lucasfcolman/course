import React from "react"
import CartWidget from "../CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = (greeting) =>{
    return (
        <>
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand href="#home">{greeting}</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home"><CartWidget/>Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <CartWidget/>
            </Container>
          </Navbar>
          
        </>
      );
    }

export default Header;