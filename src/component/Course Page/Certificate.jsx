import React from "react";
// import check312 from "./check-3-1-2.png";
// import check313 from "./check-3-1-3.png";
// import check31 from "./check-3-1.png";
// import frame238 from "./frame-238.svg";
// import image1 from "./image.png";
// import image from "./image.svg";
// import vector from "./vector.svg";

export const Certificate = () => {
  const features = [
    {
      icon: "/check.png",
      title: "Hands-On Project",
      description: "Build with real use-cases for a standout portfolio.",
    },
    {
      icon: "/check.png",
      title: "Mentor Guidance",
      description: "Personal feedback from tech leaders!",
    },
    {
      icon: "/check.png",
      title: "Verified Certificate",
      description: "Share on LinkedIn, resume, and with employers.",
    },
    {
      icon: "/check.png",
      title: "Internship Opportunities",
      description: "Exclusive access to hand-picked tech internships.",
    },
  ];

  return (
    <main className="relative w-[1424px] h-[922px] bg-[#0c0c0d]">
      <section className="relative h-[742px] top-[73px]">
        <div className="absolute w-[340px] h-[187px] top-0 left-0">
          
          <svg className="absolute w-[339px] h-[185px] top-px left-0"  width="339" height="186" viewBox="0 0 339 186" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 75.0836H56.1481L95.974 37.2153H193.907L231.121 1.30566H320.566M0 94.6707H63.9827L103.156 55.4965H211.535L236.997 30.0334H338.847M0 116.216H63.9827L99.8913 79.6539H236.997M320.566 135.151H143.635L118.825 160.614H285.311M223.939 116.216H126.007L79.6519 160.614H33.2971M33.2971 141.027H70.5115L113.602 94.6707H274.212M0 135.151H22.1981V174.325H249.402M0 149.514H10.4462V185.424H138.412" stroke="url(#paint0_linear_2039_199)" stroke-opacity="0.2"/>
            <defs>
            <linearGradient id="paint0_linear_2039_199" x1="242.672" y1="93.7776" x2="-2.03727" y2="106.449" gradientUnits="userSpaceOnUse">
            <stop stop-color="#04D5FF"/>
            <stop offset="1" stop-color="#246BFD"/>
            </linearGradient>
            </defs>
            </svg>

        </div>

        
        <svg className="absolute w-[339px] h-[72px] top-[91px] left-[1085px]" width="339" height="72" viewBox="0 0 339 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.2993 0.578125H208.572L239.781 13.3813H339.5M69.2702 13.3813H208.572L239.781 25.2699H339.5M0 29.3852H199.437L208.572 36.7013H339.5M339.5 48.1327H250.438L230.647 56.8205H83.7332M339.5 52.7052H270.991L250.438 60.9358M339.5 60.9358H290.021L264.14 71.4527H124.839" stroke="url(#paint0_linear_2039_200)" stroke-opacity="0.2"/>
        <defs>
        <linearGradient id="paint0_linear_2039_200" x1="96.3611" y1="36.1743" x2="337.813" y2="68.7159" gradientUnits="userSpaceOnUse">
        <stop stop-color="#04D5FF"/>
        <stop offset="1" stop-color="#246BFD"/>
        </linearGradient>
        </defs>
        </svg>


        <div className="inline-flex flex-col items-center gap-[81.85px] absolute top-[33px] left-[108px]">
          <header className="flex flex-col w-[822.57px] items-center gap-[8.18px] relative flex-[0_0_auto]">
            <h1 className="relative w-fit mt-[-0.82px] ml-[-77.72px] mr-[-77.72px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0356ff] text-5xl text-center tracking-[0] leading-[65.5px] whitespace-nowrap">
              Earn an Industry-Recognized Certification
            </h1>

            <p className="self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-[#A0AEC0] text-center leading-[24.6px] relative text-[24.6px] tracking-[0]">
              Validate your skills. Open doors to new opportunities.
            </p>
          </header>

          <div className="inline-flex items-start gap-[45px] relative flex-[0_0_auto]">
            <img
              className="relative w-[563.76px] h-[398.6px]"
              alt="Certificate of completion sample"
              src={"/certificate.png"}
            />

            <div className="inline-flex flex-col items-start gap-[22.03px] relative flex-[0_0_auto]">
              <p className="w-[600px] h-[63px] mt-[-1.60px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white leading-[31.1px] relative text-[24.6px] tracking-[0]">
                Validate your expertise with hands-on, real-world projects and
                unlock new job opportunities.
              </p>

              <ul className="inline-flex flex-col items-start gap-[12.28px] relative flex-[0_0_auto]">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="inline-flex flex-col items-start relative flex-[0_0_auto]"
                  >
                    <div className="inline-flex items-center justify-center gap-[8.02px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[30.49px] h-[30.49px] aspect-[1] object-cover"
                        alt=""
                        src={feature.icon}
                        role="presentation"
                      />

                      <h3 className="relative w-fit mt-[-1.60px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-white text-[20.5px] tracking-[0] leading-[43.3px] whitespace-nowrap">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-[#A0AEC0] text-[20.5px] tracking-[0] leading-[20.5px] whitespace-nowrap">
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="inline-flex items-center gap-[26px] relative flex-[0_0_auto]">
            <button className="inline-flex items-center justify-center gap-[13px] px-[25px] py-3 relative flex-[0_0_auto] bg-white rounded-[10px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0c0c0d] transition-colors">
              <span className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-[#000000] text-base tracking-[0] leading-6 whitespace-nowrap">
                Start Your Certification Journey
              </span>
            </button>

            <button className="inline-flex items-center justify-center gap-[13px] px-5 py-3 relative flex-[0_0_auto] rounded-[10px] border border-solid border-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0c0c0d] transition-colors">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                Preview Certificate Sample
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
