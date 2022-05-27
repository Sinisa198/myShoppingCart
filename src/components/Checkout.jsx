import React from 'react'
import { Link } from 'react-router-dom'


import logoHeader from '../assets/images/LogoHeader.png'
import logoFooter from '../assets/images/LogoFooter.png'
import './Cart/cartItem.css'
import CartProvider from '../store/cartProvider'

function Checkout(item) {
  
  return (
		  <CartProvider>
      <div id="page" className="site">
      <a href=""></a>
    <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
    <header className="header js-site-header">
    <div className="header__overlay"></div>
    <div className="wrap">
      <div className="header__container">
        <div className="header__home-logo"><a href="/" className ="header__home"> <img src={logoHeader} alt="" className="header__logo"/> </a></div>
          <nav className="main-nav">
            <ul className="main-nav__list" role="menubar">
                <li className="main-nav__list-item" role="menuitem">
                  <a href="" className="main-nav__list-link">
                    ABOUT US
                  </a>
                </li>
                <li className="main-nav__list-item" role="menuitem">
                  <a href="" className="main-nav__list-link">
                    LOCATIONS
                  </a>
                </li>
                <li className="main-nav__list-item" role="menuitem">
                  <Link href="" className="main-nav__list-link"  to="/">
                    SHOP
                  </Link>
                </li>
            </ul>
          </nav>
          <div className="main-nav-cart">
            
              <Link  className="main-nav-cart-link" to="/cartItem" >Cart</Link>
            <span className="main-nav-cart-qty"></span>
          </div>
        
        <a href="" className="site-header__hamburger hamburger js-menu-btn"><span></span></a>
      </div>
    </div>
  </header>
  
    <div id="content" className="site-content">
      <div id="primary" className="content-area">
        <main id="main" className="site-main">
    <div className="cards">
    <div className="wrap">
      <div className="cards__container">
        <span className="pretitle">SHOP</span>
        <h2 className="section-title">SAME OLD SAME OLD</h2>
        <h1 className="checkout_total_price">Total price : {item.totalPrice}</h1>
          <div className="row cards__wrapper">
  
            
        
        </div>
      </div>
    </div>
  </div>
        </main>
      </div>
    </div>
    <div>
      </div>
    <footer className="footer">
    <div className="wrap">
      <div className="footer__wrap">
        <div className="footer__logo">
          <a href="/" className="header__home">
            <img src={logoFooter} alt=""/>
          </a>
        </div>
        <div className="copyright"><span>Copyright © 2022 forwardslashny.com</span> <span className="copyright-line">|</span> <span>All Rights Reserved.</span></div>
      </div>
    </div>
  </footer>
  </div>
  </CartProvider>
    );
  };
    
  


export default Checkout
