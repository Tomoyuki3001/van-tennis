import React, { useEffect, useState } from "react";
import "../style/navbar.css";
import Menu from "../assets/menu.png";
import Close from "../assets/close.png";
import Logo from "../assets/logo.png";

const NavbarComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [remove, setRemove] = useState("nav-links-mobile-removed");
  const [icon, setIcon] = useState(Menu);
  const [scrollNav, setScrollNav] = useState("nav-top");
  const [scrollLink, setScrollLink] = useState("nav-links-top");
  const [scrollLogo, setScrollLogo] = useState("logo-top");

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

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 30) {
        setScrollNav("nav-scroll");
        setScrollLink("nav-links-scroll");
        setScrollLogo("logo-scroll");
      } else {
        setScrollNav("nav-top");
        setScrollLink("nav-links-top");
        setScrollLogo("logo-top");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav className={`${scrollNav} nav-container`}>
      <a className="ml-6 lg:ml-16" href="/">
        <img className={scrollLogo} src={Logo} alt="" />
      </a>
      <div className="nav-links-container">
        <div className={`${isMobile ? remove : `nav-links ${scrollLink}`}`}>
          <a
            className={`font-bold ${
              isMobile ? "nav-link-tag-mobile" : "nav-link-tag"
            }`}
            href="/about"
            onClick={() => removeMenus()}
          >
            About
          </a>
          <a
            className={`font-bold ${
              isMobile ? "nav-link-tag-mobile" : "nav-link-tag"
            }`}
            href="/play"
            onClick={() => removeMenus()}
          >
            Play
          </a>
          <a
            className={`font-bold ${
              isMobile ? "nav-link-tag-mobile" : "nav-link-tag"
            }`}
            href="/watch"
            onClick={() => removeMenus()}
          >
            Watch
          </a>
          <a
            className={`font-bold ${
              isMobile ? "nav-link-tag-mobile" : "nav-link-tag"
            }`}
            href="/gear"
            onClick={() => removeMenus()}
          >
            Gear
          </a>
          <a
            className={`font-bold ${
              isMobile ? "nav-link-tag-mobile" : "nav-link-tag"
            }`}
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
