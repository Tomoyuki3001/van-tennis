import React, { useEffect, useState } from "react";
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
import useResizeObserver from "use-resize-observer";

const Watch = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const images = [van4, van2, van3, van1];
  const { ref, width = 1, height = 1 } = useResizeObserver();
  return (
    <div>
      <div className="text-white font-bold bg-watchHeader bg-cover bg-center py-40">
        <h1 className="lg:text-[8rem] font-bold m-0 text-center">WATCH</h1>
      </div>
      <div className="pl-3 pr-3 lg:pl-40 lg:pr-40">
        <div className="flex flex-col items-center mt-20 mb-20 lg:mt-40 lg:mb-40 text-center">
          <h2 className="text-[3rem] font-bold">Tennis tournaments</h2>
          <div>
            <p className="lg:pl-40 lg:pr-40 my-10 text-lg lg:text-xl lg:leading-relaxed">
              You can enjoy watching professional tennis tournaments. These are
              the four biggest professional tennis tournaments held annually in
              the world.
            </p>
            <div>
              <h3 className="my-10">Grand Slam</h3>
              <div className="grid lg:grid-rows-2 grid-rows-4 grid-flow-col lg:px-20">
                <div className="mb-10">
                  <div className="flex flex-col items-center">
                    <img
                      className="lg:w-[30rem] h-[20rem] rounded-sm"
                      src={Ao}
                      alt=""
                    />
                  </div>
                  <h4 className="font-bold mt-5">
                    Australian Open - Australia
                  </h4>
                  <h5>In January</h5>
                </div>
                <div className="mb-10">
                  <div className="flex flex-col items-center">
                    <img
                      className="lg:w-[30rem] h-[20rem] rounded-sm"
                      src={Rg}
                      alt=""
                    />
                  </div>
                  <h4 className="font-bold mt-5">French Open - France</h4>
                  <h5>Late May to Early June</h5>
                </div>
                <div className="mb-10">
                  <div className="flex flex-col items-center">
                    <img
                      className="lg:w-[30rem] h-[20rem] rounded-sm"
                      src={Wb}
                      alt=""
                    />
                  </div>
                  <h4 className="font-bold mt-5">Wimbledon - UK</h4>
                  <h5>Late June to Early July</h5>
                </div>
                <div className="mb-10">
                  <div className="flex flex-col items-center">
                    <img
                      className="lg:w-[30rem] h-[20rem] rounded-sm"
                      src={Uo}
                      alt=""
                    />
                  </div>
                  <h4 className="font-bold mt-5">US Open - USA</h4>
                  <h5>Late August to Early September</h5>
                </div>
              </div>
              <h3 className="my-10">ATP/WTA Tournaments</h3>
              <p className="lg:pl-40 lg:pr-40 my-20 text-lg lg:text-xl lg:leading-relaxed">
                In addition to the Grand Slam tournaments mentioned above, many
                professional tennis tournaments are held annually in the world.
                Based on the organizations listed below.
              </p>
              <div className="lg:flex justify-center">
                <div className="lg:mr-16 flex flex-col items-center">
                  <div className="w-[10rem] lg:w-[15rem] lg:h-[10rem]">
                    <img src={Atp} alt="" />
                  </div>
                  <h4 className="font-bold lg:text-xl text-base mt-3">
                    ATP (Association of Tennis Professionals)
                  </h4>
                </div>
                <div className="mt-20 lg:mt-0 lg:ml-16 flex flex-col items-center">
                  <div className="w-[10rem] lg:w-[15rem] lg:h-[10rem]">
                    <img src={Wta} alt="" />
                  </div>
                  <h4 className="font-bold lg:text-xl text-base mt-3">
                    WTA (Women's Tennis Association)
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20 mb-20 lg:mt-40 lg:mb-40 text-center">
          <h2 className="text-[3rem] font-bold">Tournaments in Vancouver</h2>
          <p className="text-center lg:pl-40 lg:pr-40 mt-5 mb-0 lg:mt-40 lg:mb-40 text-lg lg:text-xl lg:leading-relaxed">
            There is also an international tournament that we can watch in
            Vancouver. This is a great opportunity to watch high-level
            international competitions up close and to feel the vibes of the
            games live, which is a different feeling through a screen.
          </p>
          <div className="my-20 grid lg:grid-rows-1 sm:grid-rows-2 grid-flow-col lg:px-32">
            <div className="flex flex-col items-center text-center">
              <img
                className="w-[20rem] lg:w-[30rem] rounded-sm"
                src={Van}
                alt=""
              />
              <h2 className="my-10">Odlum Brown VanOpen</h2>
              <p className="lg:pl-40 lg:pr-40 text-lg lg:text-xl lg:leading-relaxed">
                <span>
                  <a
                    href="https://vanopen.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="no-underline"
                  >
                    The Odlum Brown VanOpen
                  </a>
                </span>
                , a Tennis Canada Event, is the largest and most celebrated
                Men’s and Women’s professional tennis tournament in Western
                Canada and the Pacific Northwest.
              </p>
            </div>
          </div>
          <div
            ref={ref}
            style={
              isMobile
                ? { width: "25rem", height: "20rem" }
                : { width: "50rem", height: "30rem" }
            }
          >
            <SimpleImageSlider
              width={width}
              height={height}
              images={images}
              showNavs={true}
              showBullets={true}
            />
          </div>
        </div>
      </div>
      <ContactPage />
    </div>
  );
};

export default Watch;
