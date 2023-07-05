import React from 'react'
import { Navbar, Container} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const AppNavBar = () => {
  return (
    <div>
    <Navbar className="bg-white shadow-sm mb-3 fixed-top">
      <Container>
        <Navbar.Brand href="#home">Shopping App</Navbar.Brand>
        <Link to="/" style={{ textDecoration: 'none', color:'black', fontSize:'1.5rem'} }>Home</Link>
        <Link to="/cart" style={{ textDecoration: 'none', color:'black', fontSize:'1.5rem'}} > <FiShoppingCart /> {`(0)`} </Link>
      </Container>
    </Navbar>
    </div>
  )
}

export default AppNavBar