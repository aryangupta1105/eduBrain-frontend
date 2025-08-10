import * as React from "react";
import LearningObjectives from "./LearningObjective";

function CourseOverview() {
  return (
    <section className="p-8 w-full rounded-lg border border-solid border-zinc-800 max-md:px-5 max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <header>
          <h1 className="text-3xl font-semibold leading-none text-blue-600 max-md:max-w-full">
            Understanding Power BI
          </h1>
          <p className="mt-5 text-xl leading-7 text-zinc-400 max-md:max-w-full">
            Explore the comprehensive learning experience awaiting you on this
            course detail page. From fundamental concepts to advanced
            techniques, discover what you will learn and how it will propel
            your skills to new heights.
          </p>

          <LearningObjectives/>
        </header>
      </div>
    </section>
  );
}

export default CourseOverview;
