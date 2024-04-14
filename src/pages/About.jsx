import React from "react";
import Logo from "../assets/about/logo-black.png";
import Profile from "../assets/home/profile.jpg";
import Health from "../assets/about/health.png";
import Group from "../assets/about/group.png";
import Contact from "../assets/contact.jpg";

const About = () => {
  return (
    <div>
      <div className="text-white font-bold bg-aboutTop bg-cover bg-center py-40">
        <h1 className="lg:text-[8rem] font-bold m-0 text-center">ABOUT VTG</h1>
      </div>
      <div className="px-40">
        <div className="flex flex-col items-center my-20">
          <h2 className="text-[3rem] font-bold">What's VTG?</h2>
          <img className="w-1/4 my-20" src={Logo} alt="" />
          <p className="w-1/2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            asperiores consequuntur autem distinctio maiores voluptatem sit,
            incidunt iusto ducimus nemo, ab soluta cupiditate excepturi non iste
            unde molestias nihil alias?
          </p>
          <div className="flex my-10">
            <div className="w-1/2 flex flex-col items-center">
              <img className="w-1/2 h-auto" src={Profile} alt="" />
            </div>
            <div className="w-1/2 text-center py-5 px-10">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum, non reiciendis odio minus rem excepturi facere
                numquam voluptas atque assumenda.
              </p>
              <p className="m-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit nihil, aliquam possimus perspiciatis iure facilis.
                Repudiandae ad perferendis quam fugiat unde, temporibus eum nemo
                illo nihil ipsa placeat? Nobis, molestias!
              </p>
            </div>
          </div>
        </div>
        <div className="my-20 grid lg:grid-rows-1 sm:grid-rows-2 grid-flow-col px-20">
          <div className="flex flex-col items-center text-center">
            <img src={Health} alt="" />
            <h2>Health</h2>
            <p className="w-1/2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              porro quo architecto nulla quisquam provident, nesciunt sit
              placeat neque modi.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={Group} alt="" />
            <h2>Social</h2>
            <p className="w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              harum quos deleniti voluptas fugit officiis voluptatem
              necessitatibus adipisci, qui explicabo!
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <img className="" src={Contact} alt="" />
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <h2 className="text-[5rem]">Do you have any concerns?</h2>
          <h2>Let's talk!</h2>
          <a href="/contact">
            <button>Contact</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
