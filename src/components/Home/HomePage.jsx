import { render } from '@testing-library/react'
import React from 'react';
import {Button, useNavigate, useState} from 'react';
import logoHeader from '../../assets/images/LogoHeader.png'
import camera from '../../assets/images/camera.png'
import favorite from '../../assets/images/favorite.png'
import bicycle from '../../assets/images/bicycle.png'
import tv from '../../assets/images/tv.png'
import car from '../../assets/images/car.png'
import phone from '../../assets/images/phone.png'
import horse from '../../assets/images/horse.png'
import favoriteBorder from '../../assets/images/favorite-border.png'

	export const HomePage = () => {

		const [home, setHome] = useState(0);
		const handleDecremente = () =>{
			setHome(prevCount => prevCount - 1 )
		}
		const handleIncremente = () =>{
			setHome(prevCount => prevCount + 1)
		}
		
 	 return (

    <div id="page" class="site">
	<a className="skip-link screen-reader-text" href="#content">Skip to content</a>
	<header className="header js-site-header">
	<div className="header__overlay"></div>
	<div className="wrap">
		<div className="header__container">
			<div className="header__home-logo"><a href="/" className ="header__home"> <img src={logoHeader} alt="" className="header__logo"/> </a></div>

			
				<nav className="main-nav">
					<ul className="main-nav__list" role="menubar">
						
							<li className="main-nav__list-item" role="menuitem">
								<a href="javascript:;" className="main-nav__list-link">
									ABOUT US
								</a>
							</li>
						
							<li className="main-nav__list-item" role="menuitem">
								<a href="javascript:;" className="main-nav__list-link">
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
					<a href="" className="main-nav-cart-link"  >
						Cart
					</a>
					<span className="main-nav-cart-qty">{home}</span>
				</div>
			
			<a href="javascript:" className="site-header__hamburger hamburger js-menu-btn"><span></span></a>
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
					
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="cards__item">
								<div className="cards__item-body">
									<div className="cards__item-body-image">
										<img src={camera} alt="" className="cards__item-img"/>
									</div>
									<span className="cards__item-body-name">RANGEFINDER CAMERA</span>
									<span className="cards__item-body-price">$36.5</span>
								</div>
								<div className="cards__item-footer">
									<div className="quantity">
										<input className="qty" type="number" step="1" min="1" value={home}/>
										<div className="quantity__button">
											<button className="quantity-add js-inc quantity-button" onClick={handleIncremente}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
												</svg>
											</button>
											<button className="quantity-remove js-dec quantity-button" onClick={handleDecremente} >
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
												</svg>
											</button>
										</div>
									</div>
									<a className="add-to-cart btn" href="javascript:;">ADD TO CART</a>
									<div className="heart">
										<img src={favorite} alt="heart" className="heart-icon heart__full"/>
										<img src={favoriteBorder} alt="heart" className="heart-icon heart__empty"/>
									</div>
								</div>
							</div>
						</div>
					
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="cards__item">
								<div className="cards__item-body">
									<div className="cards__item-body-image">
										<img src={car} alt="" className="cards__item-img"/>
									</div>
									<span className="cards__item-body-name">FORD</span>
									<span className="cards__item-body-price">$4994</span>
								</div>
								<div className="cards__item-footer">
									<div className="quantity">
										<input className="qty" type="number" step="1" min="1" value={home} />
										<div className="quantity__button">
											<button className="quantity-add js-inc quantity-button" onClick={handleIncremente}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
												</svg>
											</button>
											<button className="quantity-remove js-dec quantity-button" onClick={handleDecremente}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
												</svg>
											</button>
										</div>
									</div>
									<a className="add-to-cart btn" href="javascript:;">ADD TO CART</a>
									<div className="heart">
										<img src={favorite} alt="heart" className="heart-icon heart__full"/>
										<img src={favoriteBorder} alt="heart" className="heart-icon heart__empty"/>
									</div>
								</div>
							</div>
						</div>
					
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="cards__item">
								<div className="cards__item-body">
									<div className="cards__item-body-image">
										<img src={phone} alt="" className="cards__item-img"/>
									</div>
									<span className="cards__item-body-name">OLD DISK ROTARY PHONE</span>
									<span className="cards__item-body-price">$2</span>
								</div>
								<div className="cards__item-footer">
									<div className="quantity">
										<input className="qty" type="number" step="1" min="1" value={home} />
										<div className="quantity__button">
											<button className="quantity-add js-inc quantity-button" onClick={handleIncremente}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
												</svg>
											</button>
											<button className="quantity-remove js-dec quantity-button" onClick={handleDecremente}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
												</svg>
											</button>
										</div>
									</div>
									<a className="add-to-cart btn" href="javascript:;">ADD TO CART</a>
									<div className="heart">
										<img src={favorite} alt="heart" className="heart-icon heart__full"/>
										<img src={favoriteBorder} alt="heart" className="heart-icon heart__empty"/>
									</div>
								</div>
							</div>
						</div>
						{console.log('hello')}
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="cards__item">
								<div className="cards__item-body">
									<div className="cards__item-body-image">
										<img src={tv} alt="" className="cards__item-img"/>
									</div>
									<span className="cards__item-body-name">TV</span>
									<span className="cards__item-body-price">$22.3</span>
								</div>
								<div className="cards__item-footer">
									<div className="quantity">
										<input className="qty" type="number" step="1" min="1" value={home} />
										<div className="quantity__button">
											<button className="quantity-add js-inc quantity-button" onClick={handleIncremente}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
												</svg>
											</button>
											<button className="quantity-remove js-dec quantity-button" onClick={handleDecremente}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
												</svg>
											</button>
										</div>
									</div>
									<a className="add-to-cart btn" href="javascript:;">ADD TO CART</a>
									<div className="heart">
										<img src={favorite} alt="heart" className="heart-icon heart__full"/>
										<img src={favoriteBorder} alt="heart" className="heart-icon heart__empty"/>
									</div>
								</div>
							</div>
						</div>
					
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="cards__item">
								<div className="cards__item-body">
									<div className="cards__item-body-image">
										<img src={horse} alt="" className="cards__item-img"/>
									</div>
									<span className="cards__item-body-name">ROCKING HORSE</span>
									<span className="cards__item-body-price">$4994</span>
								</div>
								<div className="cards__item-footer">
									<div className="quantity">
										<input className="qty" type="number" step="1" min="1" value={home} />
										<div className="quantity__button">
											<button className="quantity-add js-inc quantity-button" onClick={handleIncremente}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
												</svg>
											</button>
											<button className="quantity-remove js-dec quantity-button" onClick={handleDecremente}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
												</svg>
											</button>
										</div>
									</div>
									<a className="add-to-cart btn" href="javascript:;">ADD TO CART</a>
									<div class="heart">
										<img src={favorite} alt="heart" className="heart-icon heart__full"/>
										<img src={favoriteBorder} alt="heart" className="heart-icon heart__empty"/>
									</div>
								</div>
							</div>
						</div>
					
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="cards__item">
								<div className="cards__item-body">
									<div className="cards__item-body-image">
										<img src={bicycle} alt="" className="cards__item-img"/>
									</div>
									<span class="cards__item-body-name">BICYCLE</span>
									<span class="cards__item-body-price">$10.9</span>
								</div>
								<div className="cards__item-footer">
									<div className="quantity">
										<input className="qty" type="number" step="1" min="1" value={home} />
										<div class="quantity__button">
											<button className="quantity-add js-inc quantity-button" onClick={handleIncremente}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
												</svg>
											</button>
											<button className="quantity-remove js-dec quantity-button" onClick={handleDecremente}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
												</svg>
											</button>
										</div>
									</div>
									<a className="add-to-cart btn" href="javascript:;">ADD TO CART</a>
									<div className="heart">
										<img src={favorite} alt="heart" class="heart-icon heart__full"/>
										<img src={favoriteBorder} alt="heart" class="heart-icon heart__empty"/>
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
	<div>
      
    </div>
</div>

  );
};
export default HomePage;
