import { Link } from 'react-router-dom';
import CartContext from '../store/cartContex';
import {useContext} from 'react'

import logoHeader from '../assets/images/LogoHeader.png';
import logoFooter from '../assets/images/LogoFooter.png';
import CartProvider from '../store/cartProvider';
import './Cart/cartItem.css'
import NavBarForCheckout from './NavBarForCheckout';

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
        <footer className='footer'>
          <div className='wrap'>
            <div className='footer__wrap'>
              <div className='footer__logo'>
                <Link to='/' className='header__home'>
                  <img src={logoFooter} alt='' />
                </Link>
              </div>
              <div className='copyright'>
                <span>Copyright © 2022 forwardslashny.com</span>{' '}
                <span className='copyright-line'>|</span>{' '}
                <span>All Rights Reserved.</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default Checkout;

