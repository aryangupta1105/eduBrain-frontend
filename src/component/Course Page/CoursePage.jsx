import React from 'react';
import CourseDetailPage from './CourseDetails/CourseDetailPage';
import FAQSection from './Faq/FAQSection';
import CourseHero from './Course Hero/CourseHero';
import Footer from '../Footer';
import SuccessStories from './SuccessStories';
import RealProject from './RealProject';
import { ReferAndEarn } from './ReferAndEarn';
import { Certificate } from './Certificate';

const CoursePage = () => {
  return (
    <div className="flex = flex-col w-full min-h-screen bg-[#0C0C0D] gap-10">
      <CourseHero/>
      <CourseDetailPage />
      {/* course hero sub section */}
      <Certificate/>
      <SuccessStories/>
      <RealProject/>
      <ReferAndEarn/>
      <FAQSection />
       <section className="flex flex-col gap-9 items-center px-5 py-12">
        <h1 className="text-6xl text-center text-white leading-[80px] max-w-[824px] max-md:text-5xl max-md:leading-[55px] max-sm:text-3xl max-sm:leading-10">
          Are you Ready to become Master in Power BI?
        </h1>
        <div className="flex flex-col gap-3.5 items-center">
          <div className="flex gap-7 items-center max-sm:flex-col max-sm:gap-4">
            <button className="flex gap-3.5 justify-center items-center px-6 py-3 bg-white rounded-xl">
              <span className="text-base font-medium leading-6 text-black">Enrol Now</span>
            </button>
            <button className="flex gap-3.5 justify-center items-center px-5 py-3 rounded-xl border border-white border-solid">
              <span className="text-base font-medium leading-6 text-white">See the curriculum</span>
            </button>
          </div>
          <div className="flex gap-2 items-end">
            <span className="text-xl font-extrabold leading-7 text-white max-sm:text-base max-sm:leading-6">₹1299</span>
            <span className="text-sm leading-6 line-through text-zinc-400">₹2598 (50% Off)</span>
          </div>
        </div>
      </section>
      <Footer/>
    </div>

  );
};

export default CoursePage;
