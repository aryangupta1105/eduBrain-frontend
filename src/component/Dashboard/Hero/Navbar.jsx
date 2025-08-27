import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const navLinks = ["About Us", "Courses", "Process", "Certification", "FAQ"];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Transition from blue to dark as you scroll (0-200px)
  const background = scrollY < 200
    ? `rgba(36, 107, 253, ${0.11 * (1 - scrollY / 200)})`
    : `#0c0c0d`;

  return (
    <header className="flex top-0 right-0 z-0 flex-col shadow-sm bg-blend-normal w-full h-[89px] max-md:max-w-full fixed">
      <nav
        className="flex z-10 flex-col items-center justify-center px-24 py-2.5 w-full border border-blue-800 border-solid bg-blend-normal max-md:px-5 max-md:max-w-full"
        style={{ backgroundColor: background, transition: 'background-color 0.3s' }}
      >
        <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1453px] max-md:max-w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/553368b5f4c2cdeed08ef104347ef0eae9e681d4?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.45] w-[104px]"
            alt="Logo"
          />
          <ul className="flex gap-8 items-start self-stretch my-auto text-lg bg-blend-normal min-h-[27px] min-w-60 text-slate-50 max-md:max-w-full">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-400 transition-colors text-xl">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2.5 items-center self-stretch my-auto">
            <div className="flex overflow-hidden gap-3.5 justify-center items-center self-stretch px-2 my-auto w-12 h-12 bg-[#246bfd]/21 bg-opacity-20 min-h-12 rounded-[30px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/5b4b42d7d1ca285f45eb1ea05cbf129da772d265?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto w-7 aspect-square"
                alt="User avatar"
              />
            </div>
            <span className="self-stretch my-auto text-2xl leading-none text-white">
              Aman Singh
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
