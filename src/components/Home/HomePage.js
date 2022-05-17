import { render } from '@testing-library/react'
import React from 'react';



const HomePage = () => {
   
  return (
    <div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content">Skip to content</a>
	<header class="header js-site-header">
	<div class="header__overlay"></div>
	<div class="wrap">
		<div class="header__container">
			<div class="header__home-logo"><a href="/" class="header__home"> <img src="/assets/images/LogoHeader.png" alt="" class="header__logo"/> </a></div>

			
				
				<div class="main-nav-cart">
					<a href="" class="main-nav-cart-link">
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
				
	
	<div class="cards">
	<div class="wrap">
		<div class="cards__container">
			<h2 class="section-title">SAME OLD SAME OLD</h2>

			
				<div class="row cards__wrapper">
					
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="cards__item">
								<div class="cards__item-body">
									<div class="cards__item-body-image">
										<img src="/assets/images/camera.png" alt="" class="cards__item-img"/>
									</div>
									<span class="cards__item-body-name">RANGEFINDER CAMERA</span>
									<span class="cards__item-body-price">$36.5</span>
								</div>
								<div class="cards__item-footer">
									<div class="quantity">
										<input class="qty" type="number" step="1" min="1" value="0" />
										<div class="quantity__button">
											<button class="quantity-add js-inc quantity-button">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
												</svg>
											</button>
											<button class="quantity-remove js-dec quantity-button">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
												</svg>
											</button>
										</div>
									</div>
									<a class="add-to-cart btn" href="javascript:;">ADD TO CART</a>
									<div class="heart">
										<img src="/assets/images/favorite.png" alt="heart" class="heart-icon heart__full"/>
										<img src="/assets/images/favorite-border.png" alt="heart" class="heart-icon heart__empty"/>
									</div>
								</div>
							</div>
						</div>
					
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="cards__item">
								<div class="cards__item-body">
									<div class="cards__item-body-image">
										<img src="/assets/images/car.png" alt="" class="cards__item-img"/>
									</div>
									<span class="cards__item-body-name">FORD</span>
									<span class="cards__item-body-price">$4994</span>
								</div>
								<div class="cards__item-footer">
									<div class="quantity">
										<input class="qty" type="number" step="1" min="1" value="0" />
										<div class="quantity__button">
											<button class="quantity-add js-inc quantity-button">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
												</svg>
											</button>
											<button class="quantity-remove js-dec quantity-button">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
												</svg>
											</button>
										</div>
									</div>
									<a class="add-to-cart btn" href="javascript:;">ADD TO CART</a>
									<div class="heart">
										<img src="/assets/images/favorite.png" alt="heart" class="heart-icon heart__full"/>
										<img src="/assets/images/favorite-border.png" alt="heart" class="heart-icon heart__empty"/>
									</div>
								</div>
							</div>
						</div>
					
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="cards__item">
								<div class="cards__item-body">
									<div class="cards__item-body-image">
										<img src="/assets/images/phone.png" alt="" class="cards__item-img"/>
									</div>
									<span class="cards__item-body-name">OLD DISK ROTARY PHONE</span>
									<span class="cards__item-body-price">$2</span>
								</div>
								<div class="cards__item-footer">
									<div class="quantity">
										<input class="qty" type="number" step="1" min="1" value="0" />
										<div class="quantity__button">
											<button class="quantity-add js-inc quantity-button">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
												</svg>
											</button>
											<button class="quantity-remove js-dec quantity-button">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
												</svg>
											</button>
										</div>
									</div>
									<a class="add-to-cart btn" href="javascript:;">ADD TO CART</a>
									<div class="heart">
										<img src="/assets/images/favorite.png" alt="heart" class="heart-icon heart__full"/>
										<img src="/assets/images/favorite-border.png" alt="heart" class="heart-icon heart__empty"/>
									</div>
								</div>
							</div>
						</div>
					
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="cards__item">
								<div class="cards__item-body">
									<div class="cards__item-body-image">
										<img src="/assets/images/tv.png" alt="" class="cards__item-img"/>
									</div>
									<span class="cards__item-body-name">RANGEFINDER CAMERA</span>
									<span class="cards__item-body-price">$22.3</span>
								</div>
								<div class="cards__item-footer">
									<div class="quantity">
										<input class="qty" type="number" step="1" min="1" value="0"/>
										<div class="quantity__button">
											<button class="quantity-add js-inc quantity-button">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
												</svg>
											</button>
											<button class="quantity-remove js-dec quantity-button">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
												</svg>
											</button>
										</div>
									</div>
									<a class="add-to-cart btn" href="javascript:;">ADD TO CART</a>
									<div class="heart">
										<img src="/assets/images/favorite.png" alt="heart" class="heart-icon heart__full"/>
										<img src="/assets/images/favorite-border.png" alt="heart" class="heart-icon heart__empty"/>
									</div>
								</div>
							</div>
						</div>
					
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="cards__item">
								<div class="cards__item-body">
									<div class="cards__item-body-image">
										<img src="/assets/images/horse.png" alt="" class="cards__item-img"/>
									</div>
									<span class="cards__item-body-name">ROCKING HORSE</span>
									<span class="cards__item-body-price">$4994</span>
								</div>
								<div class="cards__item-footer">
									<div class="quantity">
										<input class="qty" type="number" step="1" min="1" value="0"/>
										<div class="quantity__button">
											<button class="quantity-add js-inc quantity-button">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
												</svg>
											</button>
											<button class="quantity-remove js-dec quantity-button">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
												</svg>
											</button>
										</div>
									</div>
									<a class="add-to-cart btn" href="javascript:;">ADD TO CART</a>
									<div class="heart">
										<img src="/assets/images/favorite.png" alt="heart" class="heart-icon heart__full"/>
										<img src="/assets/images/favorite-border.png" alt="heart" class="heart-icon heart__empty"/>
									</div>
								</div>
							</div>
						</div>
					
						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="cards__item">
								<div class="cards__item-body">
									<div class="cards__item-body-image">
										<img src="/assets/images/bicycle.png" alt="" class="cards__item-img"/>
									</div>
									<span class="cards__item-body-name">BICYCLE</span>
									<span class="cards__item-body-price">$10.9</span>
								</div>
								<div class="cards__item-footer">
									<div class="quantity">
										<input class="qty" type="number" step="1" min="1" value="0"/>
										<div class="quantity__button">
											<button class="quantity-add js-inc quantity-button">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
												</svg>
											</button>
											<button class="quantity-remove js-dec quantity-button">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
												</svg>
											</button>
										</div>
									</div>
									<a class="add-to-cart btn" href="javascript:;">ADD TO CART</a>
									<div class="heart">
										<img src="/assets/images/favorite.png" alt="heart" class="heart-icon heart__full"/>
										<img src="/assets/images/favorite-border.png" alt="heart" class="heart-icon heart__empty"/>
									</div>
								</div>
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
					<img src="/assets/images/LogoFooter.png" alt=""/>
				</a>
			</div>
			<div class="copyright"><span>Copyright © 2022 forwardslashny.com</span> <span class="copyright-line">|</span> <span>All Rights Reserved.</span></div>
		</div>
	</div>
</footer>

</div>
  );
};

export default HomePage
