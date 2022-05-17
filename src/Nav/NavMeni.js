import React from 'react'
import Nav from 'Nav.css'; 

const Nav = () => ({
    render() {
  return (
		<div className="header__container">
			<div className="header__home-logo"><a href="/" className="header__home"> <img src="/assets/images/LogoHeader.png" alt="" className="header__logo"/> </a></div>

			
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
    </div>
    );
}
});

export default Nav