import React from 'react';

const VideoPlayer = () => {
  return (
    <section className="relative w-full bg-gray-900 rounded-2xl border border-blue-600 border-solid h-[679px]">
      <h2 className="overflow-hidden absolute top-80 h-10 text-6xl font-medium leading-10 text-sky-700 left-[138px] text-ellipsis w-[716px] max-md:left-5 max-md:text-4xl max-md:top-[200px] max-md:w-[calc(100%_-_40px)] max-sm:text-2xl max-sm:top-[150px]">
        Video Content Placeholder
      </h2>
      <div className="inline-flex absolute gap-2.5 justify-center items-center px-5 py-2.5 rounded-3xl bg-slate-800 bottom-[58px] h-[47px] left-[15px] w-[324px] max-md:bottom-5 max-md:left-5 max-md:w-[calc(100%_-_40px)]">
        <p className="text-2xl font-medium leading-7 text-slate-50 max-sm:text-lg">
          Topic: Name of the lecture
        </p>
      </div>
    </section>
  );
};

export default VideoPlayer;
