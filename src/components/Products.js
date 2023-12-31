import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Button, Card, Row, Col } from "react-bootstrap"
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import LoadingSpinnerComponent from 'react-spinners-components';
import toast from 'react-hot-toast';

const Products = () => {
  
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState("products")
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const fetchProducts = async() => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
        setLoader(false);
    }
    fetchProducts();
  }, [])

  const getAll = async() => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data)
    setCategories('products')

  }

  const getElectronics = async() => {
    const res = await fetch('https://fakestoreapi.com/products/category/electronics');
    const data = await res.json();
    setProducts(data);
    setCategories('electronics')
}

const getJewelery = async() => {
  const res = await fetch('https://fakestoreapi.com/products/category/jewelery');
  const data = await res.json();
  setProducts(data);
  setCategories('jewelery')
}

const sortAscending = async() => {
  if(categories==='jewelery')
  {
    const res = await fetch('https://fakestoreapi.com/products/category/jewelery?sort=aesc');
    const data = await res.json();
    setProducts(data)
  }
  else if(categories==='electronics'){
    const res = await fetch('https://fakestoreapi.com/products/category/electronics?sort=aesc');
    const data = await res.json();
    setProducts(data)
  }
  else{
    const res = await fetch('https://fakestoreapi.com/products?sort=aesc');
    const data = await res.json();
    setProducts(data)    
  }
}

const sortDescending = async() => {
  if(categories==='jewelery')
  {
    const res = await fetch('https://fakestoreapi.com/products/category/jewelery?sort=desc');
    const data = await res.json();
    setProducts(data)
  }
  else if(categories==='electronics'){
    const res = await fetch('https://fakestoreapi.com/products/category/electronics?sort=desc');
    const data = await res.json();
    setProducts(data)
  }
  else{
    const res = await fetch('https://fakestoreapi.com/products?sort=desc');
    const data = await res.json();
    setProducts(data)    
  }
}

const displayLoginNotification = () => {
  toast.success("added to cart!");
} 

  const handleAdd = (product) =>{
     dispatch(add(product));
     displayLoginNotification();
  }
  
  if(loader)
  {
        return <div className='d-flex justify-content-center flex-column' style={{marginTop:"250px"}}>
        <h2 style={{textAlign:'center'}}>Loading...</h2>
        <LoadingSpinnerComponent type={ 'Infinity' } color={ '#0D6EFD' } size={ '150px' } />
      </div>    
  }
  return (
    <Container> 
    <h1 class="text-center mb-4 mt-5 pt-3">Explore Our Products</h1>
     
     {/* Categories button container */}
    <Container className='d-flex justify-content-center mb-4'>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
      <button type="button" class="btn btn btn-outline-dark" onClick={getAll}>All Products</button>
      <button type="button" class="btn btn btn-outline-dark" onClick={getElectronics}>Electronics</button>
      <button type="button" class="btn btn btn-outline-dark" onClick={getJewelery}>Jewelery</button>
      </div>
    </Container>

    {/* Sort radio container */}
    <Container className='d-flex justify-content-center mb-4'>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
      <button type="button" class="btn btn-outline-primary btn-sm" onClick={() => sortDescending()} >Oldest</button>
      <button type="button" class="btn btn-outline-primary btn-sm" onClick={() => sortAscending()}>Newest</button>
      </div>
    </Container>
     
     {/* Rows and Colums to render Product Cards */}

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
                <span  className="fs-4">{ product.price}</span>
            </Card.Title>
            
            <Button className="w-100 mt-auto" onClick={() => handleAdd(product)}> Add to Cart </Button>
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