import React from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { remove } from '../store/cartSlice';
import Button from 'react-bootstrap/Button';

const Cart = () => {

  const products = useSelector( state => state.cart)
  let Subtotal = 0;
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  }
  
  const totalCartValue = () => {
    products.forEach((product) =>
      Subtotal = Subtotal + (product.price)
    )
    console.log(Subtotal);
  }

  totalCartValue();

  if(!Subtotal){
    return <Container className='mt-5 pt-3'>
      <h2>Your cart is empty</h2>
      </Container>
  }

  return (
   <div className='mt-5 pt-3'>
    
        <Container>
        <h3 className='mt-2 mb-2'>Your Cart Items </h3>
        <h2>Subtotal : $ {Subtotal} </h2>
        <Button variant="primary mb-2">Shop More</Button>{' '}
        <Button variant="secondary mb-2">Proceed to Checkout</Button>{' '}
        </Container>

      {
        products.map((product) => {
         return <Container className='justify-content-center'>
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
                <button type="button mb-3" class="btn btn-danger w-20" onClick={ () => handleRemove(product.id)}>Remove</button>
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