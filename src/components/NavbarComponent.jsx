import React, { useEffect, useState } from "react";
import "../style/navbar.css";
import Menu from "../assets/menu.png";
import Close from "../assets/close.png";
import Logo from "../assets/logo.png";

const NavbarComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [remove, setRemove] = useState("nav-links-mobile-removed");
  const [icon, setIcon] = useState(Menu);

  const changeStyle = () => {
    if (remove !== "nav-links-mobile-removed") {
      setRemove("nav-links-mobile-removed");
      setIcon(Menu);
    } else {
      setRemove("nav-links-mobile");
      setIcon(Close);
    }
  };

  const removeMenus = () => {
    if (isMobile) {
      setRemove("nav-links-mobile-removed");
      setIcon(Menu);
    }
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 769;
        if (ismobile !== isMobile) {
          setIsMobile(ismobile);
        }
      },
      false
    );
  }, [isMobile]);

  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <a href="/">
          <img className="logo" src={Logo} alt="" />
        </a>
      </div>
      <div className="nav-links-container">
        <div className={`${isMobile ? remove : "nav-links"}`}>
          <a
            className={`${isMobile ? "nav-link-tag-mobile" : "nav-link-tag"}`}
            href="/about"
            onClick={() => removeMenus()}
          >
            About
          </a>
          <a
            className={`${isMobile ? "nav-link-tag-mobile" : "nav-link-tag"}`}
            href="/about"
            onClick={() => removeMenus()}
          >
            Play
          </a>
          <a
            className={`${isMobile ? "nav-link-tag-mobile" : "nav-link-tag"}`}
            href="/about"
            onClick={() => removeMenus()}
          >
            Watch
          </a>
          <a
            className={`${isMobile ? "nav-link-tag-mobile" : "nav-link-tag"}`}
            href="/about"
            onClick={() => removeMenus()}
          >
            Gear
          </a>
          <a
            className={`${isMobile ? "nav-link-tag-mobile" : "nav-link-tag"}`}
            href="/contact"
            onClick={() => removeMenus()}
          >
            Contact
          </a>
        </div>
        <button
          className="nav-menu-icon"
          onClick={() => {
            changeStyle();
          }}
        >
          <img className="nav-menu-cancel-icon" src={icon} alt="icon" />
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
