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
        <div className="flex flex-col items-center mt-20 mb-20 lg:mt-40 lg:mb-40 text-center pl-3 pr-3 lg:pl-40 lg:pr-40">
          <h2 className="text-[3rem] font-bold">Where can we play?</h2>
          <div>
            <p className="lg:pl-40 lg:pr-40 my-20 text-lg lg:text-xl lg:leading-relaxed">
              Where can we play tennis in Vancouver? Tennis courts can be found
              in parks and other places, so anyone can play tennis. You may also
              want to check out indoor courts, where you can enjoy playing
              tennis even on rainy days.
            </p>
            <div>
              <h3 className="my-20 underline">Outdoor courts</h3>
              <div className="grid lg:grid-rows-1 grid-rows-3 grid-flow-col gap-4">
                <div>
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[30rem] h-[20rem] rounded-sm"
                      src={Stanley}
                      alt=""
                    />
                  </div>
                  <h4 className="my-10">Stanley Park</h4>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[30rem] h-[20rem] rounded-sm"
                      src={Queen}
                      alt=""
                    />
                  </div>
                  <h4 className="my-10">Queen Elizabeth Park</h4>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[30rem] h-[20rem] rounded-sm"
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
                      className="w-[30rem] h-[20rem] rounded-sm"
                      src={North}
                      alt=""
                    />
                  </div>
                  <h4 className="my-10">North Vancouver Tennis Centre</h4>
                </div>
                <div className="lg:ml-16">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[30rem] h-[20rem] rounded-sm"
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
          <p className="text-center lg:pl-40 lg:pr-40 mt-20 lg:mb-20 text-lg lg:text-xl lg:leading-relaxed">
            If there is no one around you who plays tennis, how can you find a
            partner? In this case, you might use social media such as Facebook
            or Meetup to find tennis players nearby.
          </p>
          <div className="my-20 grid lg:grid-rows-1 grid-rows-3 grid-flow-col gap-16">
            <div className="flex flex-col items-center text-center my-3">
              <img className="w-[5rem] lg:w-[8rem]" src={Facebook} alt="" />
              <h2 className="my-10">Facebook</h2>
              <p className="w-full lg:w-[25rem] text-lg lg:text-xl lg:leading-relaxed">
                There is a tennis community page where you can post and members
                in the community will respond. Many people are looking for a
                partner, so be sure to check out{" "}
                <span className="span">
                  <a
                    href="https://www.facebook.com/groups/126873967398281/"
                    target="_blank"
                    rel="noreferrer"
                    className="no-underline text-blue-400"
                  >
                    here
                  </a>
                </span>
                .
              </p>
            </div>
            <div className="flex flex-col items-center text-lg lg:text-xl text-center my-3">
              <img className="w-[5rem] lg:w-[8rem]" src={Meetup} alt="" />
              <h2 className="my-10">Meetup</h2>
              <p className="w-full lg:w-[25rem] lg:leading-relaxed">
                There are organizers who create events to play tennis, so search
                for tennis in the events and attend an upcoming meetup at a park
                near you.
              </p>
            </div>
            <div className="flex flex-col items-center text-center my-3">
              <img className="w-[5rem] lg:w-[8rem]" src={VTA} alt="" />
              <h2 className="my-10">VTA</h2>
              <p className="w-full lg:w-[25rem] text-lg lg:text-xl lg:leading-relaxed">
                <span>
                  <a
                    href="https://vtatennis.ca/"
                    target="_blank"
                    rel="noreferrer"
                    className="no-underline text-blue-400"
                  >
                    The Vancouver Tennis Association
                  </a>
                </span>{" "}
                provides information on tennis matches and practice
                opportunities. It's also a good way to join and find a partner.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col items-center my-40 pl-3 pr-3 lg:pl-40 lg:pr-40">
          <h2 className="text-[3rem] font-bold text-center">
            How to level up your tennis skills?
          </h2>
          <p className="text-center lg:px-40 my-10 text-lg lg:text-xl lg:leading-relaxed">
            You might take practice to improve your tennis skills. If you have
            the opportunity to learn from someone else, you will improve
            correctly and quickly more. Try taking tennis lessons or private
            lessons to improve your tennis skills.
          </p>
          <div>
            <div className="lg:flex my-20">
              <div className="lg:w-1/2 flex flex-col items-center">
                <img className="w-[30rem] rounded-sm" src={Coach} alt="" />
              </div>
              <div className="lg:w-1/2">
                <h3 className="mt-10 lg:mt-0">Lessons/Coaches</h3>
                <p className="mt-10 text-lg lg:text-xl lg:leading-relaxed">
                  This is a way to improve your tennis skills by learning from a
                  nearby tennis club or from a private tennis coach. You can
                  find a B.C.certificated tennis coach{" "}
                  <span>
                    <a
                      href="https://www.tennisbc.org/coaching/tennis-professionals-association/"
                      target="_blank"
                      rel="noreferrer"
                      className="no-underline"
                    >
                      here
                    </a>
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="lg:flex">
              <div className="lg:w-1/2 flex flex-col items-center">
                <img className="w-[30rem] rounded-sm" src={Youtube} alt="" />
              </div>
              <div className="lg:w-1/2">
                <h3 className="mt-10 lg:mt-0">Online contents</h3>
                <p className="mt-10 text-lg lg:text-xl lg:leading-relaxed">
                  You can find many tennis lesson videos on YouTube and social
                  media. There are also many short videos, so it is a good idea
                  to watch the videos you need, according to your own practice!
                  My favorite content is{" "}
                  <span>
                    <a
                      href="https://www.instagram.com/yuki1998takamura/"
                      target="_blank"
                      rel="noreferrer"
                      className="no-underline"
                    >
                      Yuki Takamura
                    </a>
                  </span>
                  .
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
