import React from 'react';

const ModuleItem = ({ title = "Module 1: Introduction", duration = "5m 36s | 1 lecture", open = false, onClick }) => {
  return (
    <div className="w-full">
      <button
        className="flex gap-2 items-center px-3.5 py-2.5 w-full rounded-xl border-blue-800 border-solid backdrop-blur-[22.8px] bg-blue-800/10  bg-opacity-10 border-[0.83px] focus:outline-none"
        onClick={onClick}
        type="button"
      >
        <div className="flex flex-col gap-2 items-start flex-[1_0_0] text-left">
          <h4 className="text-lg font-medium leading-6 text-slate-50 max-sm:text-base">
            {title}
          </h4>
          <p className="text-sm leading-6 text-zinc-400 max-sm:text-xs">
            {duration}
          </p>
        </div>
        <span className={`transition-transform duration-200 ${open ? 'rotate-90' : ''}`}>
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 8l3 3 3-3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </button>
      {open && (
        <div className="bg-blue-950 bg-opacity-80 rounded-b-xl px-4 py-3 mt-1 text-white text-sm">
          <div>Dropdown content for <b>{title}</b> (add resources/lectures here)</div>
        </div>
      )}
    </div>
  );
};

export default ModuleItem;
