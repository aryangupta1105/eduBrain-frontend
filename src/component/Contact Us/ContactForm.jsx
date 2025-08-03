
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section
      className="flex flex-col justify-center items-start gap-[29px] mx-auto w-[424px] h-[580px] p-0 flex-none order-1"
    >
      <header className="flex flex-col gap-2 items-start w-full">
        <h2 className="text-[40px] font-semibold leading-10 text-blue-600 max-md:text-3xl max-md:leading-8 max-sm:text-3xl max-sm:leading-7">
          Contact Us
        </h2>
        <p className="text-2xl text-neutral-400 max-md:text-lg max-sm:text-base">
          Feel free to drop us a message
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-start w-full">
        <div className="flex flex-col gap-1.5 items-start w-full">
          <label htmlFor="name" className="text-base leading-5 text-white max-sm:text-sm">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            className="box-border flex items-center px-4 pt-2.5 pb-2.5 w-full text-base leading-5 rounded-md border-2 border-[#1750BF] border-solid bg-transparent text-neutral-400 max-sm:p-3 max-sm:text-sm"
          />
        </div>

        <div className="flex flex-col gap-1.5 items-start w-full">
          <label htmlFor="email" className="text-base leading-5 text-white max-sm:text-sm">
            Your email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleInputChange}
            className="box-border flex items-center px-4 pt-2.5 pb-2.5 w-full text-base leading-5 rounded-md border-2 border-[#1750BF] border-solid bg-transparent text-neutral-400 max-sm:p-3 max-sm:text-sm"
          />
        </div>

        <div className="flex flex-col gap-1.5 items-start w-full">
          <label htmlFor="message" className="text-base leading-5 text-white max-sm:text-sm">
            Write your message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleInputChange}
            className="box-border flex items-start px-4 py-2.5 w-full text-base leading-5 rounded-md border-2 border-[#1750BF] border-solid resize-none bg-transparent h-[143px] text-neutral-400 max-sm:p-3 max-sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="flex flex-row justify-center items-center px-[44px] py-[12px] w-[135px] h-[48px] bg-gradient-to-r from-[#72A0FF] via-[#246CFF] to-[#0054FF] rounded-[37px] text-[16px]"
        >
          <span className="text-base leading-6 text-white tracking-[2px] max-sm:text-sm">
            SEND
          </span>
        </button>
      </form>

      <p className="w-full text-lg text-neutral-200  max-sm:text-base">
        We look forward to helping you grow and achieve your tech career
        goals!
      </p>
    </section>
  );
}
