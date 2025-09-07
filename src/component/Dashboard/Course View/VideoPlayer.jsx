import React from 'react';

const VideoPlayer = () => {
  return (
    <section className="relative w-full flex flex-col justify-center items-center bg-blue-800/10 rounded-2xl border border-blue-600 border-solid min-h-[679px] h-auto py-12 -mt-2">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-6xl font-medium leading-10 text-sky-700 text-center w-full max-md:text-4xl max-sm:text-2xl">
          Video Content Placeholder
        </h2>
      </div>
      <div className=" gap-2.5 justify-center items-center absolute bottom-5 left-10 text-nowrap px-5 py-2.5 rounded-3xl bg-slate-800 mt-12 h-[47px] w-[324px] max-md:w-[calc(100%_-_40px)]">
        <p className="text-2xl font-medium leading-7 text-slate-50 max-sm:text-lg">
          Topic: Name of the lecture
        </p>
      </div>
    </section>
  );
};

export default VideoPlayer;
