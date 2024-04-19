import React from "react";
import Logo from "../assets/logo.png";
import LinkedIn from "../assets/linkedin.png";
import Facebook from "../assets/facebook-white.png";

const Footer = () => {
  return (
    <div className="bg-[#0F375D] text-white pt-10 pb-15 px-5 bottom-0 text-center">
      <div className="flex justify-around">
        <div className="w-2/5 lg:pl-20">
          <a href="/">
            <img className="w-64" src={Logo} alt="" />
          </a>
          <div className="mt-3 flex">
            <a
              href="https://www.linkedin.com/in/tomoyuki-fujii-376616251/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-10 mr-5" src={LinkedIn} alt="" />
            </a>
            <a
              href="https://www.facebook.com/tomoyk113"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-10" src={Facebook} alt="" />
            </a>
          </div>
          <p className="mt-10 text-left">mjr01300828@gmail.com</p>
        </div>
        <div className="lg:flex lg:justify-around w-3/5">
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
      </div>
      <p className="m-0 py-10">Tomoyuki Fujii | Copyright 2024</p>
    </div>
  );
};

export default Footer;
