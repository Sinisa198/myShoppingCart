import React from 'react'
import logoFooter from '../../assets/images/LogoFooter.png'


export const Footer = () => {
  return (
    <div>
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
  )
}

export default Footer
