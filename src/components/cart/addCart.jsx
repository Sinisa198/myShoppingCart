import React from 'react'
import logoWhite from '../../assets/images/logo-white.png'
import logoHeader from '../../assets/images/LogoHeader.png'
import bicycle from '../../assets/images/bicycle.png'
import camera from '../../assets/images/camera.png'
import phone from '../../assets/images/phone.png'
import logo from '../../assets/images/logo.png'
import ProductItem  from '../Home/ProductItem';
import {Link} from 'react'


 const addCart = ({name,price,image,amount,year}) => {

 // const [items, setItems] = useState([])
    
 // const addToCart = (name,price) =>{
 //   setItems((prevState) => [...prevState,{name, price}]);
//}


  

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
					<span className="main-nav-cart-qty">{amount}</span>
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
								<img src={image} alt="" className="cart__item-img"/>
							</div>
							<div className="cart__item-details">
								<span className="cart__item-name">{name}</span>
								<span className="cart__item-info">BRAND: CLAUDE BUTLER</span>
								<span className="cart__item-info">{year}</span>
								<span className="cart__item-info">{amount}</span>
							</div>
							<div className="cart__item-button">
								<a className="btn btn--sm" href=""  >REMOVE FROM CART</a>
							</div>
							<div className="cart__item-price">
								<span className="cards__price">PRICE:{price} <span></span></span>
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
