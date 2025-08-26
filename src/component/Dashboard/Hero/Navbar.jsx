import React from 'react';

function Navbar() {
  const navLinks = ["About Us", "Courses", "Process", "Certification", "FAQ"];

  return (
    <header className="flex absolute top-0 right-0 z-0 flex-col shadow-sm bg-blend-normal w-full h-[89px]  max-md:max-w-full">
      <nav className="flex z-10 flex-col justify-center px-16 py-2.5 w-full border border-blue-800 border-solid bg-blend-normal  bg-[#246bfd]/11 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1253px] max-md:max-w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/553368b5f4c2cdeed08ef104347ef0eae9e681d4?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.45] w-[104px]"
            alt="Logo"
          />
          <ul className="flex gap-8 items-start self-stretch my-auto text-lg bg-blend-normal min-h-[27px] min-w-60 text-slate-50 max-md:max-w-full">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-400 transition-colors">
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
}

export default Navbar;
