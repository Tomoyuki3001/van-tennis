import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="h-48 flex justify-center bg-black text-white px-10">
      <div className="w-1/6">
        <img src={Logo} alt="" />
      </div>
      <a className="text-2xl no-underline" href="/about">
        About
      </a>
      <div>Play</div>
      <div>Watch</div>
      <div>Gear</div>
      <div>Contact</div>
    </div>
  );
};

export default Footer;
