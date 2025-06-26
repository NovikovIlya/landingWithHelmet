import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { HyperText } from '../../../../components/magicui/hyper-text';
import { BlurFade } from '../../../../components/magicui/blur-fade';

interface Feature {
  title: string;
  description: string[];
}

interface TimelineItem {
  id: string;
  title: string;
  date: string;
  year: string;
  image: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  statusText: string;
  description: string;
  features: Feature[];
  additionalFeatures?: string[];
}



export const RoadmapSection = () => {
  const items = [
  {
    id: 'project-1',
    title: '2022 - 2023',
    date: '',
    year: '',
    image: '/image1.png',
    status: 'completed',
    statusText: 'Завершено',
    description: '',
    features: [
      {
        title: 'Декабрь 2022',
        description: ['Отбор кандидатов на стажировку и формирование проектных команд']
      },
      {
        title: 'Февраль - Март 2023',
        description: ['Запуск проекта по разработке Единого личного кабинета']
      },
      {
        title: 'Сентябрь - Октябрь 2023',
        description: ['Разработка англоязычного кабинета для поступающих']
      },
      {
        title: 'Ноябрь 2023',
        description: ['Отбор на вторую волну стажировок DISTRICT', 'Начало проектов: Трудоустройство, Отпуск, Практики студентов, Командировки, Центр единого облуживания']
      }
    ]
  },
  {
    id: 'project-1',
    title: '2024',
    date: '',
    year: '',
    image: '/image2.png',
    status: 'completed',
    statusText: 'Завершено',
    description: '',
    features: [
      {
        title: 'Январь',
        description: ['Начало работ по реструктуризации Единого личного кабинета']
      },
      {
        title: 'Май',
        description: ['Начало проекта «Табель»']
      },
      {
        title: 'Ноябрь',
        description: ['Разработка мессенджера КФУ']
      }
      
    ]
  },
  {
    id: 'project-1',
    title: '2025',
    date: '',
    year: '',
    image: '/image3.png',
    status: 'in-progress',
    statusText: 'В работе',
    description: '',
    features: [
      {
        title: 'Март - Май',
        description: ['Разработка модуля «Преподавателю» ','Разработка блока «Обо мне»','Тестовая эксплуатация ЕЛК ']
      },
      {
        title: 'Май - Сентябрь',
        description: ['Настройка и тестирование жизненного цикла учётной записи и корректной работы ролевой модели кабинета','Сбор обратной связи от студентов, подготовка кабинета к опытной эксплуатации ']
      },
      {
        title: 'Июль - Октябрь',
        description: ['Внедрение проекта «Табель»','Создание сервисов для аспирантов, интеграция с ролью «Студент»']
      }
      
    ]
  },
  {
    id: 'project-1',
    title: '2026',
    date: '',
    year: '',
    image: '/image4.png',
    status: 'upcoming',
    statusText: 'В плане',
    description: '',
    features: [
      {
        title: 'Январь',
        description: ['Создание сервисов для слушателей курсов, для сотрудников']
      },
     
      
    ]
  }
];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<CarouselRef>(null);

  const goToPrev = () => {
    carouselRef.current?.prev();
  };

  const goToNext = () => {
    carouselRef.current?.next();
  };

  const onSlideChange = (current: number) => {
    setCurrentIndex(current);
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-purple-100 text-purple-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container  sm:p-0"  id="roadmap" >
       <h2 className="font-h3 text-dark text-3xl md:text-[42px] font-bold text-center leading-[140%] mb-[53px]">
            
             <BlurFade delay={0.5} inView>
              Этапы развития проекта
              </BlurFade>
          </h2>
      {/* Timeline indicator */}
      <div className="w-full mb-8 ">
        <div className="relative">
          <div className="border-[1px] absolute top-[20%] left-0 right-0 h-0.5 !bg-[#65A1FA] -translate-y-1/2"></div>
          <div className="relative flex justify-between items-center ">
            {items.map((item, index) => (
              <div key={item.id} className="flex flex-col items-center">
                <div 
                  className={`w-6 h-6 rounded-full z-10 transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#65A1FA] scale-110' 
                      : index < currentIndex 
                        ? 'bg-[#D1E3FE]' 
                        : 'bg-[#c4dcff]'
                  }`}
                />
                <div className="mt-4 text-center">
                  <p   style={{ fontFamily: 'PT Sans' }}  className={` sm:w-auto font-medium transition-all duration-300 ${
                    index === currentIndex ? 'text-black ' : 'text-gray-500'
                  }`}>
                    {item.title}
                  </p>
                  <p className={`text-sm transition-all duration-300 ${
                    index === currentIndex ? 'text-gray-700' : 'text-gray-400'
                  }`}>
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative mt-12">
        {/* Navigation buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-[17%] md:top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md transition-all hover:bg-gray-100 hover:shadow-lg focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <Carousel
          ref={carouselRef}
          beforeChange={(_, next) => onSlideChange(next)}
          dots={false}
          effect="fade"
        >
          {items.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                <div className="rounded-xl overflow-hidden bg-black/5 flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full max-h-[530px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-start ">
                  <div className="flex flex-col space-y-6">
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full w-fit ${getStatusBadgeClass(item.status)}`}>
                      {item.statusText}
                    </span>

                    <div>
                      {/* <h2 className="text-base sm:text-xl font-bold ">{item.title}</h2> */}
                      <p className="text-gray-600">{item.year}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold ">{item.description}</h3>
                      <ul className="space-y-4">
                        {item.features.map((feature, index) => (
                          <li key={index} className="flex flex-col items-start">
                            <span className="text-lg font-semibold mb-1">{feature.title}</span>
                            {feature.description.map((desc, descIndex) => (
                              <div key={descIndex} className="flex items-start">
                               <div className='h-[22px] flex items-center'> <span className="inline-block w-1 h-1 m-1 bg-black rounded-full mr-2"></span></div>
                                <span  style={{ fontFamily: 'PT Sans' }} >{desc}</span>
                              </div>
                            ))}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* {item.additionalFeatures && (
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Возможные дополнительные возможности</h3>
                        <ul className="space-y-4">
                          {item.additionalFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-block w-2 h-2 mt-2 mr-2 bg-violet-500 rounded-full"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )} */}

                    {/* <div>
                      <button className="inline-flex items-center px-4 py-2 bg-violet-600 text-white rounded-lg transition-colors hover:bg-violet-700">
                        Узнать больше
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <button
          onClick={goToNext}
          className="absolute right-4  top-[17%] md:top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md transition-all hover:bg-gray-100 hover:shadow-lg focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default RoadmapSection;