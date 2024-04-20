import React from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:flex lg:h-[25rem]">
      <div className="lg:w-1/2 bg-contact bg-cover bg-center"></div>
      <div className="lg:w-1/2 lg:flex flex-col items-end justify-around lg:pr-10 bg-[#5d350e] text-white">
        <h2 className="lg:text-[3rem] text-center lg:text-right font-bold">
          Do you have any questions?
        </h2>
        <h2 className="lg:text-[3rem] text-center lg:text-right font-bold">
          Let's talk!
        </h2>
        <div className="flex flex-col items-center lg:items-end">
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="border-2 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white lg:px-5 lg:py-10 p-3"
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
