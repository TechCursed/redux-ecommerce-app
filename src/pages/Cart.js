import React from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Cart = () => {

  const products = useSelector( state => state.cart)

  return (
   <div>
      {
        products.map((product) => {
         return <Container className='justify-content-center mt-5 pt-3'>
          <h3 className='mt-2 mb-2'>Your Cart Items </h3>
          <div class="card mb-3 w-60" id={product.id}>
          <div class="row no-gutters">
            <div class="col-md-4" >
              <img src={product.image} class="card-img w-50 h-30 p-3" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title ">{product.title}</h5>
                <h7 class="card-text mb-4"> Ratings : ⭐ {product.rating.rate}</h7>
                <h6 class="card-text mb-3"> Price : $ {product.price}</h6>
                <button type="button mb-3" class="btn btn-danger w-20">Remove</button>
              </div>
            </div>
          </div>
        </div>  
        </Container> 
        })
      }
   </div>
  )
}

export default Cart