import React from "react";
import Logo from "../assets/logo.png";
import LinkedIn from "../assets/linkedin.png";
import Mail from "../assets/email.png";

const Footer = () => {
  return (
    <div className=" bg-black text-white pt-10 pb-15 px-20 bottom-0 text-center">
      <div className="flex justify-around">
        <div className="w-1/12">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
          <div className="mt-3 flex justify-around">
            <a
              href="https://www.linkedin.com/in/tomoyuki-fujii-376616251/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-2/3" src={LinkedIn} alt="" />
            </a>
            <a
              href="mailto:mjr01300828@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-2/3" src={Mail} alt="" />
            </a>
          </div>
        </div>
        <p>
          <a className="text-2xl text-white no-underline" href="/about">
            About
          </a>
        </p>
        <p>
          <a className="text-2xl text-white no-underline" href="/play">
            Play
          </a>
        </p>
        <p>
          <a className="text-2xl text-white no-underline" href="/watch">
            Watch
          </a>
        </p>
        <p>
          <a className="text-2xl text-white no-underline" href="/gear">
            Gear
          </a>
        </p>
        <p>
          <a className="text-2xl text-white no-underline" href="/contact">
            Contact
          </a>
        </p>
      </div>
      <p className="m-0 py-10">Tomoyuki Fujii | Copyright 2024</p>
    </div>
  );
};

export default Footer;
