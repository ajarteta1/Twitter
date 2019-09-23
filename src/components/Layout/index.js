import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
        <header className="header">
        <nav className="nav">
          <ul className="menu">
            <li className="menu-item">
              <Link to="/Login" className="menu-item-link">Login</Link>
            </li>
            <li className="menu-item">
              <Link to="/SignUP" className="menu-item-link">SignUP</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;
