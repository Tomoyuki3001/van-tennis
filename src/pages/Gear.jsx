import React from "react";
import ContactPage from "../components/ContactPage";
import Ball from "../assets/gear/ball.png";
import Racket from "../assets/gear/racket.jpg";
import Shoes from "../assets/gear/shoes.png";
import Wear from "../assets/gear/wear.jpg";
import Towel from "../assets/gear/towel.jpg";
import Rackets from "../assets/gear/rackets.jpg";
import String from "../assets/gear/string.jpg";
import RR from "../assets/gear/rr.jpg";
import K8 from "../assets/gear/k8.jpg";
import Tad from "../assets/gear/tad.png";

const Gear = () => {
  return (
    <div>
      <div className="text-white font-bold bg-gearHeader bg-cover bg-center py-40">
        <h1 className="lg:text-[8rem] font-bold m-0 text-center">GEAR</h1>
      </div>
      <div className="pl-3 pr-3 lg:pl-40 lg:pr-40 flex flex-col items-center text-center my-40">
        <h2 className="text-[3rem] font-bold">What you need to play?</h2>
        <p className="lg:pl-40 lg:pr-40 my-20 text-lg lg:text-xl lg:leading-relaxed">
          To play tennis, you will need a racket and other equipment. Here is a
          summary of what you need to pay attention to and what you need to
          prepare to play tennis.
        </p>
        <div className="grid lg:grid-rows-1 grid-rows-3 grid-flow-col gap-6 lg:px-20">
          <div className="mb-10">
            <div className="flex flex-col items-center">
              <img
                className="w-[12rem] lg:w-[13rem] h-[20rem]"
                src={Ball}
                alt=""
              />
            </div>
            <h4 className="mt-5">Balls</h4>
            <p className="text-lg lg:text-xl lg:leading-relaxed">
              Balls are indispensable for playing tennis. There are practice
              balls and match balls. A practice ball is sufficient and less
              expensive than a match ball. You can use it several times, but
              when it gets old, you should buy a new ball. If you keep using old
              balls it can lead to injury.
            </p>
          </div>
          <div className="mb-10">
            <div className="flex flex-col items-center">
              <img className="w-[8rem] h-[20rem]" src={Racket} alt="" />
            </div>
            <h4 className="mt-5">Rackets</h4>
            <p className="text-lg lg:text-xl lg:leading-relaxed">
              This is another essential piece of equipment for playing tennis.
              Using a racket with the right weight and head size for you will
              help prevent injuries and speed up your improvement. Please check
              below to learn more about how to choose a racket.
            </p>
          </div>
          <div className="mb-10">
            <div className="flex flex-col items-center">
              <img className="w-[25rem] h-[20rem]" src={Shoes} alt="" />
            </div>
            <h4 className="mt-5">Shoes</h4>
            <p className="text-lg lg:text-xl lg:leading-relaxed">
              I don’t recommend playing tennis in sneakers or other casual
              shoes. Tennis is a sport that involves moving back and forth, left
              and right, and if you don’t wear shoes suitable for exercise, it
              can lead to injuries to your feet and ankles. It’s a good idea to
              have a pair of tennis shoes.
            </p>
          </div>
        </div>
        <div>
          <p className="lg:pl-40 lg:pr-40 my-20 text-lg lg:text-xl lg:leading-relaxed">
            There are other pieces of equipment you might need to play tennis.
            These will help you play more comfortably.
          </p>
          <div className="grid lg:grid-rows-1 grid-rows-2 grid-flow-col lg:px-20">
            <div className="mb-10">
              <div className="flex flex-col items-center">
                <img className="w-[20rem] h-[20rem]" src={Wear} alt="" />
              </div>
              <h4 className="mt-5">Clothes</h4>
              <p className="lg:pl-20 lg:pr-20 text-lg lg:text-xl lg:leading-relaxed">
                Wear tennis clothes or other sportswear suitable for exercise.
                Also, after playing, you may get cold, so an extra jacket or
                similar one will be helpful.
              </p>
            </div>
            <div className="mb-10">
              <div className="flex flex-col items-center">
                <img
                  className="w-[20rem] h-[20rem] rounded"
                  src={Towel}
                  alt=""
                />
              </div>
              <h4 className="mt-5">Other equipments</h4>
              <p className="lg:pl-20 lg:pr-20 text-lg lg:text-xl lg:leading-relaxed">
                Bring any other items needed for exercise, such as a water
                bottle and towel. Hydration is especially important, so it’s a
                good idea to have a large bottle every time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0f375d] text-white flex flex-col items-center text-center pl-3 pr-3 lg:pl-40 lg:pr-40 py-20">
        <h3>How to select rackets and strings?</h3>
        <p className="text-center lg:px-40 lg:my-20 my-10 text-lg lg:text-xl lg:leading-relaxed">
          Incorrect racket weight and string tension can lead to unexpected
          injuries and make tennis less enjoyable. Here is a summary of points
          to keep in your mind.
        </p>
        <div>
          <div className="lg:flex my-20">
            <div className="lg:w-1/2 flex flex-col items-center">
              <img className="w-[40rem] rounded" src={Rackets} alt="" />
            </div>
            <div className="lg:w-1/2">
              <h3 className="mt-10 mb-10 lg:mt-0">Racket weight/head size</h3>
              <p className="lg:pl-20 lg:pr-20 text-center text-lg lg:text-xl lg:leading-relaxed">
                If you’re new to tennis, around 280g is recommended. If you
                don’t play any other sport and have never used a racket before,
                start with less than 280g. It's also safe to say that the head
                size should be at least 100 inches. It does not have to be too
                big, so try to choose 100 to 110 inches as a standard. Using a
                racquet with a weight that is not particularly suitable for you
                will reduce the quality of your play and may even cause injury.
              </p>
            </div>
          </div>
          <div className="lg:flex">
            <div className="lg:w-1/2 flex flex-col items-center">
              <img className="w-[40rem] rounded" src={String} alt="" />
            </div>
            <div className="lg:w-1/2">
              <h3 className="mt-10 mb-10 lg:mt-0">String type/tension</h3>
              <p className="lg:pl-20 lg:pr-20 text-center text-lg lg:text-xl lg:leading-relaxed">
                For beginners, multifilament strings make the ball fly better
                and are easier on the hands. Polyester is usually for
                intermediate or advanced players. Using polyester string when
                you are not used to it can be a potential of causing injury. I
                recommend a tension of 45 pounds or less. If the tension is too
                high, the ball will not fly as far, so let's start with 45
                pounds. Also, it’s very good to consult with a stringer at a
                tennis store or sport shop.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-40 text-center pl-3 pr-3 lg:pl-40 lg:pr-40">
        <h2 className="text-[3rem] font-bold">Tennis shops in Vancouver</h2>
        <p className="text-center lg:px-40 my-10 text-lg lg:text-xl lg:leading-relaxed">
          Here is a list of tennis stores in Vancouver. I have been there, and
          when you have a problem about gear, the best thing to do is to ask an
          expert. It’s safer to consult with an expert than to make a mistake by
          buying something easily on the Internet.
        </p>
        <div className="lg:my-20 grid lg:grid-rows-1 grid-rows-3 grid-flow-col gap-4">
          <div className="flex flex-col items-center text-center">
            <img
              className="w-full lg:w-[30rem] lg:h-[20rem] rounded"
              src={RR}
              alt=""
            />
            <h2 className="my-10">
              <a
                href="https://racketsandrunners.ca/"
                target="_blank"
                rel="noreferrer"
                className="no-underline"
              >
                Rackets & Runners
              </a>
            </h2>
            <p className="px-10 text-lg lg:text-xl">
              3880 Oak St, Vancouver, BC V6H 2M5
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              className="w-full lg:w-[30rem] lg:h-[20rem] rounded"
              src={K8}
              alt=""
            />
            <h2 className="my-10">
              <a
                href="https://k8strings.com/"
                target="_blank"
                rel="noreferrer"
                className="no-underline"
              >
                K8 Strings
              </a>
            </h2>
            <p className="px-10 text-lg lg:text-xl">
              Unit 228, 2800 East 1st Avenue, Vancouver, B.C V5M 4N9
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              className="w-full lg:w-[30rem] lg:h-[20rem] rounded"
              src={Tad}
              alt=""
            />
            <h2 className="my-10">
              <a
                href="https://tadssportinggoods.ca/"
                target="_blank"
                rel="noreferrer"
                className="no-underline"
              >
                Tad's Sporting Goods
              </a>
            </h2>
            <p className="px-10 text-lg lg:text-xl">
              8570 Granville St, Vancouver, BC V6P 4Z7
            </p>
          </div>
        </div>
      </div>
      <ContactPage />
    </div>
  );
};

export default Gear;
