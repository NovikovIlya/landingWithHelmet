import React from "react";
import { HyperText } from "../../../../components/magicui/hyper-text";
import { BlurFade } from "../../../../components/magicui/blur-fade";

export const AboutSection = (): JSX.Element => {
  return (
    <BlurFade delay={0.5} inView>
      <section
        id="about"
        className="flex justify-center mt-14 py-12 md:py-20  w-full px-4 md:px-6 ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 max-w-7xl">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className=""
              alt="Brain illustration"
              src="/imgAvatarDIS.png"
            />
          </div>

          <div className="flex flex-col items-start gap-6 md:gap-10 w-full md:w-2/5">
            <h2 className="font-h3 text-dark text-3xl md:text-[42px] font-bold leading-[140%] text-center md:text-left w-full">
              <BlurFade delay={0.5} inView>
                О нас
              </BlurFade>
            </h2>

            <p className="font-t2 text-dark text-lg md:text-[20px] leading-[150%] text-center md:text-left ">
              Департамент информатизации и&nbsp;связи&nbsp;&mdash; это мозг КФУ
              в&nbsp;плане технологий. Эти ребята следят за&nbsp;тем, чтобы
              у&nbsp;всех был интернет, компы не тупили, и&nbsp;вообще все
              IT-штуки работали на&nbsp;полную катушку. Они шарят, как новые
              технологии могут помочь учиться и&nbsp;создавать классные проекты.
            </p>
          </div>
        </div>
      </section>
    </BlurFade>
  );
};
