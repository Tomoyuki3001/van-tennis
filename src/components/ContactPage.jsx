import React from "react";

const ContactPage = () => {
  return (
    <div className="flex h-[25rem]">
      <div className="w-1/2 bg-contact bg-cover bg-center"></div>
      <div className="w-1/2 flex flex-col items-end justify-around pr-10 bg-[#0F375D] text-white">
        <h2 className="text-[3rem] text-right font-bold">
          Do you have any questions?
        </h2>
        <h2 className="text-[3rem] text-right font-bold">Let's talk!</h2>
        <a className="no-underline" href="/contact">
          <button className="px-5 py-10 border text-white hover:bg-black transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:border-black">
            CONTACT
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
