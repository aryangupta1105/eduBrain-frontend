import React from 'react';

const CourseHeader = () => {
  return (
    <header className="flex justify-between items-center px-5 py-0 w-full rounded-2xl border border-blue-800 border-solid bg-blue-800/10 bg-opacity-10 h-[73px] max-md:flex-col max-md:gap-4 max-md:p-4 max-md:h-auto max-sm:p-2.5">
      <h1 className="text-3xl font-medium leading-7 text-slate-50 max-sm:text-xl">
        ← Data Analytics
      </h1>
      <div className="flex gap-5 items-center max-md:justify-between max-md:w-full">
        <span className="text-lg leading-7 text-slate-50 max-sm:text-sm">
          Course progress
        </span>
        <div className="flex gap-1.5 items-center h-2.5 w-[89px]">
          <div className="flex relative items-center pr-6 h-1.5 bg-gray-100 rounded-md flex-[1_0_0]">
            <div className="absolute top-0 left-0 w-16 bg-emerald-500 rounded-md h-[7px]" />
          </div>
        </div>
        <span className="text-lg leading-7 text-slate-50 max-sm:text-sm">
          75%
        </span>
      </div>
    </header>
  );
};

export default CourseHeader;
