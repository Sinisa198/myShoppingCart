import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import NavBar from "../navBars/NavBar";
import Footer from "../Footer";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const fetchAndDisplay = async () => {
    let url = process.env.REACT_APP_BASE_URL + "/products";
    try {
      const res = await fetch(url);
      const products = await res.json();
      setProducts(products);
    } catch (error) {}
  };
  useEffect(() => {
    fetchAndDisplay();
  }, []);
  return (
    <div id="page" className="site">
      <Link className="skip-link screen-reader-text" to="#content">
        Skip to content
      </Link>
      <div id="content" className="site-content">
        <div id="primary" className="content-area">
          <main id="main" className="site-main">
            <div className="cards">
              <NavBar />
              <div className="wrap">
                <div className="cards__container">
                  <span className="pretitle">
                    {process.env.REACT_APP_TITLE}
                  </span>
                  <h2 className="section-title">SAME OLD SAME OLD</h2>
                  <div className="row cards__wrapper">
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
