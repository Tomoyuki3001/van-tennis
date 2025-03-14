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
        <h1 className="lg:text-[7rem] font-bold m-0 text-center">ABOUT VTG</h1>
      </div>
      <div className="pl-3 pr-3 lg:pl-40 lg:pr-40">
        <div className="flex flex-col items-center mt-20 mb-20 lg:mt-40 lg:mb-40 lg:pl-40 lg:pr-40">
          <h2 className="text-[3rem] font-bold">What is VTG?</h2>
          <img className="w-[15rem] lg:w-[25rem] my-20" src={Logo} alt="" />
          <p className="text-center lg:pl-20 lg:pr-20 text-lg lg:text-xl lg:leading-relaxed">
            VTG (Vancouver Tennis Guide) is a website designed for anyone who is
            interested in playing tennis in Vancouver, whether you are a
            beginner or you want to improve your tennis skills.
          </p>
          <p className="text-center lg:pl-20 lg:pr-20 text-lg lg:text-xl lg:leading-relaxed">
            This platform provides information on tennis games that are held in
            Vancouver, and my advice on how to choose proper gear for your game
            and improve your tennis skills.
          </p>
        </div>
        <div className="my-10">
          <h2 className="text-[3rem] font-bold text-center my-20">About me</h2>
          <div className="lg:flex">
            <div className="lg:w-1/2 flex flex-col items-center">
              <img
                className="w-[15rem] lg:w-[22rem] rounded p-1 border"
                src={Profile}
                alt=""
              />
              <h2 className="mt-10">Tomoyuki Fujii</h2>
              <p>Junior Full-Stack Developer</p>
              <a
                href="https://drive.google.com/file/d/11HwW_kkF2MdIkEIDbqYOMA3v_ljCx_SV/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="no-underline hover:text-white hover:bg-[#0f375d] border-2 border-[#0A58CA] hover:border-[#0f375d] py-4 px-8 mt-3 mb-5 lg:mb-0"
              >
                RESUME
              </a>
            </div>
            <div className="lg:w-1/2 text-center lg:px-10">
              <p className="m-0 text-lg lg:text-xl lg:leading-relaxed">
                I started playing tennis when I was 15 years old. After
                graduating from university, I worked at tennis companies such as{" "}
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
                . I am currently studying computer programming in Vancouver and
                looking for a job to become a web developer.
              </p>
              <br />
              <p className="text-lg lg:text-xl lg:leading-relaxed">
                Vancouver Tennis Guide is a project that I have created using my
                skills in programming and my passion for tennis. I hope you
                would find the information and advice shared on this website
                helpful, particularly for those who are new to tennis.
              </p>
            </div>
          </div>
        </div>
        <div className="my-20 lg:my-40">
          <h3 className="text-center font-bold text-[2rem]">
            I think tennis is a key for...
          </h3>
          <div className="my-20 grid lg:grid-rows-1 grid-rows-2 grid-flow-col">
            <div className="flex flex-col items-center text-center">
              <img className="w-[5rem] lg:w-[7rem]" src={Health} alt="" />
              <h2 className="my-10">Health</h2>
              <p className="text-lg lg:text-xl lg:leading-relaxed lg:pl-20 lg:pr-20">
                Creating opportunities to exercise through tennis and other
                sports can keep your good physical and mental health. Tennis is
                a great opportunity to try other racquet sports as well.
              </p>
            </div>
            <div className="flex flex-col items-center text-center mt-10 lg:mt-0">
              <img className="w-[5rem] lg:w-[7rem]" src={Group} alt="" />
              <h2 className="my-10">Social</h2>
              <p className="text-lg lg:text-xl lg:leading-relaxed lg:pl-20 lg:pr-20">
                Tennis can not be played without a partner. You can enjoy
                playing tennis with someone close to you, or you could try to
                meet new people through tennis. Sports is like a language that
                connects people.
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
