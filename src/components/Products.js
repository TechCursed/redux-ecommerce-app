import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Button, Card, Row, Col } from "react-bootstrap"
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Products = () => {
  
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async() => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data)
        // console.log(data);
    }
    fetchProducts();
  }, [])
  
  
  const handleAdd = (product) =>{
     dispatch(add(product));
  }


  return (
    <Container> 
    <h1 class="text-center mb-4 mt-5 pt-3">Explore Our Products</h1>
    <Row md={2} xs={1} lg={4} className='g-3'>
    {
      
      products.map(product => (
      <Col key={product.id}>
        {
        <Card className="d-flex h-100">
        <Card.Img variant="top" src={product.image} height="200px" style={{objectFit: "contain"}} />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex mb-4">
                <span className="ms-2 text-muted">{product.title}</span>
                <span  className="fs-2"> ${product.price}</span>
            </Card.Title>
            
            <Button className="w-100 mt-auto" onClick={()=>handleAdd(product)}>Add to Cart</Button>
        </Card.Body>
       </Card>    
      }   
          </Col>
      ))
     }
   </Row>
   </Container>
  )
}
  
export default Products