import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/styles/Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;