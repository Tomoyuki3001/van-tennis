import React from "react";
import TopImage from "../assets/home/about.jpg";
import Play from "../assets/home/play.jpg";
import Game from "../assets/home/game.jpg";
import Shop from "../assets/home/shopping.jpg";
import Profile from "../assets/home/profile.jpg";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div>
      <div className="text-white font-bold bg-top bg-cover bg-center h-screen flex flex-col justify-center py-10">
        <div className="pl-20">
          <h1 className="lg:text-[10rem] font-bold m-0 uppercase relative">
            WE
          </h1>
          <h1 className="lg:text-[10rem] font-bold m-0 uppercase relative">
            <ReactTyped
              strings={["Play", "Enjoy", "Like"]}
              typeSpeed={250}
              loop
              backSpeed={40}
            />
          </h1>
          <h1 className="lg:text-[10rem] font-bold m-0 uppercase relative">
            TENNIS
          </h1>
        </div>
      </div>
      <div className="px-40">
        <div className="text-center mt-20">
          <h2 className="text-[3rem] font-bold">Tennis in Vancouver</h2>
          <div className="flex">
            <div className="w-1/2 py-20 pr-20 flex flex-col justify-between">
              <p className="text-lg text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam itaque, enim iure officiis ducimus veritatis aperiam
                laborum! Eos iste maiores deserunt corrupti tempora quas ex ab
                repellendus, amet cum iusto?
              </p>
              <button className="border px-10 py-5 w-1/3 hover:bg-black hover:text-white">
                ABOUT VTG
              </button>
            </div>
            <div className="w-1/2 py-20 flex flex-col items-center">
              <img className="w-full" src={TopImage} alt="Iamge" />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="text-center">
            <h2 className="text-[3rem] font-bold my-10">Let's enjoy!</h2>
          </div>
          <div className="mt-20 grid lg:grid-rows-2 sm:grid-rows-4 grid-flow-col">
            <div className="relative group">
              <img
                className="w-full h-full brightness-50"
                src={Play}
                alt="Playing tennis"
              />
              <div className="hidden group-hover:block p-10 absolute bottom-0 text-white">
                <h2>PLAY</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  quo quis accusantium illum, officia fugiat natus distinctio
                  sunt exercitationem quia similique facilis dignissimos
                  laboriosam, omnis quam architecto dolor repudiandae earum?
                </p>
                <button className="border px-20 py-5 hover:bg-black hover:text-white">
                  LEARN MORE
                </button>
              </div>
            </div>
            <div className="relative group">
              <img
                className="w-full h-auto brightness-50"
                src={Shop}
                alt="Playing tennis"
              />
              <div className="p-10 hidden group-hover:block absolute bottom-0 text-white">
                <h2>SHOPPING</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  quo quis accusantium illum, officia fugiat natus distinctio
                  sunt exercitationem quia similique facilis dignissimos
                  laboriosam, omnis quam architecto dolor repudiandae earum?
                </p>
                <button className="border px-20 py-5 hover:bg-black hover:text-white">
                  LEARN MORE
                </button>
              </div>
            </div>
            <div className="relative group">
              <img
                className="w-full h-full brightness-50"
                src={Game}
                alt="Playing tennis"
              />
              <div className="p-10 hidden group-hover:block absolute bottom-0 text-white">
                <h2>WATCH</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  quo quis accusantium illum, officia fugiat natus distinctio
                  sunt exercitationem quia similique facilis dignissimos
                  laboriosam, omnis quam architecto dolor repudiandae earum?
                </p>
                <button className="border px-20 py-5 hover:bg-black hover:text-white">
                  LEARN MORE
                </button>
              </div>
            </div>
            <div className="relative bg-black">
              <div className="p-10 absolute bottom-0 text-white">
                <h2>And more...</h2>
                <button className="border px-20 py-10 hover:bg-black hover:text-white">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-32 flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-[3rem] font-bold my-10">Let's connect!</h2>
          </div>
          <img className="w-1/4 h-auto" src={Profile} alt="" />
          <h2 className="mt-10">Tomoyuki Fujii</h2>
          <p>Worked at DUNLOP (Tennis)</p>
          <p>If you have any concerns about tennis, just let me know!</p>
          <button className="mt-16 border px-20 py-5 hover:bg-black hover:text-white">
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
