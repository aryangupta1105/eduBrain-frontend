import React from 'react';
import BackgroundSVG from './BackgroundSVG';
import FAQItem from './FAQItem';

const faqQuestions = [
  "What is Edubraining?",
  "What types of courses do you offer?",
  "How are the courses structured?",
  "What is included in the live mentorship sessions?",
  "Do I receive a certificate after completing a course?",
  "How long do I have access to the course materials?",
  "Do you offer internships?",
  "What kind of placement assistance do you provide?",
  "How do I contact Edubraining?",
  "Refund Policy.",
  "Exchange Policy.",
  "Point to be noted while Refunding."
];

const FAQSection = () => {
  return (
    <section className="flex relative flex-col items-center px-5 pt-24 pb-0 w-full  min-h-[1370px] max-md:px-5 max-md:py-16 max-md:min-h-[auto] max-sm:px-4 max-sm:py-10">
      <BackgroundSVG position="left" />
      <BackgroundSVG position="right" />

      <header className="flex relative flex-col gap-6 items-center mb-24 w-full max-w-[745px] z-[2] max-sm:gap-5 max-sm:mb-10">
        <p className="text-2xl leading-8 text-blue-300 max-sm:text-xl max-sm:leading-7">
          FAQ
        </p>
        <h1 className="text-5xl font-bold text-center leading-[57.6px] text-slate-50 max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9">
          Frequently Asked Questions
        </h1>
        <p className="text-base leading-6 text-center text-zinc-500 max-sm:text-sm max-sm:leading-5">
          Uncover quick insights about Edubraining. Get ready for your tech
          journey by exploring our FAQs. Dive in now!
        </p>
      </header>

      <div className="flex relative flex-col gap-3 items-start w-full max-w-screen-md z-[2] max-md:max-w-full">
        {faqQuestions.map((question, index) => (
          <FAQItem key={index} question={question} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

