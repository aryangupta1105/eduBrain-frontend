import * as React from "react";
import CourseCard from "./CourseCard";
import KeyFeatures from "./KeyFeatures";

function CourseSidebar() {
  return (
    <div className="min-w-60 w-[406px] flex flex-col gap-5">
      <CourseCard />
      <KeyFeatures />
    </div>
  );
}

export default CourseSidebar;
