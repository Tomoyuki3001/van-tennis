import React from "react";
import ContactPage from "../components/ContactPage";
import Queen from "../assets/play/queen.jpg";
import Stanley from "../assets/play/stanley.jpg";
import Slocan from "../assets/play/slocan.jpg";

const Play = () => {
  return (
    <div>
      <div className="text-white font-bold bg-aboutTop bg-cover bg-center py-40">
        <h1 className="lg:text-[8rem] font-bold m-0 text-center">PLAY</h1>
      </div>
      <div className="px-40">
        <div>
          <h2>Where can we play?</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              libero ea at dolores blanditiis consectetur quasi nesciunt
              doloremque minus temporibus!
            </p>
            <div>
              <div>
                <h3>Outdoor courts</h3>
                <div className="flex">
                  <div>
                    <img className="w-64 h-auto" src={Stanley} alt="" />
                    <h4>Stanley Park</h4>
                  </div>
                  <div>
                    <img className="w-64 h-auto" src={Queen} alt="" />
                    <h4>Queen Elizabeth Park</h4>
                  </div>
                  <div>
                    <img className="w-64 h-auto" src={Slocan} alt="" />
                    <h4>Slocan Park</h4>
                  </div>
                </div>
              </div>
              <h3>Indoor courts</h3>
            </div>
          </div>
        </div>
        <div>People</div>
        <div>Coach</div>
      </div>
      <ContactPage />
    </div>
  );
};

export default Play;
