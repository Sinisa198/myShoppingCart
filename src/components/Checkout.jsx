import { Link } from 'react-router-dom';
import CartContext from '../store/CartContex';
import {useContext} from 'react'

import CartProvider from '../store/CartProvider';
import './cart/cartItem.css'
import NavBarForCheckout from './navBars/NavBarForCheckout'
import Footer from './Footer';

const Checkout = () =>{
  const cartCtx = useContext(CartContext);
  const totalPrice = `$${cartCtx.totalAmount.toFixed(2)}`;
  const { items } = cartCtx;
  const numberOfCartItems = items.length;

  return (

    <CartProvider>
      <div id='page' className='site'>
        <Link to=''></Link>
        <Link className='skip-link screen-reader-text' to='#content'>
          Skip to content
        </Link>
        <NavBarForCheckout />

        <div id='content' className='site-content'>
          <div id='primary' className='content-area'>
            <main id='main' className='site-main'>
              <div className='cards'>
                <div className='wrap'>
                  <div className='cards__container'>
                    <span className='pretitle'>SHOP</span>
                    <h2 className='section-title'>SAME OLD SAME OLD</h2>
                    <h1 className='checkout_total_price'>
                      Total price : {totalPrice}
                    </h1>
                    <div className='row cards__wrapper'></div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div></div>
       <Footer />
      </div>
    </CartProvider>
  );
}

export default Checkout;

