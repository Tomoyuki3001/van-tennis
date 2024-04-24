import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
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
    <div className="lg:flex lg:h-[25rem]">
      <div className="lg:w-1/2 bg-contact bg-cover bg-center"></div>
      <div className="p-4 lg:w-1/2 lg:flex flex-col items-end justify-around lg:pr-10 bg-[#5d350e] text-white">
        <h2 className="lg:text-[3rem] text-center lg:text-right font-bold">
          Do you have any questions?
        </h2>
        <br />
        <h2 className="lg:text-[3rem] text-center lg:text-right font-bold">
          Let's talk!
        </h2>
        <div className="flex flex-col items-center lg:items-end mt-3">
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className={`lg:w-[15rem] mt-3 border-2 px-8 py-6 border-white ${
              isMobile
                ? "hover:bg-white bg:text-black"
                : "transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black"
            } `}
          >
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
