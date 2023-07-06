import React from 'react'
import { Navbar, Container} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import '../App.css';

const AppNavBar = () => {

  const items = useSelector((state) => state.cart);

  return (
    <div>
    <Navbar className="appnav shadow-sm mb-3 fixed-top" >
      <Container>
        <Link to="/" style={{ textDecoration: 'none', color:'black', fontSize:'1.5rem'}}>Shop App</Link>
        <Link to="/products" style={{ textDecoration: 'none', color:'black', fontSize:'1.5rem'}}>Products</Link>
        <Link to="/cart" style={{ textDecoration: 'none', color:'black', fontSize:'1.5rem'}} > <FiShoppingCart /> {items.length} </Link>
      </Container>
    </Navbar>
    </div>
  )
}

export default AppNavBar