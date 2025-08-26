"use client";
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import BackgroundSvg from '../../Contact Us/BackgroundSvg';


function Dashboard() {
  return (
    <div className="overflow-hidden relative bg-[#0c0c0d]">
      <div className="flex z-0 w-full min-h-[89px] max-md:max-w-full" />
      <div className="z-0 w-full shadow-sm bg-blend-normal bg-[#0c0c0d] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:">
          <Sidebar />
          <BackgroundSvg/>

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Dashboard;
