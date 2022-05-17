import React from 'react'
import Cart from '.Cart.css';

const Cart = () => ({
    render() {
  return (
        <div id="page" className="site">
	<a className="skip-link screen-reader-text" href="#content">Skip to content</a>
	<header className="header js-site-header">
	<div className="header__overlay"></div>
	<div className="wrap">
		<div className="header__container">
			<div className="logo-mobile"><a href="/" className="header__home"> <img src="/assets/images/logo-white.png" alt="" className="header__logo"/> </a></div>

			
				<nav className="main-nav">
					<ul className="main-nav__list" role="menubar">
						
							<li className="main-nav__list-item" role="menuitem">
								<a href="javascript:;" className="main-nav__list-link">
									<img src="" alt="" className="header__logo"/>
									ABOUT US
								</a>
							</li>
						
							<li class="main-nav__list-item" role="menuitem">
								<a href="javascript:;" className="main-nav__list-link">
									<img src="" alt="" className="header__logo"/>
									LOCATIONS
								</a>
							</li>
						
							<li className="main-nav__list-item main-nav__list-item--image" role="menuitem">
								<a href="javascript:;" className="header__home-logo">
									<img src="/assets/images/logo-white.png" alt="" className="header__logo"/>
									
								</a>
							</li>
						
							<li className="main-nav__list-item" role="menuitem">
								<a href="javascript:;" className="main-nav__list-link">
									<img src="" alt="" className="header__logo"/>
									SHOP
								</a>
							</li>
						
					</ul>
				</nav>
				<div className="main-nav-cart">
					<a href="javascript:;" className="main-nav-cart-link">
						cart
					</a>
					<span className="main-nav-cart-qty">3</span>
				</div>
			
			<a href="javascript:" className="site-header__hamburger hamburger js-menu-btn"><span></span></a>
		</div>
	</div>
</header>


	<div id="content" className="site-content">
		<div id="primary" className="content-area">
			<main id="main" classNames="site-main">
				
	<div className="cart">
	<div className="wrap">
		<div className="cart__container">
			<div className="cart__top">
				<div className="cart__top-btn">
					<a className="btn btn--black" href="javascript:;">BACK TO SHOP</a>
				</div>
				<div className="cart__title">
					<span className="pretitle">SHOP</span>
					<h2 className="section-title">SAME OLD SAME OLD</h2>
				</div>
				<div className="cart__top-btn">
					<a className="btn btn--black" href="javascript:;">CHECKOUT</a>
				</div>
			</div>
			
				<div className="row cart__wrapper">
					
						<div className="cart__item">
							<div className="cart__item-body-image">
								<img src="/assets/images/camera.png" alt="" className="cart__item-img"/>
							</div>
							<div className="cart__item-details">
								<span className="cart__item-name">RANGEFINDER CAMERA</span>
								<span className="cart__item-info">BRAND: ZENIT</span>
								<span className="cart__item-info">YEAR OF MANUFACTURE: 1987</span>
								<span className="cart__item-info">AMOUNT: 1</span>
							</div>
							<div className="cart__item-button">
								<a className="btn btn--sm" href="javascript:;">REMOVE FROM CART</a>
							</div>
							<div className="cart__item-price">
								<span className="cards__price">PRICE: <span>$36.5</span></span>
							</div>
						</div>
					
						<div className="cart__item">
							<div className="cart__item-body-image">
								<img src="/assets/images/phone.png" alt="" className="cart__item-img"/>
							</div>
							<div className="cart__item-details">
								<span className="cart__item-name">OLD DISK ROTARY PHONE</span>
								<span className="cart__item-info">BRAND: Stella</span>
								<span className="cart__item-info">YEAR OF MANUFACTURE: 1995</span>
								<span className="cart__item-info">AMOUNT: 1</span>
							</div>
							<div className="cart__item-button">
								<a className="btn btn--sm" href="javascript:;">REMOVE FROM CART</a>
							</div>
							<div className="cart__item-price">
								<span className="cards__price">PRICE: <span>$2</span></span>
							</div>
						</div>
					
						<div className="cart__item">
							<div className="cart__item-body-image">
								<img src="/assets/images/bicycle.png" alt="" class="cart__item-img"/>
							</div>
							<div className="cart__item-details">
								<span className="cart__item-name">RANGEFINDER CAMERA</span>
								<span className="cart__item-info">BRAND: CLAUDE BUTLER</span>
								<span className="cart__item-info">YEAR OF MANUFACTURE: 1997</span>
								<span className="cart__item-info">AMOUNT: 1</span>
							</div>
							<div className="cart__item-button">
								<a className="btn btn--sm" href="javascript:;">REMOVE FROM CART</a>
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

	<footer className="footer">
	<div className="wrap">
		<div className="footer__wrap">
			<div className="footer__logo">
				<a href="/" className="header__home">
					<img src="/assets/images/logo.png" alt=""/>
				</a>
			</div>
			<span className="copyright">Copyright © 2022 forwardslashny.com | All Rights Reserved.</span>
		</div>
	</div>
</footer>
      
    </div>
  )
}
})

export default Cart
