import React from 'react';
import { Link } from 'react-router-dom';

function SidebarMenuItem({ icon, label, isActive = false }) {
  const baseClasses = "flex gap-2.5 items-center py-2.5 w-full px-5 ";
  const activeClasses = "rounded-md w-full bg-[#246bfd]/31 bg-opacity-40";
  const textClasses = isActive ? "text-white" : "text-blue-600";

  // Map label to route path
  const routeMap = {
    "Dashboard": "",
    "My courses": "mycourses",
    "Assignments": "assignments",
    "Certificates": "certificate",
    "Resume Builder": "resume-builder",
    "Refer & Earn": "referearn",
    "Mentor Support": "mentor"
  };
  const to = `/profile-dashboard/${routeMap[label]}`;
  return (
    <Link to={to} className={`${baseClasses} ${isActive ? activeClasses  : ''}`}>
      <div className="flex gap-3.5 justify-center items-center self-stretch px-1.5 my-auto  bg-[#246bfd]/21 bg-opacity-20 h-[34px] min-h-[34px] rounded-[30px] w-[34px]">
        <img
          src={icon}
          className="object-contain self-stretch my-auto w-6 aspect-square"
          alt=""
        />
      </div>
      <span className={`self-stretch my-auto text-xl font-medium leading-none ${textClasses}`}>
        {label}
      </span>
    </Link>
  );
}

export default SidebarMenuItem;
