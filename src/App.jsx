import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

import Navbar from "./component/Navbar";

import Login from "./component/Login";
import Signup from "./component/Signup";
import Password from "./component/Password";
import OTP from "./component/Otp";
import Forget from "./component/Forget";
import CoursesSection from "./component/Courses/CoursesSection";
import CoursePage from "./component/Course Page/CoursePage";
import ForgetOTP from "./component/Forgetotp";
import Reset from "./component/Resetpass";

import ContactPage from "./component/Contact Us/ContactPage";
import { BillingPage } from "./component/Billing Page/BillingPage";
import Home from "./component/Home/Home";
import Dashboard from "./component/Dashboard/Hero/Dashboard";
import Profile from "./component/Dashboard/DashboardMain";
import MainContent from "./component/Dashboard/Hero/MainContent";
import {MyCourses} from "./component/Dashboard/MyCourses"
import Certificate from "./component/Dashboard/Certificate";


export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showForgetotp, setShowForgetotp] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const handleLoginClick = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const isDashboardRoute = location.pathname.startsWith("/profile-dashboard");
  

  // Modal logic wrapper for all routes
  function ModalWrapper({ children }) {
    const location = useLocation();
    const isDashboardRoute = location.pathname.startsWith("/profile-dashboard");
    return (
      <div className="flex flex-col min-h-screen w-full">
        {!isDashboardRoute && <Navbar onLoginClick={handleLoginClick} />}
        <main className="flex-grow">
          {children}
          {showLogin && (
            <Login
              onClose={() => setShowLogin(false)}
              onSignupClick={handleSignupClick}
              onForgotPassword={() => {
                setShowLogin(false);
                setShowForgotPassword(true);
              }}
            />
          )}
          {showSignup && (
            <Signup
              onClose={() => setShowSignup(false)}
              onLoginClick={handleLoginClick}
              onContinue={() => {
                setShowSignup(false);
                setShowOTP(true);
              }}
            />
          )}
          {showPassword && (
            <Password
              onClose={() => setShowPassword(false)}
              onGoBack={() => {
                setShowPassword(false);
                setShowOTP(true);
              }}
              onContinue={() => {
                setShowPassword(false);
                // Possibly navigate to dashboard or show login
              }}
            />
          )}
          {showOTP && (
            <OTP
              onClose={() => setShowOTP(false)}
              onGoBack={() => {
                setShowOTP(false);
                setShowSignup(true);
              }}
              onSubmit={() => {
                setShowOTP(false);
                setShowPassword(true); // after signup flow OTP
              }}
            />
          )}
          {showForgetotp && (
            <ForgetOTP
              onClose={() => setShowForgetotp(false)}
              onLoginClick={() => {
                setShowForgetotp(false);
                setShowLogin(true);
              }}
              onGoBack={() => {
                setShowForgetotp(false);         // hide OTP
                setShowForgotPassword(true);     // show password reset
              }}
              onContinue={(otpCode) => {
                // optional: validate OTP
                setShowForgetotp(false);
                setShowResetPassword(true);     // or move forward after OTP submit
              }}
            />
          )}
          {showResetPassword && (
            <Reset
              onClose={() => setShowResetPassword(false)}
              onLoginClick={() => {
                setShowResetPassword(false);
                setShowLogin(true);
              }}
              onGoBack={() => {
                setShowResetPassword(false);
                setShowForgetotp(true);
              }}
            />
          )}
          {showForgotPassword && (
            <Forget
              onClose={() => setShowForgotPassword(false)}
              onLoginClick={() => {
                setShowForgotPassword(false);
                setShowLogin(true);
              }}
              onContinue={() => {
                setShowForgotPassword(false);
                setShowForgetotp(true); // go to OTP for forgot password flow
              }}
            />
          )}
        </main>
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ModalWrapper>
          <Home />
        </ModalWrapper>
      ),
    },
    {
      path: "/billing",
      element: (
        <ModalWrapper>
          <BillingPage />
        </ModalWrapper>
      ),
    },
    {
      path: "/courses",
      element: (
        <ModalWrapper>
          <CoursesSection />
        </ModalWrapper>
      ),
    },
    {
      path: "/course-details",
      element: (
        <ModalWrapper>
          <CoursePage />
        </ModalWrapper>
      ),
    },
    {
      path: "/contact",
      element: (
        <ModalWrapper>
          <ContactPage />
        </ModalWrapper>
      ),
    },
    {
      path: "/profile-dashboard",
      element: <Dashboard />, // Dashboard handles its own navbar and sidebar
      children: [
        { index: true, element: <MainContent /> },
      
        { path: "my-profile", element: <Profile /> },
        { path: "mycourses", element: <MyCourses /> },
        // { path: "assignments", element: <Assignments /> },
        { path: "certificate", element: <Certificate /> },
        // { path: "resume-builder", element: <ResumeBuilder /> },
        // { path: "referearn", element: <Referearn /> },
        // { path: "mentor", element: <Mentor /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
