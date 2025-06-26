import React from "react";

export const FooterSection = (): JSX.Element => {
  const contactInfo = [
    { email: "dis@kpfu.ru", phone: "+7 (843) 206 50 84" },
    {
      address: "420008, г. Казань, ул. Нужина 1/37",
      hours: "пн — пт, с 8 до 17 часов (обед с 12 до 13)",
    },
  ];

  const legalLinks = [
    { text: "Политика конфиденциальности", width: "221px" },
   
  ];

  return (
    <footer id="contacts" className="w-full py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-8 md:gap-0 md:justify-between md:h-[266px]">
            {/* Logos */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-20">
              {/* First Logo */}
              <div className="relative w-[268px] h-[54px]">
                {/* <img
                  className="absolute w-[11px] h-[37px] top-4 left-[171px]"
                  alt="Vector"
                  src="/vector.svg"
                />
                <div className="absolute w-[41px] h-[54px] top-px left-[227px]">
                  <img
                    className="absolute w-8 h-[38px] top-1.5 left-0"
                    alt="Vector"
                    src="/vector-11.svg"
                  />
                  <img
                    className="absolute w-[21px] h-[54px] top-0 left-5"
                    alt="Vector"
                    src="/vector-13.svg"
                  />
                  <img
                    className="absolute w-[25px] h-[23px] top-[30px] left-[9px]"
                    alt="Vector"
                    src="/vector-7.svg"
                  />
                  <img
                    className="absolute w-[11px] h-[37px] top-4 left-0"
                    alt="Vector"
                    src="/vector-5.svg"
                  />
                  <img
                    className="absolute w-5 h-[7px] top-4 left-[21px]"
                    alt="Vector"
                    src="/vector-2.svg"
                  />
                  <img
                    className="absolute w-[11px] h-[11px] top-0 left-0"
                    alt="Vector"
                    src="/vector-4.svg"
                  />
                </div>
                <img
                  className="absolute w-[103px] h-[53px] top-0.5 left-0"
                  alt="Group"
                  src="/group.png"
                />
                <img
                  className="absolute w-7 h-[54px] top-px left-[107px]"
                  alt="Vector"
                  src="/vector-10.svg"
                />
                <img
                  className="absolute w-6 h-[37px] top-4 left-[141px]"
                  alt="Vector"
                  src="/vector-12.svg"
                />
                <img
                  className="absolute w-[31px] h-[38px] top-4 left-[190px]"
                  alt="Vector"
                  src="/vector-6.svg"
                />
                <img
                  className="absolute w-[11px] h-[11px] top-px left-[171px]"
                  alt="Vector"
                  src="/vector-4.svg"
                /> */}
                <img src='logoDistricked.svg' alt='flameSvg' />
              </div>

              {/* Second Logo */}
              <div className=" hidden md:flex relative w-[334.31px] h-[68px]">
                {/* <div className=" absolute w-[233px] h-[63px] top-0.5 left-[102px]">
                  <img
                    className=" absolute w-[152px] h-[49px] top-[7px] left-[81px]"
                    alt="Group"
                    src="/group-1.png"
                  />
                  <img
                    className="absolute w-[63px] h-[63px] top-0 left-0"
                    alt="Group"
                    src="/group-2.png"
                  />
                </div>
                <div className="absolute w-[57px] h-[68px] top-0 left-0 bg-[url(/vector-9.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-4 h-1 top-14 left-5"
                    alt="Group"
                    src="/group-3.png"
                  />
                  <img
                    className="absolute w-[49px] h-[47px] top-1.5 left-1"
                    alt="Group"
                    src="/group-4.png"
                  />
                </div>
                <img
                  className="absolute w-px h-[66px] top-px left-[79px]"
                  alt="Vector"
                  src="/vector-3.svg"
                /> */}
                <img src='logoDISKFU.svg' alt='flameSvg' />
              </div>
            </div>

            {/* Copyright */}
            <p className="font-t3 text-gray text-sm md:text-base">
              © 2025 Казанский федеральный университет, все права защищены
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 md:gap-0 md:justify-between md:h-[267px]">
            <div className="flex flex-col gap-6 md:gap-[52px]">
              <h4 style={{ fontFamily: 'PT Sans' }} className="font-h4 text-xl md:text-[32px] text-dark font-bold">
                Связаться с нами
              </h4>

              <div className="flex flex-col md:flex-row gap-6 md:gap-[133px]">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    {info.email && (
                      <p style={{ fontFamily: 'PT Sans' }} className="font-['PT Sans Caption Bold] font-normal text-[#56575c] text-base md:text-xl leading-[30px]">
                       {info.email && (
                      <a 
                        href={`mailto:${info.email}`}
                        style={{ fontFamily: 'PT Sans' }} 
                        className="font-['PT Sans Caption Bold] font-normal  text-base md:text-[18px] leading-[30px] hover:text-bluebright transition-colors"
                      >
                        {info.email}
                      </a>
                    )}
                      </p>
                    )}
                    {info.phone && (
                      <p style={{ fontFamily: 'PT Sans' }} className="font-['PT Sans Caption Bold] font-normal text-[#56575c] text-base md:text-base leading-[30px]">
                        {info.phone && (
                      <a 
                        href={`tel:${info.phone}`}
                        style={{ fontFamily: 'PT Sans' }} 
                        className="font-['PT Sans Caption Bold] font-normal text-[#56575c] text-base md:text-[18px] leading-[30px] hover:text-bluebright transition-colors"
                      >
                        {info.phone}
                      </a>
                    )}
                      </p>
                    )}
                    {info.address && (
                      <p style={{ fontFamily: 'PT Sans' }} className="font-['PT Sans Caption Bold] font-normal text-[#56575c] text-base md:text-[18px] leading-[30px]">
                        {info.address}
                      </p>
                    )}
                    {info.hours && (
                      <p style={{ fontFamily: 'PT Sans' }} className="font-['PT Sans Caption Bold] font-normal text-[#56575c] text-base md:text-[18px] leading-[30px]">
                        {info.hours}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-4 ">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href="https://kpfu.ru/portal/docs/F722252292/pd_policy.pdf"
                  className="font-t3 text-gray text-sm md:text-base hover:text-bluebright transition-colors"
                >
                  {link.text}
                </a>
              ))}
              {/* <div  className="ml-[2%] font-t3 text-gray text-sm md:text-base hover:text-bluebright transition-colors">Условия использования</div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};