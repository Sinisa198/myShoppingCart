import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import logoHeader from '../../assets/images/LogoHeader.png';
import logoFooter from '../../assets/images/LogoFooter.png';
import ProductItem from './ProductItem';
import horse from '../../assets/images/horse.png';
import tv from '../../assets/images/tv.png';
import camera from '../../assets/images/camera.png';
import bicycle from '../../assets/images/bicycle.png';
import car from '../../assets/images/car.png';
import phone from '../../assets/images/phone.png';
import CartContext from '../../store/cartContex';
import NavBar from '../NavBar';

const HomePage = () => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.length;

  const products = [
    {
      id: '1',
      name: 'ROCKING HORSE',
      price: '4994',
      image: horse,
    },
    {
      id: '2',
      name: 'OLD DISK ROTARY PHONE',
      price: '2',
      image: phone,
    },
    {
      id: '3',
      name: 'FORD',
      price: '4994',
      image: car,
    },
    {
      id: '4',
      name: 'BICYCLE',
      price: '10.9',
      image: bicycle,
    },
    {
      id: '5',
      name: 'TV',
      price: '22.3',
      image: tv,
    },
    {
      id: '6',
      name: 'RANGEFINDER CAMERA',
      price: '36.5',
      image: camera,
    },
  ];

  return (
    <div id="page" className="site">
            <Link to=""></Link>
        <Link className="skip-link screen-reader-text" to="#content">Skip to content</Link>
      <div id='content' className='site-content'>
        <div id='primary' className='content-area'>
          <main id='main' className='site-main'>
            <div className='cards'>
				<NavBar />
              <div className='wrap'>
                <div className='cards__container'>
                  <span className='pretitle'>SHOP</span>
                  <h2 className='section-title'>SAME OLD SAME OLD</h2>
                  <div className='row cards__wrapper'>
                    {products.map((item) => (
                      <ProductItem
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        price={item.price}
                        image={item.image}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div></div>
      <footer className='footer'>
        <div className='wrap'>
          <div className='footer__wrap'>
            <div className='footer__logo'>
              <a href='/' className='header__home'>
                <img src={logoFooter} alt='' />
              </a>
            </div>
            <div className='copyright'>
              <span>Copyright © 2022 forwardslashny.com</span>{' '}
              <span className='copyright-line'>|</span>{' '}
              <span>All Rights Reservsed.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default HomePage;