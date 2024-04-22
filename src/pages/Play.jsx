import React from "react";
import ContactPage from "../components/ContactPage";
import Queen from "../assets/play/queen.jpg";
import Stanley from "../assets/play/stanley.jpg";
import Slocan from "../assets/play/slocan.jpg";
import North from "../assets/play/north.jpg";
import UBC from "../assets/play/ubc.jpg";
import Facebook from "../assets/play/fb.png";
import Meetup from "../assets/play/meetup.png";
import Youtube from "../assets/play/youtube.png";
import Coach from "../assets/play/coach.jpg";
import VTA from "../assets/play/VTA.jpg";

const Play = () => {
  return (
    <div>
      <div className="text-white font-bold bg-playHeader bg-cover bg-center py-40">
        <h1 className="lg:text-[8rem] font-bold m-0 text-center">PLAY</h1>
      </div>
      <div>
        <div className="flex flex-col items-center my-40 text-center pl-3 pr-3 lg:pl-40 lg:pr-40">
          <h2 className="text-[3rem] font-bold">Where can we play?</h2>
          <div>
            <p className="lg:pl-40 lg:pr-40 my-20">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              unde optio possimus aperiam quas quidem vel accusamus cumque
              placeat quisquam debitis ipsum, facilis, inventore, enim quis
              ratione totam vitae dignissimos!
            </p>
            <div>
              <h3 className="my-20 underline">Outdoor courts</h3>
              <div className="grid lg:grid-rows-1 grid-rows-3 grid-flow-col gap-16">
                <div>
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[30rem] h-[20rem] rounded"
                      src={Stanley}
                      alt=""
                    />
                  </div>
                  <h4 className="my-10">Stanley Park</h4>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[30rem] h-[20rem] rounded"
                      src={Queen}
                      alt=""
                    />
                  </div>
                  <h4 className="my-10">Queen Elizabeth Park</h4>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[30rem] h-[20rem] rounded"
                      src={Slocan}
                      alt=""
                    />
                  </div>
                  <h4 className="my-10">Slocan Park</h4>
                </div>
              </div>
              <h3 className="my-20 underline">Indoor courts</h3>
              <div className="lg:flex justify-center">
                <div className="lg:mr-16">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[30rem] h-[20rem] rounded"
                      src={North}
                      alt=""
                    />
                  </div>
                  <h4 className="my-10">North Vancouver Tennis Centre</h4>
                </div>
                <div className="lg:ml-16">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[30rem] h-[20rem] rounded"
                      src={UBC}
                      alt=""
                    />
                  </div>
                  <h4 className="my-10">UBC Tennis Centre</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center my-40 bg-[#0f375d] text-white py-10 lg:py-20 pl-3 pr-3 lg:pl-40 lg:pr-40">
          <h2 className="text-[3rem] font-bold text-center">
            How to find tennis lovers?
          </h2>
          <p className="text-center lg:px-40 my-20">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            ipsum quaerat at repellat dolore illo earum expedita suscipit odio
            dolores reiciendis, iusto similique nesciunt explicabo nobis ad
            esse, natus velit?
          </p>
          <div className="my-20 grid lg:grid-rows-1 grid-rows-3 grid-flow-col gap-16">
            <div className="flex flex-col items-center text-center my-3">
              <img className="lg:w-36 w-28" src={Facebook} alt="" />
              <h2 className="my-10">Facebook</h2>
              <p className="w-full lg:w-[25rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                porro quo architecto nulla quisquam provident, nesciunt sit
                placeat neque modi.
              </p>
            </div>
            <div className="flex flex-col items-center text-center my-3">
              <img className="lg:w-36 w-28" src={Meetup} alt="" />
              <h2 className="my-10">Meetup</h2>
              <p className="w-full lg:w-[25rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam harum quos deleniti voluptas fugit officiis voluptatem
                necessitatibus adipisci, qui explicabo!
              </p>
            </div>
            <div className="flex flex-col items-center text-center my-3">
              <img className="lg:w-36 w-28" src={VTA} alt="" />
              <h2 className="my-10">VTA</h2>
              <p className="w-full lg:w-[25rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam harum quos deleniti voluptas fugit officiis voluptatem
                necessitatibus adipisci, qui explicabo!
              </p>
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col items-center my-40 pl-3 pr-3 lg:pl-40 lg:pr-40">
          <h2 className="text-[3rem] font-bold text-center">
            How to level up your tennis?
          </h2>
          <p className="text-center lg:px-40 my-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            tempora molestias dolore iusto autem error fuga neque explicabo,
            amet voluptas quia assumenda adipisci! Atque veritatis ipsa totam
            mollitia, fugiat dolore!
          </p>
          <div>
            <div className="lg:flex my-20">
              <div className="lg:w-1/2 flex flex-col items-center">
                <img className="w-[30rem]" src={Coach} alt="" />
              </div>
              <div className="lg:w-1/2">
                <h3 className="mt-10 lg:mt-0">Lessons/Coaches</h3>
                <p className="mt-10">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Natus libero sapiente doloribus itaque sunt quasi porro ipsam
                  aliquid quidem tenetur minus odio, aspernatur, debitis
                  repellat perferendis, at vel distinctio quis.
                </p>
              </div>
            </div>
            <div className="lg:flex">
              <div className="lg:w-1/2 flex flex-col items-center">
                <img className="w-[30rem]" src={Youtube} alt="" />
              </div>
              <div className="lg:w-1/2">
                <h3 className="mt-10 lg:mt-0">Online</h3>
                <p className="mt-10">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Natus libero sapiente doloribus itaque sunt quasi porro ipsam
                  aliquid quidem tenetur minus odio, aspernatur, debitis
                  repellat perferendis, at vel distinctio quis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactPage />
    </div>
  );
};

export default Play;
