import React from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-[25rem]">
      <div className="w-1/2 bg-contact bg-cover bg-center"></div>
      <div className="w-1/2 flex flex-col items-end justify-around pr-10 bg-[#5d350e] text-white">
        <h2 className="text-[3rem] text-right font-bold">
          Do you have any questions?
        </h2>
        <h2 className="text-[3rem] text-right font-bold">Let's talk!</h2>
        <button
          onClick={() => {
            navigate("/contact");
          }}
          className="w-1/3 border-2 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white px-5 py-10"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
