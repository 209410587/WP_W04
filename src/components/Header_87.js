import React from 'react';
import './Header_87.scss';
import { Link } from 'react-router-dom';

const Header_87 = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src="../../../crown_theme/assets/crown.svg" />
      </Link>
      <div className="options">
        <Link to="./overview.html" className="option">
          Shop
        </Link>
        <Link to="/shop" className="option">
          Contact
        </Link>
        <Link to="/signin" className="option">
          Sign In
        </Link>
        <div className="cart-icon" onclick="cartToggle()">
          <img
            className="shopping-icon"
            src="./assets/shopping-bag.svg"
            alt=""
          />
        </div>
        <div className="cart-dropdown">
          <div className="cart-items">
            <div className="cart-item">
              <img src="https://i.ibb.co/QdJwgmp/brown-cowboy.png" alt="item" />
              <div className="item-details">
                <span className="name">Brown Cowboy</span>
                <span className="price">4 * $35</span>
              </div>
            </div>
            <div className="cart-item">
              <img
                src="https://i.ibb.co/mJS6vz0/blue-jean-jacket.png"
                alt="item"
              />
              <div className="item-details">
                <span className="name">Blue Jean Jacket</span>
                <span className="price">1 * $90</span>
              </div>
            </div>
          </div>
          <button className="custom-button">GO TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Header_87;
