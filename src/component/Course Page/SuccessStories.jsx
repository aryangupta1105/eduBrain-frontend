import React, { useState } from 'react';
import PaginationDots from './PaginationDots';

function TestimonialCard({ testimonial }) {
  return (
    <div
      className="flex flex-col justify-between items-center box-border p-[15.2007px_16.2865px] gap-[9.77px] min-w-[343.1px] min-h-[456.02px] bg-[rgba(21,69,194,0.05)] rounded-[17.3722px] border border-[#1545C2]"
      style={{ mixBlendMode: 'normal', flex: 'none', order: 0, flexGrow: 0 }}
    >
      {/* Image Container */}
      <div
        className="rounded-xl overflow-hidden mb-4 lg:mb-6 bg-gray-200 flex items-center justify-center min-w-[307.95px] min-h-[256.46px]"
      >
        <img
          src={testimonial.image}
          alt={testimonial.title}
          className="min-w-[307.95px] min-h-[256.46px] object-cover"
        />
      </div>

      {/* Content */}
      <div
        className="flex flex-col items-center gap-3 lg:gap-4 text-center flex-1 w-[308.36px] h-[145.07px] overflow-hidden break-words"
      >
        <div className="flex flex-col items-center gap-1">
          <h3
            className="font-montserrat text-md font-bold leading-tight text-[#A0AEC0]"
          >
            {testimonial.title}
          </h3>
          <p
            className="font-montserrat text-md font-bold leading-5 text-[#0356FF]"
          >
            {testimonial.role}
          </p>
        </div>

        <p
          className="font-montserrat text-md font-normal leading-relaxed text-justify text-[#A0AEC0]"
        >
          "{testimonial.quote}"
        </p>

        {/* Blue line accent */}
        <div
          className="mt-2 self-start bg-[#1545C2] rounded-[6158.31px] w-[61.59px] h-[2.46px]"
          style={{ mixBlendMode: 'normal' }}
        ></div>
      </div>
    </div>
  );
}

export default function SuccessStories() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d76230b4ed4255429e43baf2dc870e7118b4aa0b?width=622",
      title: "Unlocking the Power of Data",
      role: "Power BI & Data Analytics Learner",
      quote: "The Power BI and Data Analytics courses at Edubraining made business intelligence clear and actionable. Interactive lessons and real-world dashboards prepped me to confidently analyze any dataset."
    },
    {
      id: 2,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/aea0fe273ff19233404b78194656e9a52ed9443a?width=622",
      title: "Real-World Tech Skills that Matter",
      role: "Full Stack Development Student",
      quote: "Edubraining's Machine Learning and Full Stack courses gave me practical projects and up-to-date tech knowledge. The focused mentorship helped me build complete apps from scratch."
    },
    {
      id: 3,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2227ffb02f9aff636f9fbd00506cd090041e1138?width=622",
      title: "Transformative Design Thinking",
      role: "UI/UX & Angular Enthusiast",
      quote: "Their UI/UX and Angular programs taught me to combine creativity with coding skills. The hands-on assignments transformed how I approach building user-centered digital products."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen relative bg-edubraining-dark overflow-hidden" style={{ backgroundColor: '#0c0c0d' }}>
      <div className="max-w-7xl mx-auto px-4  py-12 lg:py-16">
        {/* Main Content Container */}
        <div className="flex flex-col items-center gap-16 lg:gap-24 ">

          {/* Header Section */}
          <div className="flex flex-col items-center gap-12 lg:gap-24 text-center">
            <div className="flex flex-col items-center gap-6">
              {/* Subtitle */}
              <div
                className="font-roboto text-xl lg:text-2xl font-normal leading-8"
                style={{ color: '#91B5FE' }}
              >
                Real Success Stories
              </div>

              {/* Main Title */}
              <h1
                className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lg:leading-snug"
                style={{ color: '#0356FF' }}
              >
                Learners Growing with Edubraining
              </h1>

              {/* Description */}
              <p
                className="max-w-4xl font-roboto text-base lg:text-lg font-normal leading-6 lg:leading-7 text-center"
                style={{ color: '#A0AEC0' }}
              >
                Edubraining internships and courses provide real skills and industry exposure that pave the way for your professional success. Experience learning that drives your career forward.
              </p>
            </div>

            {/* Testimonials Grid - Desktop */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>

            {/* Testimonials Carousel - Mobile/Tablet */}
            <div className="lg:hidden w-full max-w-sm">
              <TestimonialCard testimonial={testimonials[currentSlide]} />
            </div>
          </div>

          {/* Pagination Dots */}
          <PaginationDots
            totalPages={testimonials.length}
            currentPage={currentSlide}
            onPageChange={setCurrentSlide}
          />
        </div>

        {/* Navigation Arrows */}
        

        <button
          onClick={nextSlide}
          className="absolute z-10 flex items-center justify-center text-white border-2 border-white rounded-full shadow-md left-[31px] top-[585px] w-[74px] h-[74px]"
          aria-label="Next testimonial"
        >
          <span className="font-montserrat flex items-center justify-center pb-3 text-4xl font-normal ">‹</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-10 flex items-center justify-center text-white border-2 border-white rounded-full shadow-md right-[31px] top-[585px] w-[74px] h-[74px]"
          aria-label="Next testimonial"
        >
          <span className="font-montserrat flex items-center justify-center pb-3 text-4xl font-normal ">›</span>
        </button>
      </div>
    </div>
  );
}