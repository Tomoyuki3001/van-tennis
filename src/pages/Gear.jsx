import React from "react";
import ContactPage from "../components/ContactPage";

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
                    {/* <img className="w-[30rem] h-[20rem]" src={Ao} alt="" /> */}
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
                    {/* <img className="w-[30rem] h-[20rem]" src={Rg} alt="" /> */}
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
                    {/* <img className="w-[30rem] h-[20rem]" src={Wb} alt="" /> */}
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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore veritatis deserunt quibusdam nulla autem repellat et,
                  animi minus quae optio.
                </p>
                <div className="flex flex-col items-center">
                  <div className="flex">
                    <div className="mb-10">
                      <div className="flex flex-col items-center">
                        {/* <img className="w-[30rem] h-[20rem]" src={Rg} alt="" /> */}
                      </div>
                      <h4 className="mt-5">French Open</h4>
                      <h5>late May to early June</h5>
                    </div>
                    <div className="mb-10">
                      <div className="flex flex-col items-center">
                        {/* <img className="w-[30rem] h-[20rem]" src={Rg} alt="" /> */}
                      </div>
                      <h4 className="mt-5">French Open</h4>
                      <h5>late May to early June</h5>
                    </div>
                  </div>
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
                    {/* <img src={Atp} alt="" /> */}
                  </div>
                  <h4 className="my-10">
                    ATP (Association of Tennis Professionals)
                  </h4>
                </div>
                <div className="ml-16 flex flex-col items-center">
                  <div className="w-[20rem] h-[10rem]">
                    {/* <img src={Wta} alt="" /> */}
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
              {/* <img className="w-50" src={Van} alt="" /> */}
              <h2 className="my-10">Odlum Brown VanOpen</h2>
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
