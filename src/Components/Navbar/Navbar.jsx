import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import my_logo from "../../assets/portfolio_logo.png";
import open_menu from "../../assets/menu_open.svg";
import close_menu from "../../assets/menu_close.svg";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img src="" alt="" height={150} />
      <img
        src={open_menu}
        onClick={openMenu}
        alt="Open Menu"
        className={`nav-open ${isMenuOpen ? 'hidden' : ''}`}
      />
      <ul ref={menuRef} className={`nav_menu ${isMenuOpen ? "open" : ""}`}>
        <img
          src={close_menu}
          onClick={closeMenu}
          alt="Close Menu"
          className="nav_close"
        />
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={menu === "home" ? "active" : ""}
            onClick={() => {
              setMenu("home");
              closeMenu();
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="aboutme"
            smooth={true}
            duration={500}
            className={menu === "about" ? "active" : ""}
            onClick={() => {
              setMenu("about");
              closeMenu();
            }}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className={menu === "services" ? "active" : ""}
            onClick={() => {
              setMenu("services");
              closeMenu();
            }}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className={menu === "portfolio" ? "active" : ""}
            onClick={() => {
              setMenu("portfolio");
              closeMenu();
            }}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="contactme"
            smooth={true}
            duration={500}
            className={menu === "contactme" ? "active" : ""}
            onClick={() => {
              setMenu("contactme");
              closeMenu();
            }}
          >
            Contact Me
          </Link>
        </li>
      </ul>
      <div className="connect_with_me">
        <button>Connect</button>
      </div>
    </div>
  );
};

export default Navbar;