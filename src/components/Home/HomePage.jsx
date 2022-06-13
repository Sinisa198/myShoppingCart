import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import horse from '../../assets/images/horse.png';
import tv from '../../assets/images/tv.png';
import camera from '../../assets/images/camera.png';
import bicycle from '../../assets/images/bicycle.png';
import car from '../../assets/images/car.png';
import phone from '../../assets/images/phone.png';
import NavBar from '../navBars/NavBar';
import Footer from '../Footer'

const HomePage = () => {

  const [products, setProducts] = useState([])
  const renderProduct = async () =>{
    let uri = 'http://127.0.0.1:3000/products';
    const res = await fetch(uri);
    const products = await res.json();
    setProducts(products)
  }
  useEffect(() => {renderProduct()}, [])
  return (

    <div id="page" className="site">
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
      <Footer />
    </div>
  );
};

export default HomePage;