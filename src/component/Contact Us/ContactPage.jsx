import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import PolicyLinks from './PolicyLinks';
import BackgroundSvg from './BackgroundSvg';



const ContactPage = () =>  {
  return (
    <div className="overflow-hidden relative w-full bg-neutral-950 min-h-[880px] py-5">
      <BackgroundSvg />

      <div className="flex relative flex-col gap-24 justify-center items-center px-11 py-4 mx-auto my-0 w-full max-w-9/12 min-h-[739px] z-[2] max-md:gap-16 max-md:p-5  max-sm:gap-10 max-sm:p-4">
        <div className="flex gap-10 justify-between items-start w-full max-w-[937px] max-md:flex-col max-md:gap-10 max-md:items-center py-10">
          <ContactInfo />
          <ContactForm />
        </div>

        <PolicyLinks />
      </div>
    </div>
  );
}

export default ContactPage;
