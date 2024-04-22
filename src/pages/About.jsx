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
          <p className="text-center lg:pl-20 lg:pr-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            accusamus facilis illum voluptatem eaque laborum quos nihil natus
            animi, doloribus magnam deleniti repudiandae quidem iusto obcaecati
            soluta libero placeat maiores.
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
        <div className="my-20 lg:my-40">
          <h3 className="text-center font-bold text-[2rem]">
            I think Tennis makes...
          </h3>
          <div className="my-20 grid lg:grid-rows-1 grid-rows-2 grid-flow-col lg:px-32">
            <div className="flex flex-col items-center text-center">
              <img className="w-[5rem] lg:w-[7rem]" src={Health} alt="" />
              <h2 className="my-10">Health</h2>
              <p className="w-full lg:w-[40rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                porro quo architecto nulla quisquam provident, nesciunt sit
                placeat neque modi.
              </p>
            </div>
            <div className="flex flex-col items-center text-center mt-10 lg:mt-0">
              <img className="w-[5rem] lg:w-[7rem]" src={Group} alt="" />
              <h2 className="my-10">Social</h2>
              <p className="w-full lg:w-[40rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam harum quos deleniti voluptas fugit officiis voluptatem
                necessitatibus adipisci, qui explicabo!
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
