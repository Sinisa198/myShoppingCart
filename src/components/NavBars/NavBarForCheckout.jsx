import React from 'react'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import logoHeader from '../../assets/images/LogoHeader.png'
import CartContext from '../../store/CartContex'

const NavBarForCheckout = () => {

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const numberOfCartItems = items.length;
  return (
    <header className='header js-site-header'>
    <div className='header__overlay'></div>
    <div className='wrap'>
      <div className='header__container'>
        <div className='header__home-logo'>
          <Link to='/' className='header__home'>
            {' '}
            <img src={logoHeader} alt='' className='header__logo' />{' '}
          </Link>
        </div>
        <nav className='main-nav'>
          <ul className='main-nav__list' role='menubar'>
            <li className='main-nav__list-item' role='menuitem'>
              <Link to='' className='main-nav__list-link'>
                ABOUT US
              </Link>
            </li>
            <li className='main-nav__list-item' role='menuitem'>
              <Link to='' className='main-nav__list-link'>
                LOCATIONS
              </Link>
            </li>
            <li className='main-nav__list-item' role='menuitem'>
              <Link  className='main-nav__list-link' to='/'>
                SHOP
              </Link>
            </li>
          </ul>
        </nav>
        <div className='main-nav-cart'>
          <Link className='main-nav-cart-link' to='/cart'>
            Cart
          </Link>
          <span className='main-nav-cart-qty'>
          {numberOfCartItems}
          </span>
        </div>

        <Link
          to=''
          className='site-header__hamburger hamburger js-menu-btn'
        >
          <span>2</span>
        </Link>
      </div>
    </div>
  </header>
  )
}

export default NavBarForCheckout
