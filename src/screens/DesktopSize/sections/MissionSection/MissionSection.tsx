import React from "react";

export const MissionSection = (): JSX.Element => {
  return (
    <section className="w-full py-8 md:py-[100px]">
      <div className="container mx-auto px-4 md:px-6 md:pt-[75px]">
        <div className="flex flex-col items-center gap-12 md:gap-24">
          <h2 className="p-4 pt-[88px] text-start sm:text-center  font-h3  text-4xl  sm:text-2xl md:text-[42px] sm:leading-[140%] tracking-[0] max-w-[1000px] ">
            <span className="text-black font-bold text-[28px] sm:text-4xl ">Цель разработки: внедрение принципа </span>
            <br className="hidden sm:block" ></br>
            <span className="text-[#3073d6] text-[28px] sm:text-4xl font-bold">
              «Одно физическое лицо — одна учётная запись»
            </span>
          </h2>

          <div className="relative w-full max-w-[760px] h-[250px] md:h-[411px]">
            <div className="relative h-[280px] md:h-[448px] -top-[37px]">
              {/* Right avatar */}
              <div
                className="opacity-[70%] hidden md:block absolute w-96 h-96 top-[50px] left-[376px] bg-[#e0ecfe] rounded-[192px] bg-cover bg-center blur-[2px]"
                style={{ backgroundImage: "url(/imgavatarright.png)" }}
              />

              {/* Left avatar */}
              <div
                className="opacity-[70%] hidden md:block absolute w-96 h-96 top-[50px] left-0 bg-[#e0ecfe] rounded-[192px] bg-cover bg-center blur-[2px]"
                style={{ backgroundImage: "url(/imgavatarleft.png)" }}
              />

              {/* Mobile avatars */}
               <div
                className="opacity-[70%]  md:hidden absolute w-[60%] h-[60%] top-[20px] left-0 bg-[#e0ecfe] rounded-[192px] bg-cover bg-center blur-[2px]"
                style={{ backgroundImage: "url(/imgavatarleft.png)" }}
              />
              <div
                className="hidden md:hidden w-48 h-48 mx-auto bg-[#e0ecfe] rounded-full bg-cover bg-center"
                style={{ backgroundImage: "url(/imgavatarright.png)" }}
              />
                <div
                className="opacity-[70%]  md:hidden absolute w-[60%] h-[60%] top-[20px] left-[130px] bg-[#e0ecfe] rounded-[192px] bg-cover bg-center blur-[2px]"
                style={{ backgroundImage: "url(/imgavatarright.png)" }}
              />

              {/* Center connecting element */}
              <div
                className="absolute w-full md:w-[448px] h-[200px] md:h-[448px] top-0 left-1/2 transform -translate-x-1/2 bg-contain md:bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/mask-group-6.png)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};