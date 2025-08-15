import React from "react";
import { PurchaseSummarySection } from "./PurchaseSummary";
import { CourseDetailsSection } from "./CourseDetailsSecion";
// If the correct file is CourseDetailsSecion.jsx, this is fine. If not, rename the file and update import.
import BackgroundSVG from "../Course Page/Faq/BackgroundSVG";
import BackgroundSvg from "../Contact Us/BackgroundSvg";



export const BillingPage = () => {
  return (
    <main className="bg-[#0c0c0d] grid justify-items-center [align-items:start] w-full mx-auto -mt-10">
        
        <BackgroundSVG position={"left"}/>
        
        <BackgroundSVG position={"right"}/>
      <div className="bg-[#0c0c0d] w-[1424px] h-[944px] relative">
        
          
          <div className="flex flex-col w-[1085px] items-end gap-[50px] absolute top-[104px] left-[169px]">
            <div className="flex items-start justify-center gap-[185px] relative self-stretch w-full flex-[0_0_auto]">
              <CourseDetailsSection />
              <PurchaseSummarySection />
            </div>
          </div>

          
        </div>

        
      
    </main>
  );
};
