import React from 'react'
import logoFooter from '../../assets/images/LogoFooter.png'


export const Footer = () => {
  return (
    <div>
    <footer class="footer">
  <div class="wrap">
      <div class="footer__wrap">
          <div class="footer__logo">
              <a href="/" class="header__home">
                  <img src={logoFooter} alt=""/>
              </a>
          </div>
          <div class="copyright"><span>Copyright © 2022 forwardslashny.com</span> <span class="copyright-line">|</span> <span>All Rights Reserved.</span></div>
      </div>
  </div>
</footer>
  </div>
  )
}

export default Footer
