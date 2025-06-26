import { Button } from "../../../../components/ui/button";
import { BlurFade } from "../../../../components/magicui/blur-fade";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[100vh]  flex items-end  bg-dark  bg-cover bg-[url(/BackgroundFin.svg)]  ">
      <div className="md:container mx-auto md:px-4 h-full ">
        <div className="relative  w-full min-h-[60vh] h-full ">
          <div className="flex flex-col lg:flex-row  items-center justify-center  bg-cover bg-center bg-no-repeat h-full ">
            {/* Left side - Text content */}

            <div className="sm:w-[20%]  flex flex-col items-start gap-8 lg:gap-[52px] py-20 lg:py-0 text-center lg:text-left  lg:w-[45%]">
              <BlurFade delay={0.5}>
                <div style={{ fontFamily: "PT Sans" }} className="flex flex-col sm:items-center lg:items-start gap-8 min-w-[100%] ">
                  <h1 className="font-h2 mt-10 sm:mt-0 text-4xl lg:text-[64px] text-white  text-start ml-[10%] sm:ml-0">
                    <div className="sm:mb-5  text-4xl lg:text-[54px] text-white font-bold">Единый</div>
                    <div className="font-h2 text-4xl sm:text-[54px]  text-white font-bold">личный кабинет</div>
                  </h1>
                  <p className="text-white text-lg lg:text-xl leading-relaxed max-w-[529px] pt-2 flex text-start justify-center">
                    <div className="text-white  sm:text-start text-[18px] sm:text-lg leading-relaxed max-w-[80%] sm:max-w-[529px] font-light">
                      Цифровая платформа, которая упрощает взаимодействие студентов с университетом и образовательными ресурсами
                    </div>
                  </p>
                </div>
              </BlurFade>

              <BlurFade className="w-full hidden sm:block  " delay={0.5}>
                 <a className="" href="https://newlk.kpfu.ru/user">
                <Button className="hover:bg-white hover:text-black w-[50%] md:w-full lg:w-64 px-[37px] py-[15px] bg-bluebright rounded-[30px] font-t3-bold text-white h-[42px]">
                  Начать работу
                </Button>
                </a>
              </BlurFade>

              <BlurFade className="flex flex-wrap container sm:hidden" delay={0.5}>
                 <a className="" href="https://newlk.kpfu.ru/user">
                <Button className="hover:bg-white hover:text-black w-full lg:w-64 px-[37px] py-[15px] bg-bluebright rounded-[30px] font-t3-bold text-white h-[42px]">
                  Начать работу
                </Button>
                </a>
              </BlurFade>
            </div>

            {/* Right side - UI Cards */}

            <div className=" sm:w-[80%] !h-full flex items-end bg-[url(/blur-gradient-3.svg)] ">
              <BlurFade delay={1.0} className="">
                <img src={"/imgInterfacePieces.png"} alt="UI Cards" className="w-full h-full " />
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
