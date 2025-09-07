import React from 'react';

const ActionButtons = () => {
  return (
    <div className="flex justify-between items-start px-4 py-5 bg-gray-900 rounded-xl border border-blue-600 border-solid w-[407px] max-md:flex-col max-md:gap-4 max-md:w-full">
      <button className="flex gap-2 justify-center items-center px-5 py-1.5 bg-blue-600 rounded-md h-[45px] w-[180px] max-md:w-full">
        <div className="relative w-6 h-6">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=48"
            alt=""
            className="w-6 h-6"
          />
        </div>
        <span className="text-sm font-semibold leading-5 text-white max-sm:text-xs">
          Live 1:1 mentorship
        </span>
      </button>
      <button className="flex gap-2 justify-center items-center px-5 py-1.5 bg-blue-600 rounded-md h-[45px] w-[180px] max-md:w-full">
        <div className="relative w-6 h-6">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=48"
            alt=""
            className="w-6 h-6"
          />
        </div>
        <span className="text-sm font-semibold leading-5 text-white max-sm:text-xs">
          Chat with mentor
        </span>
      </button>
    </div>
  );
};

export default ActionButtons;
