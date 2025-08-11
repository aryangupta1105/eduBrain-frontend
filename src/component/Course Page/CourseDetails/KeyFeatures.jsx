import * as React from "react";

function KeyFeatures() {
  const features = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/1f7ed735355f21ed48e47f5ea6bf82fe8e0e6698?placeholderIfAbsent=true",
      value: "75+",
      label: "Lectures"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/abdf391dd83b5443a37269c49d5b90d86b639c89?placeholderIfAbsent=true",
      value: "30h+",
      label: "Duration"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/4b36f8cb5680a83de31c52ea8f90e75afcf71d9b?placeholderIfAbsent=true",
      value: "20+",
      label: "Projects"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/d2e7c80f8a749ac63eb5c15ad0a9c5f7e2456041?placeholderIfAbsent=true",
      value: "Lifetime",
      label: "access"
    }
  ];

  return (
    <section className="mt-32 w-full max-md:mt-10">
      <header>
        <h2 className="text-3xl text-blue-600 font-semibold leading-none ">
          Key features
        </h2>
      </header>
      <div className="flex flex-col justify-center items-center py-16 pr-20 pl-20 mt-9 w-full whitespace-nowrap rounded-lg border border-solid shadow-sm bg-blend-normal bg-[#0C0C0D] border-zinc-800 max-md:px-5">
        <div className="flex flex-wrap gap-9 items-center w-full max-w-[247px]">
          {features.map((feature, index) => (
            <div key={index} className="flex grow shrink gap-4 items-center self-stretch px-8 py-10 my-auto rounded-3xl border border-solid bg-blend-normal  bg-opacity-0 border-zinc-800 min-h-[141px] min-w-60 w-[200px] max-md:px-5">
              <img
                src={feature.icon}
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
                alt=""
              />
              <div className="self-stretch my-auto w-[114px]">
                <div className={`${feature.value === "Lifetime" ? "text-3xl" : "text-4xl"} font-semibold leading-none text-white`}>
                  {feature.value}
                </div>
                <div className="mt-4 text-2xl leading-none text-zinc-400">
                  {feature.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
