import React from 'react';
import { useState} from 'react';
import logoHeader from '../../assets/images/LogoHeader.png'
import favorite from '../../assets/images/favorite.png'
import bicycle from '../../assets/images/bicycle.png'
import tv from '../../assets/images/tv.png'
import logoFooter from '../../assets/images/LogoFooter.png'
import phone from '../../assets/images/phone.png'
import horse from '../../assets/images/horse.png'
import favoriteBorder from '../../assets/images/favorite-border.png'
import {Link} from 'react-router-dom'
import ProductItem from './ProductItem';

	export const HomePage = (props) => {
		
  
	const prod = [{
			id: '1',
			name: 'ROCKING HORSE',
			price: '$4994',
			image: '../../assets/images/horse.png'
		},
		  {
			id: '2',
			name: 'OLD DISK ROTARY PHONE',
			price: '$2',
			image : '../../assets/images/phone.png'
		  },
		  {
			id: '3',
			name: 'FORD',
			price: '$4994',
			image :  '../../assets/images/ford.png'
		  },
		  {
			id: '4',
			name:'BICYCLE',
			price: '$10.9'
		  },
		  {
			id : '5',
			name : 'TV',
			price : '$22.3',
			image :  '../../assets/images/ford.png'
		  },
		  {
			  id: '6',
			  name: 'RANGEFINDER CAMERA',
			  price: '$36.5',
			  image : '../../assets/images/ford.png'
		  }
		 ]
		
 	 return (
		  
		  
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
								<a href="" className="main-nav__list-link">
									SHOP
								</a>
							</li>
					</ul>
				</nav>
				<div className="main-nav-cart">
					
						<Link  className="main-nav-cart-link" to="/cartItem">Cart</Link>
					<span className="main-nav-cart-qty">2</span>
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

			
				<div className="row cards__wrapper">
				{prod.map(item => (<ProductItem key = {item.id} name={item.name} id={item.id} price={item.price} image={item.image} />))}
				
			
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
		
  );
};
export default HomePage;
