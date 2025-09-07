import React from 'react';
import BackgroundSVGs from './BackgroundSVGs';
import CourseHeader from './CourseHeader';
import VideoPlayer from './VideoPlayer';
import CourseResources from './CourseResources';

const CourseViewer = () => {
  return (
    <main className="overflow-hidden relative mx-auto flex items-center justify-center shadow-md bg-neutral-950 h-[803px] max-md:h-auto max-md:min-h-screen w-full" >
      <BackgroundSVGs />
      <div className="flex relative justify-center items-center px-2.5 py-2.5 size-full z-[2] max-md:flex-col max-md:gap-4 max-md:p-4">
        <div className="flex flex-col shrink-0 gap-2.5 items-center mx-auto   w-[900px]">
          <CourseHeader />
          <div className="flex flex-col gap-5 items-start w-full h-[679px]">
            <VideoPlayer />
          </div>
        </div>
        <CourseResources />
      </div>
    </main>
  );
};

export default CourseViewer;
