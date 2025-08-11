 import React from 'react'
import BackgroundSVG from './Faq/BackgroundSVG'
      
      const FinalAreU = () => {
        return (
          <div className='flex relative flex-col items-center pb-0 w-full '>
            <BackgroundSVG position="left" />
            <BackgroundSVG position="right" />
            <section className="flex flex-col gap-9 items-center px-5 py-12">
            <h1 className="text-6xl text-center text-white leading-[80px] font-semibold max-w-[824px] max-md:text-5xl max-md:leading-[55px] max-sm:text-3xl max-sm:leading-10">
            Are you Ready to become Master in Power BI?
            </h1>
            <div className="flex flex-col gap-3.5 items-center">
            <div className="flex gap-7 items-center max-sm:flex-col max-sm:gap-4">
                <button className="flex gap-3.5 justify-center items-center px-6 py-3 bg-white rounded-xl">
                <span className="text-base font-medium leading-6 text-black">Enrol Now</span>
                </button>
                <button className="flex gap-3.5 justify-center items-center px-5 py-3 rounded-xl border border-white border-solid">
                <span className="text-base font-medium leading-6 text-white">See the curriculum</span>
                </button>
            </div>
            <div className="flex gap-2 items-end">
                <span className="text-xl font-extrabold leading-7 text-white max-sm:text-base max-sm:leading-6">₹1299</span>
                <span className="text-sm leading-6 line-through text-zinc-400">₹2598 (50% Off)</span>
            </div>
            </div>
        </section>
          </div>
        )
      }
      
      export default FinalAreU
      