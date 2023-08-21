import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/styles/navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
          <strong>Home</strong>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
          <strong>About</strong>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation; 