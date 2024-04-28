import React, { useEffect, useState } from "react";
import TopImage from "../assets/home/about.jpg";
import Play from "../assets/home/play.jpg";
import Game from "../assets/home/game.jpg";
import Shop from "../assets/home/shopping.jpg";
import Profile from "../assets/home/profile.jpg";
import { ReactTyped } from "react-typed";
import Facebook from "../assets/home/facebook.png";
import LinkedIn from "../assets/home/linkedin.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
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
    <div>
      <div className="text-white font-bold bg-top bg-cover bg-center h-screen flex flex-col justify-center py-10">
        <div className="lg:pl-20 pl-5">
          <h1 className="lg:text-[7rem] text-[5rem] font-bold m-0">WE</h1>
          <h1 className="lg:text-[7rem] text-[5rem]  font-bold m-0 uppercase">
            <ReactTyped
              strings={["play", "enjoy", "love"]}
              typeSpeed={250}
              loop
              backSpeed={50}
            />
          </h1>
          <h1 className="lg:text-[7rem] text-[5rem]  font-bold m-0">TENNIS</h1>
        </div>
      </div>
      <div className="text-center mt-20 lg:mt-40 pl-3 pr-3 lg:pl-40 lg:pr-40">
        <h2 className="text-[3rem] font-bold">Tennis in Vancouver</h2>
        <div className="lg:flex">
          <div className="lg:w-1/2 py-20 flex flex-col items-center">
            <img className="w-full rounded-sm" src={TopImage} alt="Iamge" />
          </div>
          <div className="lg:w-1/2 lg:py-20 lg:pl-20 flex flex-col justify-between">
            <p className="text-lg lg:text-2xl lg:text-right lg:leading-relaxed">
              VTG (Vancouver Tennis Guide) is a website designed for anyone who
              is interested in playing tennis in Vancouver, whether you are a
              beginner or you want to improve your tennis skills.
            </p>
            <div className="lg:flex flex-col items-end">
              <button
                onClick={() => {
                  navigate("/about");
                }}
                className={`lg:w-[15rem] mt-5 border-2 border-[#0f375d] ${
                  isMobile
                    ? "hover:bg-white bg:text-black px-8 py-4"
                    : "px-5 py-10 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[#0f375d] hover:text-white"
                } `}
              >
                ABOUT VTG
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 lg:px-40">
        <div className="text-center">
          <h2 className="text-[3rem] font-bold my-10">Let's enjoy!</h2>
        </div>
        <div className="mt-20 grid lg:grid-rows-2 grid-rows-4 grid-flow-col">
          <div className="relative group">
            <img
              className="w-full h-full brightness-50"
              src={Play}
              alt="Playing tennis"
            />
            <div className="flex flex-col items-center lg:hidden p-3 lg:group-hover:block absolute bottom-0 text-white lg:bg-opacity-70 lg:bg-blue-600">
              <h2>PLAY</h2>
              <p className="text-sm lg:text-lg">
                Tennis courts can be found in parks and other places, so anyone
                can play tennis. You may also want to check out indoor courts,
                where you can enjoy playing tennis even on rainy days.
              </p>
              <button
                onClick={() => {
                  navigate("/play");
                }}
                className="border-2 px-10 py-3 hover:bg-white hover:text-black"
              >
                SEE MORE
              </button>
            </div>
          </div>
          <div className="relative group w-full">
            <img
              className="w-full h-auto brightness-50"
              src={Shop}
              alt="Playing tennis"
            />
            <div className="flex flex-col items-center lg:hidden p-3 lg:group-hover:block absolute bottom-0 text-white lg:bg-opacity-70 lg:bg-gray-600">
              <h2>GEAR</h2>
              <p className="text-sm lg:text-lg">
                To play tennis, you will need a racket and other equipment. Here
                is a summary of what you need to pay attention to and what you
                need to prepare to play tennis.
              </p>
              <button
                onClick={() => {
                  navigate("/gear");
                }}
                className="border-2 px-10 py-3 hover:bg-white hover:text-black"
              >
                SEE MORE
              </button>
            </div>
          </div>
          <div className="relative group">
            <img
              className="w-full h-full brightness-50"
              src={Game}
              alt="Playing tennis"
            />
            <div className="flex flex-col items-center lg:hidden p-3 lg:group-hover:block absolute bottom-0 text-white lg:bg-opacity-70 lg:bg-stone-600">
              <h2>WATCH</h2>
              <p className="text-sm lg:text-lg">
                You can also enjoy watching professional tournaments. Here are
                some of the famous professional tournaments held annually.
              </p>
              <button
                onClick={() => {
                  navigate("/watch");
                }}
                className="border-2 px-10 py-3 hover:bg-white hover:text-black"
              >
                SEE MORE
              </button>
            </div>
          </div>
          <div className="relative bg-black">
            <div className="p-10 absolute bottom-0 right-0 text-white">
              <h2 className="mb-10">And more...</h2>
              <button
                onClick={() => {
                  navigate("/contact");
                }}
                className="border-2 px-10 py-3 hover:bg-white hover:text-black"
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-3 pr-3 lg:pl-40 lg:pr-40 py-32 flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-[3rem] font-bold my-10">Let's connect!</h2>
        </div>
        <img
          className="rounded w-[15rem] lg:w-[22rem] h-auto my-10 p-1 border"
          src={Profile}
          alt=""
        />
        <h2 className="mt-10">Tomoyuki Fujii</h2>
        <p className="mb-5">Junior Front-end developer</p>
        <a
          href="https://drive.google.com/file/d/1E42gK6lAurKPr22iMrqU1RqnSj5_s1-5/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="no-underline hover:text-white hover:bg-[#0f375d] border-2 border-[#0A58CA] hover:border-[#0f375d] py-4 px-8 mb-5"
        >
          RESUME
        </a>

        <p className="lg:w-1/2 text-center m-0 text-lg lg:text-xl lg:leading-relaxed">
          I started playing tennis when I was 15 years old. After graduating
          from university, I worked at tennis companies such as{" "}
          <span>
            <a
              href="https://dunlopsports.com/tennis/"
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              DUNLOP
            </a>
          </span>{" "}
          and{" "}
          <span>
            <a
              href="https://www.babolat.ca"
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              BabolaT
            </a>
          </span>
          . <br />
          I am currently studying computer programming in Vancouver and looking
          for a job to become a web developer. <br />
        </p>
        <p className="lg:w-1/2 text-center m-0 text-lg lg:text-xl lg:leading-relaxed">
          Vancouver Tennis Guide is a project that I have created using my
          skills in programming and my passion for tennis. I hope you would find
          the information and advice shared on this website helpful,
          particularly for those who are new to tennis.
        </p>
        <div className="my-10 flex">
          <a
            href="https://www.linkedin.com/in/tomoyuki-fujii-376616251/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-[3rem] lg:w-[4rem]" src={LinkedIn} alt="" />
          </a>
          <div className="w-[3rem] lg:w-[4rem]"></div>
          <a
            href="https://www.facebook.com/tomoyk113"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-[3rem] lg:w-[4rem]" src={Facebook} alt="" />
          </a>
        </div>
        <button
          onClick={() => {
            navigate("/contact");
          }}
          className={`lg:w-[15rem] mt-5 border-2 border-[#0f375d] ${
            isMobile
              ? "hover:bg-white bg:text-black px-8 py-4"
              : "px-5 py-10 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[#0f375d] hover:text-white"
          } `}
        >
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default Home;
