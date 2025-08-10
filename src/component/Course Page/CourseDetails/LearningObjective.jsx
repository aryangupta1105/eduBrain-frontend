import * as React from "react";

function LearningObjectives() {
  const objectives = [
    "Master Power BI for data-driven decision making and business intelligence",
    "Create stunning interactive dashboards and reports with Power BI visuals",
    "Clean, transform, and model real-world data using Power Query and DAX",
    "Perform insightful data analysis using DAX measures and calculated columns",
    "Understand and apply key data visualization and storytelling techniques",
    "Use Power BI Service for publishing, sharing, and collaboration",
    "Use Power BI Service for publishing, sharing, and collaboration"
  ];

  return (
    <section className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <header>
        <h2 className="text-3xl font-semibold leading-none text-blue-600">
          What you will learn
        </h2>
      </header>
      <div className="flex flex-col items-start mt-5 w-full text-xl leading-7 text-zinc-400 max-md:max-w-full">
        {objectives.map((objective, index) => (
          <div key={index} className="flex flex-wrap gap-2 items-center mt-1.5 first:mt-0 max-md:max-w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/e1c486b77f34eea6b065026811cb65934643176e?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.04] w-[25px]"
              alt=""
            />
            <p className="self-stretch my-auto text-ellipsis text-zinc-400 w-[488px] max-md:max-w-full">
              {objective}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LearningObjectives;
