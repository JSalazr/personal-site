import React from "react";
import './navbar.css';
function NavbarItem({itemTag}) {
  return (
    <li className="navbar-item">
      {itemTag}
    </li>
  );
}

export default NavbarItem;