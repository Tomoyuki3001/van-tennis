import React from "react";
import ContactPage from "../components/ContactPage";
import Ao from "../assets/watch/ao.jpg";
import Rg from "../assets/watch/rg.jpg";
import Wb from "../assets/watch/wb.jpg";
import Uo from "../assets/watch/us.jpg";
import Atp from "../assets/watch/atp.png";
import Wta from "../assets/watch/wta.png";
import Van from "../assets/watch/vanopen.png";
import van1 from "../assets/watch/tennis1.jpg";
import van2 from "../assets/watch/tennis2.jpg";
import van3 from "../assets/watch/tennis3.jpg";
import van4 from "../assets/watch/tennis4.jpg";
import SimpleImageSlider from "react-simple-image-slider";

const Watch = () => {
  const images = [van1, van2, van3, van4];
  return (
    <div>
      <div className="text-white font-bold bg-watchHeader bg-cover bg-center py-40">
        <h1 className="lg:text-[8rem] font-bold m-0 text-center">WATCH</h1>
      </div>
      <div className="px-40">
        <div className="flex flex-col items-center my-40 text-center">
          <h2 className="text-[3rem] font-bold">Tennis games</h2>
          <div>
            <p className="px-40 my-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              unde optio possimus aperiam quas quidem vel accusamus cumque
              placeat quisquam debitis ipsum, facilis, inventore, enim quis
              ratione totam vitae dignissimos!
            </p>
            <div>
              <h3 className="my-10">Grand Slam</h3>
              <div className="grid lg:grid-rows-2 sm:grid-rows-4 grid-flow-col lg:px-20">
                <div className="mb-10">
                  <div className="flex flex-col items-center">
                    <img className="w-[30rem] h-[20rem]" src={Ao} alt="" />
                  </div>
                  <h4 className="mt-5">Australian Open</h4>
                  <h5>in January</h5>
                </div>
                <div className="mb-10">
                  <div className="flex flex-col items-center">
                    <img className="w-[30rem] h-[20rem]" src={Rg} alt="" />
                  </div>
                  <h4 className="mt-5">French Open</h4>
                  <h5>late May to early June</h5>
                </div>
                <div className="mb-10">
                  <div className="flex flex-col items-center">
                    <img className="w-[30rem] h-[20rem]" src={Wb} alt="" />
                  </div>
                  <h4 className="mt-5">Wimbledon</h4>
                  <h5>late June to early July</h5>
                </div>
                <div className="mb-10">
                  <div className="flex flex-col items-center">
                    <img className="w-[30rem] h-[20rem]" src={Uo} alt="" />
                  </div>
                  <h4 className="mt-5">US Open</h4>
                  <h5>late August to early September</h5>
                </div>
              </div>
              <h3 className="my-10">ATP/WTA Tournaments</h3>
              <p className="px-40 my-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident a, odit consequatur sint quis, accusamus ratione
                sapiente repellendus odio et minima beatae ipsum cumque ipsa
                labore quibusdam ullam adipisci aut.
              </p>
              <div className="flex justify-center">
                <div className="mr-16 flex flex-col items-center">
                  <div className="w-[20rem] h-[10rem]">
                    <img src={Atp} alt="" />
                  </div>
                  <h4 className="my-10">
                    ATP (Association of Tennis Professionals)
                  </h4>
                </div>
                <div className="ml-16 flex flex-col items-center">
                  <div className="w-[20rem] h-[10rem]">
                    <img src={Wta} alt="" />
                  </div>
                  <h4 className="my-10">WTA (Women's Tennis Association)</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center my-40">
          <h2 className="text-[3rem] font-bold">Tournaments in Vancouver</h2>
          <p className="text-center px-40 my-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            ipsum quaerat at repellat dolore illo earum expedita suscipit odio
            dolores reiciendis, iusto similique nesciunt explicabo nobis ad
            esse, natus velit?
          </p>
          <div className="my-20 grid lg:grid-rows-1 sm:grid-rows-2 grid-flow-col px-32">
            <div className="flex flex-col items-center text-center">
              <img className="w-50" src={Van} alt="" />
              <h2 className="my-10">Odlum Brown VanOpen</h2>
              <p className="w-1/2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                porro quo architecto nulla quisquam provident, nesciunt sit
                placeat neque modi.
              </p>
            </div>
          </div>
          <SimpleImageSlider
            width={600}
            height={400}
            images={images}
            showNavs={true}
            showBullets={true}
          />
        </div>
      </div>
      <ContactPage />
    </div>
  );
};

export default Watch;
