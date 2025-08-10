import * as React from "react";

function CourseContent() {
  const contentItems = [
    "Understanding Power BI",
    "Power BI Services",
    "Power Bi Workflow",
    "Visualizing and Analyzing Data",
    "Visuals",
    "Advanced Topics",
    "Advanced Topic 2",
    "Advanced Topic 3",
    "Project 1",
    "Project : Netflix",
    "Project 2: Jobs & Salaries in Data Related Careers",
    "Project 3: Food & Beverages",
    "Interview Questions",
    "successful completion of course"
  ];

  return (
    <section className="p-8 mt-10 w-full rounded-lg border border-solid border-zinc-800 max-md:px-5 max-md:max-w-full">
      <header>
        <h2 className="text-3xl font-semibold leading-none text-blue-600">
          Course content
        </h2>
      </header>
      <div className="flex flex-col items-start mt-5 w-full text-xl leading-snug text-zinc-400 max-md:max-w-full">
        {contentItems.map((item, index) => (
          <div key={index} className="flex flex-wrap gap-2.5 items-center mt-1.5 first:mt-0 max-md:max-w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/d582b0953e4886ffba2ffd8bad3aa9a089950569?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              alt=""
            />
            <p className="self-stretch my-auto text-ellipsis text-zinc-400 w-[488px] max-md:max-w-full">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseContent;
