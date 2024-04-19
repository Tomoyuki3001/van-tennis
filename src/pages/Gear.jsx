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
      <div className="px-40">
        <div className="flex flex-col items-center my-40 text-center">
          <h2 className="text-[3rem] font-bold">What you need to play?</h2>
          <div>
            <p className="px-40 my-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              unde optio possimus aperiam quas quidem vel accusamus cumque
              placeat quisquam debitis ipsum, facilis, inventore, enim quis
              ratione totam vitae dignissimos!
            </p>
            <div>
              <div className="grid lg:grid-rows-1 sm:grid-rows-3 grid-flow-col lg:px-20">
                <div className="mb-10">
                  <div className="flex flex-col items-center">
                    <img className="w-[15rem] h-[20rem]" src={Ball} alt="" />
                  </div>
                  <h4 className="mt-5">Balls</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Hic recusandae blanditiis temporibus obcaecati eum,
                    perferendis quas error. Nam, exercitationem laboriosam!
                  </p>
                </div>
                <div className="mb-10">
                  <div className="flex flex-col items-center">
                    <img className="w-[20rem] h-[20rem]" src={Racket} alt="" />
                  </div>
                  <h4 className="mt-5">Rackets</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    aspernatur dolorem id repudiandae. Quidem a dolorum cumque
                    quasi tempora iusto!
                  </p>
                </div>
                <div className="mb-10">
                  <div className="flex flex-col items-center">
                    <img className="w-[30rem] h-[20rem]" src={Shoes} alt="" />
                  </div>
                  <h4 className="mt-5">Shoes</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quae dolore optio quisquam sint! Assumenda, ea
                    exercitationem voluptatibus incidunt doloribus ipsum.
                  </p>
                </div>
              </div>
              <div>
                <h3>Other equipments</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore veritatis deserunt quibusdam nulla autem repellat et,
                  animi minus quae optio.
                </p>
                <div className="grid lg:grid-rows-1 sm:grid-rows-2 grid-flow-col lg:px-20">
                  <div className="mb-10">
                    <div className="flex flex-col items-center">
                      <img className="w-[20rem] h-[20rem]" src={Wear} alt="" />
                    </div>
                    <h4 className="mt-5">Clothes</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Hic recusandae blanditiis temporibus obcaecati eum,
                      perferendis quas error. Nam, exercitationem laboriosam!
                    </p>
                  </div>
                  <div className="mb-10">
                    <div className="flex flex-col items-center">
                      <img className="w-[20rem] h-[20rem]" src={Towel} alt="" />
                    </div>
                    <h4 className="mt-5">Other equipments</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est aspernatur dolorem id repudiandae. Quidem a dolorum
                      cumque quasi tempora iusto!
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="my-10">How to select rackets and strings?</h3>
              <p className="text-center px-40 my-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                tempora molestias dolore iusto autem error fuga neque explicabo,
                amet voluptas quia assumenda adipisci! Atque veritatis ipsa
                totam mollitia, fugiat dolore!
              </p>
              <div>
                <div className="flex my-20">
                  <div className="w-1/2 flex flex-col items-center">
                    <img className="w-[30rem]" src={Rackets} alt="" />
                  </div>
                  <div className="w-1/2">
                    <h3>Racket weight/face size</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Natus libero sapiente doloribus itaque sunt quasi porro
                      ipsam aliquid quidem tenetur minus odio, aspernatur,
                      debitis repellat perferendis, at vel distinctio quis.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/2 flex flex-col items-center">
                    <img className="w-[30rem]" src={String} alt="" />
                  </div>
                  <div className="w-1/2">
                    <h3>Strings types/tension</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Natus libero sapiente doloribus itaque sunt quasi porro
                      ipsam aliquid quidem tenetur minus odio, aspernatur,
                      debitis repellat perferendis, at vel distinctio quis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center my-40">
          <h2 className="text-[3rem] font-bold">Tennis shops in Vancouver</h2>
          <p className="text-center px-40 my-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            ipsum quaerat at repellat dolore illo earum expedita suscipit odio
            dolores reiciendis, iusto similique nesciunt explicabo nobis ad
            esse, natus velit?
          </p>
          <div className="my-20 grid lg:grid-rows-1 sm:grid-rows-3 grid-flow-col px-32">
            <div className="flex flex-col items-center text-center">
              <img className="w-50" src={RR} alt="" />
              <h2 className="my-10">Rackets & Runners</h2>
              <p className="w-1/2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                porro quo architecto nulla quisquam provident, nesciunt sit
                placeat neque modi.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img className="w-50" src={K8} alt="" />
              <h2 className="my-10">K8 Strings</h2>
              <p className="w-1/2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                porro quo architecto nulla quisquam provident, nesciunt sit
                placeat neque modi.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img className="w-50" src={Tad} alt="" />
              <h2 className="my-10">Tad's Sporting Goods</h2>
              <p className="w-1/2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                porro quo architecto nulla quisquam provident, nesciunt sit
                placeat neque modi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactPage />
    </div>
  );
};

export default Gear;
