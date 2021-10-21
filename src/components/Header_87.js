import React from 'react';
import './Header_87.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';

const Header_87 = () => {
  return (
    <div>
      <div className="header">
        <Link to="/" className="logo-container">
          <Logo />
        </Link>
        <div className="options">
          <Link to="./shop_87" className="option">
            Shop
          </Link>
          <Link to="/contact_87" className="option">
            Contact
          </Link>
          <Link to="/signin_87" className="option">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header_87;
