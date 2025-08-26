import React from 'react';

function StatsCard({ icon, title, value }) {
  return (
    <div className="flex gap-2 justify-center items-center px-5 py-6 rounded border border-blue-600 border-solid bg-[#246bfd]/21 bg-opacity-10 min-w-60 w-[250px]">
      <div className="flex gap-5 justify-center items-center self-stretch px-2 my-auto bg-[rgba(36 ,107, 253 , 0.7)] bg-opacity-20 h-[50px] min-h-[50px] rounded-[43px] w-[50px]">
        <img
          src={icon}
          className="object-contain self-stretch my-auto aspect-square w-[34px]"
          alt=""
        />
      </div>
      <div className="self-stretch my-auto font-medium">
        <p className="text-lg leading-none text-zinc-400">
          {title}
        </p>
        <p className="mt-2 text-2xl leading-none text-blue-600">
          {value}
        </p>
      </div>
    </div>
  );
}

export default StatsCard;
