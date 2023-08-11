import React from 'react';
import '../assets/styles/Navigation.css'; // Import the CSS file

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">

            Home

        </li>
        <li className="nav-item">

            About

        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;