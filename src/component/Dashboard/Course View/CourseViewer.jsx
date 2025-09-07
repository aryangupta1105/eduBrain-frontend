import React from 'react';
import BackgroundSVGs from './BackgroundSVGs';
import CourseHeader from './CourseHeader';
import VideoPlayer from './VideoPlayer';
import CourseResources from './CourseResources';

const CourseViewer = () => {
  return (
    <div className="min-h-screen w-full bg-[#070E1B] flex flex-col" style={{ minWidth: 1254 }}>
      {/* Top nav bar placeholder (if needed) */}
      <div className="flex-1 flex flex-row justify-center items-start w-full" style={{ minHeight: 900 }}>
        <main
          className="flex flex-col items-start justify-start gap-4 pt-2 pr-4 pb-8 pl-8"
          style={{ width: 1000 }}
        >
          <CourseHeader />
          <VideoPlayer />
        </main>
        <aside className="pt-2 pr-8 pb-8" style={{ minWidth: 407 }}>
          <CourseResources />
        </aside>
      </div>
    </div>
  );
};

export default CourseViewer;
