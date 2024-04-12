import React from "react";
import TopImage from "../assets/home-top.jpg";
import Play from "../assets/play.jpg";
import Game from "../assets/game.jpg";
import Shop from "../assets/shopping.jpg";

const Home = () => {
  return (
    <div>
      <div className="bg-top h-screen">Top</div>
      <div className="px-40">
        <div className="bg-green-400 flex">
          <div className="w-1/2 p-20">
            <h1>Tennis</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              itaque, enim iure officiis ducimus veritatis aperiam laborum! Eos
              iste maiores deserunt corrupti tempora quas ex ab repellendus,
              amet cum iusto?
            </p>
          </div>
          <div className="w-1/2 p-20 flex flex-col items-center">
            <div className="relative w-64 h-64 overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={TopImage}
                alt="Iamge"
              />
            </div>
          </div>
        </div>
        <div className="bg-red-400">
          <h2>Let's enjoy tennis!</h2>
          <div>
            <div className="flex">
              <div className="w-1/2  relative">
                <img
                  className="w-full h-auto brightness-50"
                  src={Play}
                  alt="Playing tennis"
                />
                <div className="p-10 absolute top-0 text-white">
                  <h2>Play</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    quo quis accusantium illum, officia fugiat natus distinctio
                    sunt exercitationem quia similique facilis dignissimos
                    laboriosam, omnis quam architecto dolor repudiandae earum?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    quo quis accusantium illum, officia fugiat natus distinctio
                    sunt exercitationem quia similique facilis dignissimos
                    laboriosam, omnis quam architecto dolor repudiandae earum?
                  </p>
                  <button>Learn more</button>
                </div>
              </div>
              <div className="w-1/2 relative">
                <img
                  className="w-full h-full brightness-50"
                  src={Game}
                  alt="Playing tennis"
                />
                <div className="p-10 absolute top-0 text-white">
                  <h2>Watch</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    quo quis accusantium illum, officia fugiat natus distinctio
                    sunt exercitationem quia similique facilis dignissimos
                    laboriosam, omnis quam architecto dolor repudiandae earum?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    quo quis accusantium illum, officia fugiat natus distinctio
                    sunt exercitationem quia similique facilis dignissimos
                    laboriosam, omnis quam architecto dolor repudiandae earum?
                  </p>
                  <button>Learn more</button>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2  relative">
                <img
                  className="w-full h-auto brightness-50"
                  src={Shop}
                  alt="Playing tennis"
                />
                <div className="p-10 absolute top-0 text-white">
                  <h2>Shopping</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    quo quis accusantium illum, officia fugiat natus distinctio
                    sunt exercitationem quia similique facilis dignissimos
                    laboriosam, omnis quam architecto dolor repudiandae earum?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    quo quis accusantium illum, officia fugiat natus distinctio
                    sunt exercitationem quia similique facilis dignissimos
                    laboriosam, omnis quam architecto dolor repudiandae earum?
                  </p>
                  <button>Learn more</button>
                </div>
              </div>
              <div className="w-1/2 relative">
                <img
                  className="w-full h-full brightness-50"
                  src={Game}
                  alt="Playing tennis"
                />
                <div className="p-10 absolute top-0 text-white">
                  <h2>And more...</h2>
                  <button>Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-32 flex flex-col items-center">
          <h2>Let's connect!</h2>
          <p>If you have any concerns about tennis, just let me know!</p>
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
