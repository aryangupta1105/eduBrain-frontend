import React from 'react';

const EduBrainingWebsite = () => {
  return (
    <div className="min-h-screen relative bg-[#0C0C0D] text-[#F5F8FF]">
      {/* Glow effect  */}
      
      <svg width="495" height="675" viewBox="0 0 495 675" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute -top-64 -left-5'>
        <g filter="url(#filter0_f_396_1025)">
        <rect width="433" height="275" transform="matrix(1 0 0 -1 -138 475)" fill="url(#paint0_linear_396_1025)" fill-opacity="0.3"/>
        </g>
        <defs>
        <filter id="filter0_f_396_1025" x="-338" y="0" width="833" height="675" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_396_1025"/>
        </filter>
        <linearGradient id="paint0_linear_396_1025" x1="433" y1="-21.0191" x2="125.676" y2="469.701" gradientUnits="userSpaceOnUse">
        <stop stop-color="#9AC4FE"/>
        <stop offset="1" stop-color="#1545C2"/>
        </linearGradient>
        </defs>
        </svg>


      {/* Header Section */}
      <header className="text-center py-8 px-6">
        <h1 className="text-6xl font-bold md:text-5xl  mb-4 font-montserrat ">
          Welcome to Edubraining
        </h1>
        <p className="text-[#B1B2B6] font-roboto text-2xl text-nowrap mb-10 max-w-3xl mx-auto">
          Empowering the tech leaders of tomorrow through accessible, AI-powered learning
        </p>
      </header>

      {/* Women Entrepreneurs Section */}
      <div className="text-left px-50">
        <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
          Proudly Powered by Women Entrepreneurs
        </h3>

        <div className="max-w-[90%]  mb-8">
          <div
            className="border-l-4  pl-6 py-4 text-left"
            style={{
              lineHeight: '5px',
              borderColor: '#1545C2',
            }}
          >
            <p className="text-base lg:text-2xl leading-relaxed" style={{ color: '#d1d5db' }}>
              <span className="font-semibold text-white">EduBraining</span> is led and inspired by{' '}
              <span style={{ color: '#3564FF' }} className="font-medium">
                women entrepreneurs
              </span>, creating more opportunities for women in tech and business leadership. Our platform isn't just about learning—it's about pioneering change together.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto px-6 py-5 ml-28 mr-10">
        <div className="flex max-h-[600px]  gap-12 items-center">
          {/* Left Side - Image */}
          <div className="w-1/2 h-1/2 ">
            <img
              src="group.png"
              alt="Learning Community"
              className=" object-cover w-[540px] h-[540px] "
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-1/2 space-y-8">
            {/* About Us Section */}
            <div className="space-y-0">
              <h2 className="text-5xl font-bold font-roboto text-[#FFFFFF]">About Us</h2>
              <h3 className="text-2xl text-[#4879FF] font-medium">
                Empowering tomorrow's tech leaders
              </h3>

              <div className="text-white font-size-24px font-roboto leading-relaxed space-y-8 mt-4 text-2xl">
                <p>
                  At <span className="text-white font-roboto font-semibold ">EduBraining</span>, we believe that world-class technical 
                  education should be accessible, affordable, and transformative. Founded by Vidhi Aggarwal and 
                  Lakhan Chahar, our mission is to shape the tech pioneers of tomorrow through innovative, industry-aligned learning powered by the latest advancements 
                  in artificial intelligence.
                </p>
              </div>

              <button className="bg-white cursor-pointer text-[#000000] px-6 py-2 rounded-full font-medium transition-colors duration-300 text-center mt-4">
                Explore Courses
              </button>
            </div>

            {/* Our Vision Section */}
            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-[#0356FF]">Our Vision</h2>

              <blockquote className="space-y-4 mt-1">
                <p className="text-[#FFFFFF] font-roboto italic text-lg leading-relaxed">
                  "Education is not just about skills, but about building possibilities - one learner at a time."
                </p>
                <cite className="text-[#6C94FF] font-medium mt-0">
                  — Vidhi Aggarwal, Co-Founder
                </cite>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Vision Statement Box */}
        <div className="mt-16  text-center w-10/12 mx-auto">
          <p className="text-white text-2xl leading-relaxed">
            We envision a future where every aspiring technologist can unlock their greatest 
            potential, regardless of their background or geography. <span className="font-semibold">EduBraining</span> is committed 
            to breaking barriers and <span className="text-[#246BFD] ">democratizing excellence in tech</span>.
          </p>
        </div>

        {/* Join Our Learning Community Section */}
        <div className="mt-40 text-left px-6 space-y-6 w-full">
          <h2 className="text-5xl font-semibold text-white">
            Join Our Learning Community.
          </h2>

          <p className="text-white text-xl">
            We are here to guide, mentor, and empower you at every step. Explore our courses, connect with our learning community, and 
            take the next step toward an exceptional tech career with EduBraining.
          </p>
        </div>
      </main>
    </div>
  );
};

export default EduBrainingWebsite;
