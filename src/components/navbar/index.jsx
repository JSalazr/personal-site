import React from "react";
import NavbarItem from './navbarItem';
import './navbar.css';
function Navbar() {
  return (
    <ul className="navbar-container">
      <NavbarItem itemTag='About me' />
      <NavbarItem itemTag='Portfolio' />
      <NavbarItem itemTag='Contact' />
    </ul>
  );
}

export default Navbar;
