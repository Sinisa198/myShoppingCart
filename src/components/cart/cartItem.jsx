import React from 'react'
import './cartItem.css';
import logoWhite from '../../assets/images/logo-white.png'
import logoHeader from '../../assets/images/LogoHeader.png'
import bicycle from '../../assets/images/bicycle.png'
import camera from '../../assets/images/camera.png'
import phone from '../../assets/images/phone.png'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom';
import HomePage from '../Home/HomePage';

const Cart = () => {  
	const handleClick = () =>{
	console.log('helldsadasdo')
	}
	const removeItem = (id) => {
		console.log('agfadgaga')
	}
  return (
	
	  <div>
	<div id="page" className="site">
	<a className="skip-link screen-reader-text" href="#content">Skip to content</a>
	<header className="header js-site-header">
	<div className="header__overlay"></div>
	<div className="wrap">
		<div className="header__container">
			<div className="logo-mobile"><a href="/" className="header__home"> <img src={logoHeader} alt="" className="header__logo"/> </a></div>

				
				<nav className="main-nav">
					<ul className="main-nav__list" role="menubar">
						
							<li className="main-nav__list-item" role="menuitem">
								<a href="" className="main-nav__list-link">
									<img src={logoHeader} alt="" className="header__logo"/>
									ABOUT US
								</a>
							</li>
						
							<li className="main-nav__list-item" role="menuitem">
								<a href="" className="main-nav__list-link">
									<img src={logoHeader} alt="" className="header__logo"/>
									LOCATIONS
								</a>
							</li>
						
							<li className="main-nav__list-item main-nav__list-item--image" role="menuitem">
								<a href="" className="header__home-logo">
									<img src={logoWhite} alt="" className="header__logo"/>
									
								</a>
							</li>
						
							<li className="main-nav__list-item" role="menuitem">
								<a href="" className="main-nav__list-link">
									<img src={logoHeader} alt="" className="header__logo"/>
									<Link  className="main-nav__list-link" to="/">SHOP</Link>
								</a>
							</li>
						
					</ul>
				</nav>
				<div className="main-nav-cart">
					<a href="" className="main-nav-cart-link">
						Cart
					</a>
					<span className="main-nav-cart-qty">3</span>
				</div>
			
			<a href="" className="site-header__hamburger hamburger js-menu-btn"><span></span></a>
		</div>
	</div>
</header>


	<div id="content" className="site-content">
		<div id="primary" className="content-area">
			<main id="main" className="site-main">
				
	<div className="cart">
	<div className="wrap">
		<div className="cart__container">
			<div className="cart__top">
				<div className="cart__top-btn">
					<Link className="btn btn--black" to='/'>BACK TO SHOP</Link>
				</div>
				<div className="cart__title">
					<span className="pretitle">	SHOP</span>
					<h2 className="section-title">SAME OLD SAME OLD</h2>
				</div>
				<div className="cart__top-btn">
					<a className="btn btn--black" href="">CHECKOUT</a>
				</div>
			</div>
			
				<div className="row cart__wrapper">
					
						<div className="cart__item">
							<div className="cart__item-body-image">
								<img src={camera} alt="" className="cart__item-img"/>
							</div>
							<div className="cart__item-details">
								<span className="cart__item-name">RANGEFINDER CAMERA</span>
								<span className="cart__item-info">BRAND: ZENIT</span>
								<span className="cart__item-info">YEAR OF MANUFACTURE: 1987</span>
								<span className="cart__item-info">AMOUNT: 1</span>
							</div>
							<div className="cart__item-button">
								<a className="btn btn--sm" href="" onClick ={removeItem}>REMOVE FROM CART</a>
							</div>
							<div className="cart__item-price">
								<span className="cards__price">PRICE: <span>$36.5</span></span>
							</div>
						</div>
					
						<div className="cart__item">
							<div className="cart__item-body-image">
								<img src={phone} alt="" className="cart__item-img"/>
							</div>
							<div className="cart__item-details">
								<span className="cart__item-name">OLD DISK ROTARY PHONE</span>
								<span className="cart__item-info">BRAND: Stella</span>
								<span className="cart__item-info">YEAR OF MANUFACTURE: 1995</span>
								<span className="cart__item-info">AMOUNT: 1</span>
							</div>
							<div className="cart__item-button">
								<a className="btn btn--sm" href="" onClick ={removeItem}>REMOVE FROM CART</a>
							</div>
							<div className="cart__item-price">
								<span className="cards__price">PRICE: <span>$2</span></span>
							</div>
						</div>
					
						<div className="cart__item">
							<div className="cart__item-body-image">
								<img src={bicycle} alt="" className="cart__item-img"/>
							</div>
							<div className="cart__item-details">
								<span className="cart__item-name">RANGEFINDER CAMERA</span>
								<span className="cart__item-info">BRAND: CLAUDE BUTLER</span>
								<span className="cart__item-info">YEAR OF MANUFACTURE: 1997</span>
								<span className="cart__item-info">AMOUNT: 1</span>
							</div>
							<div className="cart__item-button">
								<a className="btn btn--sm" href="" onClick ={removeItem} >REMOVE FROM CART</a>
							</div>
							<div className="cart__item-price">
								<span className="cards__price">PRICE: <span>$10</span></span>
							</div>
						</div>
					
				</div>
			
		</div>
	</div>
</div>


			</main>
		</div>
	</div>

	
</div>
</div>
)}

export default Cart
