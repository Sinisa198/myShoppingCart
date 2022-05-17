import React from 'react'

const Cart = () => ({  
    render() {
  return (
	  <div>
	<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content">Skip to content</a>
	<header class="header js-site-header">
	<div class="header__overlay"></div>
	<div class="wrap">
		<div class="header__container">
			<div class="logo-mobile"><a href="/" class="header__home"> <img src="/assets/images/logo-white.png" alt="" class="header__logo"/> </a></div>

			
				<nav class="main-nav">
					<ul class="main-nav__list" role="menubar">
						
							<li class="main-nav__list-item" role="menuitem">
								<a href="javascript:;" class="main-nav__list-link">
									<img src="" alt="" class="header__logo"/>
									ABOUT US
								</a>
							</li>
						
							<li class="main-nav__list-item" role="menuitem">
								<a href="javascript:;" class="main-nav__list-link">
									<img src="" alt="" class="header__logo"/>
									LOCATIONS
								</a>
							</li>
						
							<li class="main-nav__list-item main-nav__list-item--image" role="menuitem">
								<a href="javascript:;" class="header__home-logo">
									<img src="/assets/images/logo-white.png" alt="" class="header__logo"/>
									
								</a>
							</li>
						
							<li class="main-nav__list-item" role="menuitem">
								<a href="javascript:;" class="main-nav__list-link">
									<img src="" alt="" class="header__logo"/>
									SHOP
								</a>
							</li>
						
					</ul>
				</nav>
				<div class="main-nav-cart">
					<a href="javascript:;" class="main-nav-cart-link">
						cart
					</a>
					<span class="main-nav-cart-qty">3</span>
				</div>
			
			<a href="javascript:" class="site-header__hamburger hamburger js-menu-btn"><span></span></a>
		</div>
	</div>
</header>


	<div id="content" class="site-content">
		<div id="primary" class="content-area">
			<main id="main" class="site-main">
				
	<div class="cart">
	<div class="wrap">
		<div class="cart__container">
			<div class="cart__top">
				<div class="cart__top-btn">
					<a class="btn btn--black" href="javascript:;">BACK TO SHOP</a>
				</div>
				<div class="cart__title">
					<span class="pretitle">SHOP</span>
					<h2 class="section-title">SAME OLD SAME OLD</h2>
				</div>
				<div class="cart__top-btn">
					<a class="btn btn--black" href="javascript:;">CHECKOUT</a>
				</div>
			</div>
			
				<div class="row cart__wrapper">
					
						<div class="cart__item">
							<div class="cart__item-body-image">
								<img src="/assets/images/camera.png" alt="" class="cart__item-img"/>
							</div>
							<div class="cart__item-details">
								<span class="cart__item-name">RANGEFINDER CAMERA</span>
								<span class="cart__item-info">BRAND: ZENIT</span>
								<span class="cart__item-info">YEAR OF MANUFACTURE: 1987</span>
								<span class="cart__item-info">AMOUNT: 1</span>
							</div>
							<div class="cart__item-button">
								<a class="btn btn--sm" href="javascript:;">REMOVE FROM CART</a>
							</div>
							<div class="cart__item-price">
								<span class="cards__price">PRICE: <span>$36.5</span></span>
							</div>
						</div>
					
						<div class="cart__item">
							<div class="cart__item-body-image">
								<img src="/assets/images/phone.png" alt="" class="cart__item-img"/>
							</div>
							<div class="cart__item-details">
								<span class="cart__item-name">OLD DISK ROTARY PHONE</span>
								<span class="cart__item-info">BRAND: Stella</span>
								<span class="cart__item-info">YEAR OF MANUFACTURE: 1995</span>
								<span class="cart__item-info">AMOUNT: 1</span>
							</div>
							<div class="cart__item-button">
								<a class="btn btn--sm" href="javascript:;">REMOVE FROM CART</a>
							</div>
							<div class="cart__item-price">
								<span class="cards__price">PRICE: <span>$2</span></span>
							</div>
						</div>
					
						<div class="cart__item">
							<div class="cart__item-body-image">
								<img src="/assets/images/bicycle.png" alt="" class="cart__item-img"/>
							</div>
							<div class="cart__item-details">
								<span class="cart__item-name">RANGEFINDER CAMERA</span>
								<span class="cart__item-info">BRAND: CLAUDE BUTLER</span>
								<span class="cart__item-info">YEAR OF MANUFACTURE: 1997</span>
								<span class="cart__item-info">AMOUNT: 1</span>
							</div>
							<div class="cart__item-button">
								<a class="btn btn--sm" href="javascript:;">REMOVE FROM CART</a>
							</div>
							<div class="cart__item-price">
								<span class="cards__price">PRICE: <span>$10</span></span>
							</div>
						</div>
					
				</div>
			
		</div>
	</div>
</div>


			</main>
		</div>
	</div>

	<footer class="footer">
	<div class="wrap">
		<div class="footer__wrap">
			<div class="footer__logo">
				<a href="/" class="header__home">
					<img src="/assets/images/logo.png" alt=""/>
				</a>
			</div>
			<span class="copyright">Copyright © 2022 forwardslashny.com | All Rights Reserved.</span>
		</div>
	</div>
</footer>
</div>
</div>
  );
	}})
  
export default Cart
