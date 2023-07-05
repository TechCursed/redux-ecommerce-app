import React, { useEffect } from 'react';
import { useState } from 'react';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async() => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        // setProducts(data)
        console.log(data);
        
        // <p>{data.title}</p>
    }
    fetchProducts();
  }, [])
  


  return (
    <div>Products</div>
  )
}

export default Products