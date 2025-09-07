import React, { useState } from 'react';
import ModuleItem from './ModuleItem';
import ActionButtons from './ActionButtons';

const modules = [
  { title: 'Module 1: Introduction', duration: '5m 36s | 1 lecture' },
  { title: 'Module 2: Basics', duration: '12m 10s | 3 lectures' },
  { title: 'Module 3: Advanced', duration: '20m 00s | 5 lectures' },
  { title: 'Module 4: Practice', duration: '15m 45s | 2 lectures' },
  { title: 'Module 5: Project', duration: '30m 00s | 4 lectures' },
  { title: 'Module 6: Wrap Up', duration: '8m 20s | 1 lecture' },
];

const CourseResources = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <aside className="flex flex-col justify-between items-start min-h-[762px] max-md:w-full mx-auto" style={{ width: 407, maxWidth: '100%' }}>
      <div className="flex flex-col gap-5 items-start p-5 bg-blue-800/10 rounded-xl border border-blue-600 border-solid  w-full max-md:w-full">
        <h2 className="overflow-hidden w-full text-2xl font-medium leading-10 text-white text-ellipsis max-sm:text-xl">
          Course Resources
        </h2>
        <div className="flex flex-col gap-2.5 items-start w-full">
          <nav className="flex gap-6 items-center">
            <a href="#" className="overflow-hidden text-xl leading-5 text-blue-600 text-ellipsis max-sm:text-base">
              Resources
            </a>
            <a href="#" className="overflow-hidden text-xl leading-5 text-ellipsis text-zinc-400 max-sm:text-base">
              Notes
            </a>
          </nav>
          <div className="flex justify-center items-center w-full">
            <div className="h-0.5 bg-blue-600 w-[91px]" />
            <div className="h-px bg-neutral-600 w-[276px]" />
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start w-full">
          {modules.map((mod, idx) => (
            <ModuleItem
              key={mod.title}
              title={mod.title}
              duration={mod.duration}
              open={openIndex === idx}
              onClick={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
      <ActionButtons />
    </aside>
  );
};

export default CourseResources;
