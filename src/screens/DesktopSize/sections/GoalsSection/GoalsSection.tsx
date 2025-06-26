import { FlameIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { HyperText } from "../../../../components/magicui/hyper-text";
import { BlurFade } from "../../../../components/magicui/blur-fade";

type GoalType = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const goalsData: GoalType[] = [
  {
    id: 1,
    icon: "/group-5.svg",
    title: "Объединение",
    description:
      "Перейти от&nbsp;подхода множественности личных кабинетов к&nbsp;единой учётной записи с&nbsp;ролевым распределением",
  },
  {
    id: 2,
    icon: "/group-6.svg",
    title: "Новый стек",
    description:
      "Перенести ИАС &laquo;Электронный университет&raquo; на&nbsp;новый технологический стек, с&nbsp;частичным сохранением баз данных на&nbsp;Oracle",
  },
  {
    id: 3,
    icon: "/flameSvg.svg",
    title: "Новый дизайн",
    description:
      "Разработать крутой дизайн, чтобы юзеры не&nbsp;грустили: сделать интерфейс удобным и&nbsp;интуитивно понятным на&nbsp;всех девайсах, браузерах и&nbsp;языках",
  },
  {
    id: 4,
    icon: "/group-7.svg",
    title: "Цифровизация",
    description:
      "Разработать новые HR-сервисы: трудоустройство, кадровый учёт, учёт рабочего времени и&nbsp;другие сервисы, которые упрощают взаимодействие&nbsp;HR с&nbsp;сотрудниками",
  },
];

export const GoalsSection = (): JSX.Element => {
  return (
    <section className="bg-graybluelightbg rounded-[50px_50px_0px_0px] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-[140px]">
        <div className="flex flex-col items-center gap-8 md:gap-[52px]">
          <h2 className="font-h3 text-dark text-3xl md:text-[42px] font-bold text-center leading-[140%] md:mb-[0px]">
            
            <BlurFade delay={0.5} inView>
              Задачи
              </BlurFade>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6 md:gap-[40px]">
            {goalsData.map((goal) => (
              <Card
                key={goal.id}
                className="w-full md:w-[328px] h-auto md:h-[448px] rounded-[50px] border-dashed border-1 overflow-hidden shadow-light-shadow"
              >
                <CardContent className="flex flex-col items-start gap-[5px] md:gap-[52px] p-10 md:p-[52px]">
                  <div className="relative w-[60px] h-[60px]">
                    { (
                      <img
                        className="absolute w-[50px] h-[50px] top-[5px] left-[5px]"
                        alt={`${goal.title} icon`}
                        src={goal.icon}
                      />
                    )}
                  </div>

                  <div className="flex flex-col items-start gap-10 w-full">
                    <h3 className="w-full font-h4 font-bold text-dark text-xl md:text-[29px] leading-[140%]">
                      {goal.title}
                    </h3>

                    <p 
  className="w-full opacity-80 font-t3 font-normal text-[#282828] text-sm md:text-base md:text-[16px] leading-[140%]"
  dangerouslySetInnerHTML={{ __html: goal.description }}
/>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};