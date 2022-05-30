import { React, useContext } from 'react';
import { Link } from 'react-router-dom';

import './cartItem.css';
import logoWhite from '../../assets/images/logo-white.png';
import logoHeader from '../../assets/images/LogoHeader.png';
import CartContext from '../../store/cartContex';
import CartItem from '../CartItem';

const Cart = (cart, setCart) => {

  const cartCtx = useContext(CartContext);
  const totalPrice = `$${cartCtx.totalAmount.toFixed(2)}`;
  const { items } = cartCtx;
  const numberOfCartItems = cartCtx.items.length  ;
	console.log(items)
  const cartItemRemoveHandler = (event, item) => {
    event.preventDefault();
    cartCtx.removeItem(item.id);
  };
  return (
    <div>
      <div id='page' className='site'>
        <a className='skip-link screen-reader-text' href='#content'>
          Skip to content
        </a>
        <header className='header js-site-header'>
          <div className='header__overlay'></div>
          <div className='wrap'>
            <div className='header__container'>
              <div className='logo-mobile'>
                <a href='/' className='header__home'>
                  {' '}
                  <img src={logoHeader} alt='' className='header__logo' />{' '}
                </a>
              </div>
              <nav className='main-nav'>
                <ul className='main-nav__list' role='menubar'>
                  <li className='main-nav__list-item' role='menuitem'>
                    <a href='' className='main-nav__list-link'>
                      <img src={logoHeader} alt='' className='header__logo' />
                      ABOUT US
                    </a>
                  </li>
                  <li className='main-nav__list-item' role='menuitem'>
                    <a href='' className='main-nav__list-link'>
                      <img src={logoHeader} alt='' className='header__logo' />
                      LOCATIONS
                    </a>
                  </li>
                  <li
                    className='main-nav__list-item main-nav__list-item--image'
                    role='menuitem'
                  >
                    <a href='' className='header__home-logo'>
                      <img src={logoWhite} alt='' className='header__logo' />
                    </a>
                  </li>
                  <li className='main-nav__list-item' role='menuitem'>
                    <a href='' className='main-nav__list-link'>
                      <img src={logoHeader} alt='' className='header__logo' />
                    </a>
                  </li>
                </ul>
              </nav>
              <div className='main-nav-cart'>
                <a href='' className='main-nav-cart-link'>
                  Cart
                </a>
                <span className='main-nav-cart-qty'>{numberOfCartItems}</span>
              </div>
              <a
                href=''
                className='site-header__hamburger hamburger js-menu-btn'
              >
                <span></span>
              </a>
            </div>
          </div>
        </header>
        <div id='content' className='site-content'>
          <div id='primary' className='content-area'>
            <main id='main' className='site-main'>
              <div className='cart'>
                <div className='wrap'>
                  <div className='cart__container'>
                    <div className='cart__top'>
                      <div className='cart__top-btn'>
                        <Link className='btn btn--black' to='/'>
                          BACK TO SHOP
                        </Link>
                      </div>
                      <div className='cart__title'>
                        <span className='pretitle'> SHOP</span>
                        <h2 className='section-title'>SAME OLD SAME OLD</h2>
                        <h3 className='total-price'>
                          Total price :{totalPrice}
                        </h3>
                      </div>
                      <div className='cart__top-btn'>
                        <Link className='btn btn--black' to='/checkout'>
                          CHECKOUT
                        </Link>
                      </div>
                    </div>
                    {items.map((item) => {
                      return <CartItem key={item.id} item={item} remove={cartItemRemoveHandler} />;
                    })}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;