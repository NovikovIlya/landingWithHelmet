import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CareerSection = (): JSX.Element => {

  return (
    <section id="career" className="w-full py-[75px] md:pt-[130px]">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="relative w-full bg-bluelight rounded-[20px] overflow-hidden">
          <CardContent className="flex flex-col md:flex-row p-0 w-full">
            <div
              className="flex flex-col py-8 md:py-[100px] px-6 md:pl-[148px] md:pr-10 relative z-10 md:w-[60%]"
              style={{ fontFamily: "PT Sans" }}>
              <div className="max-w-full md:max-w-[701px]">
                <h3 className="font-h3 text-4xl md:text-[36px] text-white leading-[140%] mb-6 md:mb-10 font-extrabold ">
                  Мечтаешь о карьере в IT?
                </h3>

                <p className="text-white text-base md:text-xl leading-relaxed mb-6 md:mb-10 max-w-prose">
                  <span className="text-base font-medium">
                    Хочешь получить реальный опыт работы, который выделит тебя
                    среди других выпускников?
                  </span>{" "}
                  <span className="text-base !text-[#FFFFFF] font-bold">
                    Департамент информатизации и связи приглашает тебя на
                    стажировку!
                  </span>{" "}
                  <span className="text-base">
                    Ты получишь возможность работать над реальными проектами,
                    учиться у профессионалов и видеть изнутри, как работает IT.
                    Подай заявку прямо сейчас и начни строить своё будущее!
                  </span>
                </p>
                <a href="https://forms.yandex.ru/cloud/67f360af90fa7b1417aaf8ef">
                <Button className=" w-full md:w-auto rounded-[30px] bg-white text-bluedark hover:scale-[1.1] transition-all hover:bg-white  md:px-[37px] py-[25px] mt-[13px] h-[42px]  ">
                  <span className="font-t3-bold">Подать заявку</span>
                </Button>
                </a>
              </div>
            </div>

            <img
              className=" md:w-1/3 lg:w-[40%] h-[40%] flex self-center  md:pr-24 "
              alt="Img business cat"
              src="/imgProgrammerCatFU.png"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
