import React from "react";

const NavbarMenu = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-menu-item">
          <a href="/classes">Classes</a>
        </li>
        <li className="navbar-menu-item">
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMenu;
