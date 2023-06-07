import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <>
    <nav className="nav">
      <div className="logo">Math Magicians</div>
      <div>
        <ul className="nav-ul">
          <li>
            <NavLink to="/home">Home</NavLink>
            <span>
              <strong> | </strong>
            </span>
          </li>
          <li>
            <NavLink to="/calculator">Calculator</NavLink>
            <span>
              <strong> | </strong>
            </span>
          </li>
          <li>
            <NavLink to="/quote">Quote</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>
);
export default Nav;
