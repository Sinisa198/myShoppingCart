import React from 'react'
import {Link} from 'react-router-dom'
import './cart/cartItem.css'


function Checkout() {
  return (
    <div>
      <h1>Hello there!</h1>
      <Link  className='back_to_cart' to="/cartItem">Back to cart</Link>
    </div>
    
  )
}

export default Checkout
