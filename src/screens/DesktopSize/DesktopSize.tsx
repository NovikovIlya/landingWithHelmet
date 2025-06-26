
import React from "react";
import { Button } from "../../components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../../components/ui/navigation-menu";
import { AboutSection } from "./sections/AboutSection";
import { CareerSection } from "./sections/CareerSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { GoalsSection } from "./sections/GoalsSection";
import { HeroSection } from "./sections/HeroSection";
import { MissionSection } from "./sections/MissionSection/MissionSection";
import { RoadmapSection } from "./sections/RoadmapSection/RoadmapSection";
import { RolesSection } from "./sections/RolesSection";
import { StatisticsSection } from "./sections/StatisticsSection/StatisticsSection";
import { X } from "lucide-react";
import { Link } from "react-scroll";
import { BlurFade } from "../../components/magicui/blur-fade";
import { Helmet, HelmetProvider } from "react-helmet-async";




export const DesktopSize = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Navigation menu items
  const navItems = [
    { label: "О нас", href: "about" },
    { label: "Роудмап", href: "roadmap" },
    { label: "Роли", href: "roles" },
    { label: "Фичи", href: "features" },
    { label: "Стажировка", href: "career" },
    { label: "Контакты", href: "contacts" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
  <>
    <HelmetProvider>
      <Helmet>
        <title>Электронный университет</title>
        <meta name="description" content="KFU-STUDY" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Ziz0ZBJCNPY_FEcLktITkfShgwPGXCCWJg&s" />

      </Helmet>
    <div className=" flex flex-col items-center w-full">
      <header className={`backdrop-blur-md w-full fixed pt-[3px] pb-[2px] top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-black/70 md:backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className=" container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center ">
          <div className="flex items-center h-10">
            <img className="h-full w-auto" alt="Vector" src='/VectorFNNN.svg' />
            {/* <div className="ml-3 h-[35px] w-[132px] bg-[url(/group-8.png)] bg-contain bg-no-repeat bg-center" /> */}
             <img className="h-full ml-[10px] w-auto" alt="123" src='/nadp.svg' />
            
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>

          <div className="hidden lg:flex items-center gap-8 ">
            <NavigationMenu className="mr-[60px]">
              <NavigationMenuList className="flex gap-[52px]">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link
                      style={{ fontFamily: 'PT Sans' }}
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className=" text-white text-[18px] leading-5 cursor-pointer ">
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <a href="https://newlk.kpfu.ru/user">
               <Button className="hover:bg-white hover:text-black  px-[38px] py-[15px]  bg-bluebright rounded-[30px] font-t3-bold text-white h-[42px]">Протестировать</Button>
             </a>
          </div>

         
        </div>
      </header>
       <div
            className={`z-[100000] fixed inset-0 bg-black/70 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden`}
            style={{ top: "72px" }}>
            <div className="flex flex-col h-full px-6 py-8">
              <nav className="flex-1">
                <ul className="space-y-6">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="text-white text-[26px] sm:text-3xl font-t2 block py-2 cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <Button
                className="w-full px-[38px] py-[15px] h-[50px] bg-bluebright rounded-[30px] font-t3-bold text-white mt-8"
                onClick={() => setIsMenuOpen(false)}>
                Протестировать
              </Button>
            </div>
          </div>

      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <BlurFade delay={0.5} inView>
          <StatisticsSection />
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <RoadmapSection />
        </BlurFade>

        <BlurFade delay={0.5} inView>
          {" "}
          <MissionSection />
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <GoalsSection />
        </BlurFade>

        <BlurFade delay={0.5} inView>
          {" "}
          <RolesSection />
        </BlurFade>

        <BlurFade delay={0.5} inView>
          {" "}
          <FeaturesSection />
        </BlurFade>

        <BlurFade delay={0.5} inView>
          {" "}
          <CareerSection />
        </BlurFade>

        <BlurFade delay={0.5} inView>
          {" "}
          <FooterSection />
        </BlurFade>
      </main>
    </div>
    </HelmetProvider>
</>
  );
};
