import React from "react";
import Logo from "../assets/about/logo-black.png";
import Profile from "../assets/home/profile.jpg";
import Health from "../assets/about/health.png";
import Group from "../assets/about/group.png";
import ContactPage from "../components/ContactPage";

const About = () => {
  return (
    <div>
      <div className="text-white font-bold bg-aboutTop bg-cover bg-center py-40">
        <h1 className="lg:text-[8rem] font-bold m-0 text-center">ABOUT VTG</h1>
      </div>
      <div className="pl-3 pr-3 lg:pl-40 lg:pr-40">
        <div className="flex flex-col items-center my-40 lg:pl-40 lg:pr-40">
          <h2 className="text-[3rem] font-bold">What's VTG?</h2>
          <img className="w-[15rem] lg:w-[30rem] my-20" src={Logo} alt="" />
          <p className="text-center lg:pl-20 lg:pr-20 text-xl lg:text-2xl lg:leading-relaxed">
            VTG(Vancouver Tennis Guide) is a website designed for anyone who is
            interested in playing tennis in Vancouver, whether they want to
            start playing or improve their tennis level. It is a place where you
            can not only play tennis, but also enjoy watching and shopping.
          </p>
        </div>
        <div className="my-10">
          <h2 className="text-[3rem] font-bold text-center my-20">About me</h2>
          <div className="lg:flex">
            <div className="lg:w-1/2 flex flex-col items-center">
              <img
                className="w-[20rem] lg:w-[30rem] rounded p-1 border mb-16 lg:mb-0"
                src={Profile}
                alt=""
              />
            </div>
            <div className="lg:w-1/2 text-center lg:py-5 lg:px-10">
              <p className="m-0 text-xl lg:text-2xl lg:leading-relaxed">
                I started playing tennis when I was 15 years old. After
                graduating from university, I have worked at a tennis brand
                (DUNLOP/BabolaT). <br />
                I’m currently studying programming in Vancouver and looking for
                a job to become a web developer.
              </p>
              <p className="mt-5 text-xl lg:text-2xl lg:leading-relaxed">
                This time I have shaped what I’m learning and what I can use
                from my experience. I have compiled not only information on how
                to improve your tennis, but also advice on gear, information on
                tennis, and other information that you should keep in mind when
                enjoying tennis in Vancouver. This will be helpful to enjoy
                tennis more and give you the right advice for those who are
                thinking about starting to play tennis.
              </p>
              <p className="mt-5 text-xl lg:text-2xl lg:leading-relaxed">
                This will be helpful to enjoy tennis more and give you the right
                advice for those who are thinking about starting to play tennis.
              </p>
            </div>
          </div>
        </div>
        <div className="my-20 lg:my-40">
          <h3 className="text-center font-bold text-[2rem]">
            I think Tennis makes...
          </h3>
          <div className="my-20 grid lg:grid-rows-1 grid-rows-2 grid-flow-col lg:px-32">
            <div className="flex flex-col items-center text-center">
              <img className="w-[5rem] lg:w-[7rem]" src={Health} alt="" />
              <h2 className="my-10">Health</h2>
              <p className="w-full lg:w-[40rem] text-xl lg:text-2xl lg:leading-relaxed">
                Creating opportunities to exercise through tennis and other
                sports can keep your body and mental health well and improve
                your physical. Tennis is a great opportunity to try other
                racquet sports.
              </p>
            </div>
            <div className="flex flex-col items-center text-center mt-10 lg:mt-0">
              <img className="w-[5rem] lg:w-[7rem]" src={Group} alt="" />
              <h2 className="my-10">Social</h2>
              <p className="w-full lg:w-[40rem] text-xl lg:text-2xl lg:leading-relaxed">
                Tennis cannot be played without a partner or opponent. You can
                enjoy playing tennis with someone close to you, or you can try
                to meet new people through tennis. Sports is like a language
                that connects people.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactPage />
    </div>
  );
};

export default About;
