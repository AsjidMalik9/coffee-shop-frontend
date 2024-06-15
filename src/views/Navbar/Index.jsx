import React, { useContext } from 'react';
import { CartContext } from '../../cartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      {/* Brand/logo */}
      <Link to='/' className="navbar-brand">Coffee Shop</Link>
      
      {/* Navbar toggler for mobile */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      {/* Navbar items */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {/* Cart link with badge */}
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="badge badge-pill badge-danger ml-1">{cartItems.length}</span>
              <span className="sr-only">Cart items</span> {/* Screen reader only text */}
            </Link>
          </li>
          
          {/* Example: Add more navbar links as needed */}
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Menu
            </Link>
          </li>
          
          {/* Example: Dropdown menu */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              More
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/about">About Us</Link>
              <Link className="dropdown-item" to="/contact">Contact Us</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/specials">Specials</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
