import React from 'react'
import logoWhite from '../../assets/images/logo-white.png'
import cartItem from './cartItem'
import logoHeader from '../../assets/images/LogoHeader.png'
import bicycle from '../../assets/images/bicycle.png'
import camera from '../../assets/images/camera.png'
import phone from '../../assets/images/phone.png'
import logo from '../../assets/images/logo.png'
import ProductItem  from '../Home/ProductItem';
import {Link} from 'react'
import { useState, useContext } from 'react'
import productInCart from './cartItem'
import horse from '../../assets/images/horse.png'
import car from '../../assets/images/car.png'
import tv from '../../assets/images/tv.png'

 const addCart = ({name,price,image,amount,year}) => {

	const productsInCart = [{
		id: '1',
		name: 'ROCKING HORSE',
		price: '$4994',
		year : "1993",
		amount : "1",
		image : horse
	},
	  {
		id: '2',
		name: 'OLD DISK ROTARY PHONE',
		price: '$2',
		year : "1974",
		amount : "1",
		image : phone
	  },
	  {
		id: '3',
		name: 'FORD',
		price: '$4994',
		year : "1987",
		amount : "1",
		image: car
	  },
	  {
		id: '4',
		name:'BICYCLE',
		price: '$10.9',
		year : "1997",
		amount : "1",
		image: bicycle
	  },
	  {
		id: '5',
		name:'TV',
		price: '$22.3',
		year : "1991",
		amount : "1",
		image: tv
	  }, {
		id: '4',
		name:'Rangefinder camera',
		price: '$36.5',
		year : "1990",
		amount : "1",
		image: camera
	  }]

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
					<span className="main-nav-cart-qty"></span>
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
          <h1 className="cart__title">Total amount: $ </h1>

				</div>
				<div className="cart__top-btn">
					<a className="btn btn--black" href="">CHECKOUT</a>
				</div>
			</div>
			
				<div className="row cart__wrapper">

						{productsInCart.map(item => 
						<cartItem key = {item.id} name={item.name} id={item.id} price={item.price}
						 year={item.year} amount={item.amount} image={item.image}/>)}


						<div className="cart__item">
							<div className="cart__item-body-image">
								<img src={image} alt="" className="cart__item-img"/>
							</div>
							<div className="cart__item-details">
								<span className="cart__item-name">RANGEFINDER CAMERA</span>
								<span className="cart__item-info">BRAND: CLAUDE BUTLER</span>
								<span className="cart__item-info">YEAR OF MANUFACTURE: 1997</span>
								<span className="cart__item-info">AMOUNT: 1</span>

								
							</div>
							<div className="cart__item-button">
								<a className="btn btn--sm" href="" >REMOVE FROM CART</a>
							</div>
							<div className="cart__item-price">
								<span className="cards__price">PRICE: <span></span></span>
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
  )
}
  


export default addCart
