import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/navbar.css";

const NavbarMenu = ({ items }) => {
  const navigate = useNavigate();

  const handleLinkButton = (url) => {
    navigate(url);
  };

  useEffect(() => {
    const toggleBtn = document.querySelector(".toggle-btn");
    const handleToggle = () => {
      toggleBtn.classList.toggle("active");
      const navbar = document.querySelector(".navbar");
      navbar.classList.toggle("clip");
    };

    toggleBtn.addEventListener("click", handleToggle);

    return () => {
      toggleBtn.removeEventListener("click", handleToggle);
    };
  }, []);

  return (
    <nav className="navbar">
      <button className="toggle-btn">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </button>
      <ul className="navbar-menu">
        {items.map((item, index) => (
          <li key={index} className="navbar-item">
            <button
              className="navbar-link"
              onClick={() => handleLinkButton(item.url)}
            >
              {item.item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMenu;
