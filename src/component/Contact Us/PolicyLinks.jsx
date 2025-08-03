import React from 'react'

const PolicyLinks = () => {
 return (
    <footer className="flex justify-between items-start w-full max-w-[527px] max-md:flex-wrap max-md:gap-8 max-md:justify-center max-sm:flex-col max-sm:gap-4 max-sm:items-center">
      <a
        href="#"
        className="text-2xl text-neutral-500 max-sm:text-base hover:text-neutral-400 transition-colors"
      >
        Refund policy
      </a>
      <a
        href="#"
        className="text-2xl text-neutral-500 max-sm:text-base hover:text-neutral-400 transition-colors"
      >
        Privacy policy
      </a>
      <a
        href="#"
        className="text-2xl text-neutral-500 max-sm:text-base hover:text-neutral-400 transition-colors"
      >
        Terms of use
      </a>
    </footer>
  );
}

export default PolicyLinks