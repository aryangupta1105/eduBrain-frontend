"use client";
import * as React from "react";
// import CourseOverview from "./CourseOverview";
import CourseOverview from "./CourseOverview";

// import LearningObjectives from "./LearningObjectives";
import LearningObjectives from "./LearningObjective";

import CourseContent from "./CourseContent";
import CourseRequirements from "./CourseRequirements";
import CourseDescription from "./CourseDescription";
import CourseSidebar from "./CourseSidebar";

function CourseDetailPage() {
  return (
    <div className="min-h-screen bg-transparent  text-white relative overflow-hidden mx-auto py-20">
        <div  className="flex flex-wrap gap-10 items-start">
      <main className="min-w-60 w-[797px] max-md:max-w-full">
        <CourseOverview />
        <CourseContent />
        <CourseRequirements />
        <CourseDescription />
      </main>
      <aside className="min-w-60 w-[406px] ">
        <CourseSidebar />
      </aside>
    </div>
    </div>
    
  );
}

export default CourseDetailPage;
