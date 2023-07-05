import React from 'react'
import { Navbar, Nav, Container} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const AppNavBar = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Shopping App</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/cart"> <FiShoppingCart /> Cart {`(0)`} </Link>
      </Container>
    </Navbar>
    </div>
  )
}

export default AppNavBar