import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <>
      <nav>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>

        <NavLink activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </nav>
    </>
  )
}

export default Header;
