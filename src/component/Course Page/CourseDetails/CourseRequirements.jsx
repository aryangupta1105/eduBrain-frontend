import * as React from "react";

function CourseRequirements() {
  return (
    <section className="p-8 mt-10 w-full rounded-lg border border-solid border-zinc-800 max-md:px-5 max-md:max-w-full">
      <header>
        <h2 className="text-3xl font-semibold leading-none text-blue-600">
          Course requirements
        </h2>
      </header>
      <div className="flex gap-2 items-center mt-5 w-full text-xl leading-8 text-zinc-400 max-md:max-w-full">
        <div className="flex-1 shrink self-stretch my-auto basis-0 text-zinc-400 max-md:max-w-full">
          No prior experience in data analysis or Power BI is needed
          <br />
          Basic computer skills and internet access
          <br />
          Willingness to learn and apply data-driven insights to real-world
          problems
          <br />
          Curiosity and consistency — that's all you really need!
          <br />
          Stable internet connection for accessing course materials and
          Power BI Service
          <br />
          Basic familiarity with Excel or spreadsheets (helpful but not
          required)
        </div>
      </div>
    </section>
  );
}

export default CourseRequirements;
