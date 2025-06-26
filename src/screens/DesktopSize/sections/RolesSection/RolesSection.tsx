import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {  StarFilled   } from '@ant-design/icons';
import { HyperText } from "../../../../components/magicui/hyper-text";
import { BlurFade } from "../../../../components/magicui/blur-fade";

export const RolesSection = (): JSX.Element => {
  // Data for role cards to enable mapping
  const roleCards = [
    {
      id: 1,
      title: "Абитуриент",
      image: "/mask-group-5.png",
      description: [
        "Подача заявления на поступление в КФУ",
        "Участие в олимпиадах для поступающих (Магистриум, Open Doors и пр.)",
        "Просмотр вакансий, отправка резюме, прохождение этапов трудоустройства (если совершеннолетний)",
        "Просмотр каталога образовательных курсов КФУ",
      ],
    },
    {
      id: 2,
      title: "Студент",
      image: "/mask-group-4.png",
      description: [
        "Участие в олимпиадах, научных конференциях школьников под эгидой КФУ (в т.ч. для иностранных граждан)",
        "Подготовка к ОГЭ/ЕГЭ",
        "Просмотр каталога образовательных курсов КФУ",
        "Поступление в лицей и школы в составе КФУ",
      ],
    },
    {
      id: 3,
      title: "Сотрудник",
      image: "/mask-group-3.png",
      description: [
        "Просмотр расчётного листа",
        "Заказ справок из УК и бухгалтерии",
        "Подача заявлений на отпуск, командировки",
        "Запись на прохождение образовательных курсов КФУ",
        "Просмотр вакансий, отправка резюме, прохождение этапов трудоустройства",
        "Подача заявления на поступление в КФУ",
        // "Должностные сервисы, подключаемые индивидуально",
      ],
    },
    {
      id: 4,
      title: "Гость",
      image: "/mask-group-2.png",
      description: [
        "Просмотр функциональных возможностей кабинета (просмотр новостей, анонсов мероприятий)",
        "Просмотр вакансий, отправка резюме, прохождение этапов трудоустройства",
        "Просмотр каталога образовательных курсов КФУ",
        "Подача заявления на поступление в КФУ",
      ],
    },
    {
      id: 5,
      title: "Школьник",
      image: "/mask-group-1.png",
      description: [
        "Участие в олимпиадах, научных конференциях школьников под эгидой КФУ (в т.ч. для иностранных граждан)",
        "Подготовка к ОГЭ/ЕГЭ",
        "Просмотр каталога образовательных курсов КФУ",
        "Поступление в лицей и школы в составе КФУ",
      ],
    },
    {
      id: 6,
      title: "Слушатель",
      image: "/mask-group.png",
      description: [
        "Запись на прохождение образовательных курсов КФУ",
        "Просмотр вакансий, отправка резюме, прохождение этапов трудоустройства",
        "Подача заявления на поступление в КФУ",
      ],
    },
  ];

  return (
    <section id="roles" className="w-full py-10 md:py-[140px] px-4 md:px-12 lg:px-[91px] bg-graybluedarkerbg">
      <div className="flex flex-col items-start gap-8 md:gap-[52px] w-full container mx-auto px-4">
        <h2 className="w-full font-h4 text-2xl md:text-[42px] text-dark text-center font-bold leading-[140%] md:mb-[40px]">
          
         <BlurFade delay={0.5} inView>
            Ролевая модель
            </BlurFade>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 w-full ">
          {roleCards.map((role) => (
            <div key={role.id} className="relative bg-white rounded-[20px] md:rounded-[40px] ">
              <Card className="rounded-[20px] md:rounded-[40px]  h-full ">
                <div className="relative pt-[100px] md:pt-[150px] pb-4 md:pb-[40px]  md:px-[65px] p-5 sm:p-0">
                  <img
                    className="absolute w-[150px] md:w-[207px] h-[150px] md:h-[207px] top-[-30px] md:top-[-58px] left-1/2 transform -translate-x-1/2"
                    alt={`${role.title} icon`}
                    src={role.image}
                  />
                  <CardContent className="p-0">
                    <h3 className="w-full font-h4 text-xl md:text-[32px] text-dark text-center mb-[40px] md:mb-[40px] font-bold">
                      {role.title}
                    </h3>
                    <div className="opacity-80 font-t3 text-sm md:text-sm text-dark space-y-2">
                      {role.description.map((item, index) => (
                        <React.Fragment key={index} >
                          <div className="flex  gap-3 ">
                            {/* <div className=" !w-[3px] !h-[3px]   bg-black  rounded-[50%]"></div> */}
                            <div className="!min-w-[8px] h-[8px] pt-2 "><img className="!w-[4px] !h-[4px]" src='https://iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-circle-1.png'/></div>
                            {/* <StarFilled className="w-[8px] "/> */}
                            <div>{item}</div>
                          </div>
                         
                        </React.Fragment>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};