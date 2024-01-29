"use client";
import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

export const MobileNavbar = ({ nav, closeNav }: Props) => {
    const newAnimation = nav ? "translate-x-0" : "translate-x-[-100%]"; // Adjusted animation value

  return (
    <div
      className={`fixed ${newAnimation} transition-all duration-300 top-0 right-0 bottom-0 left-0 z-[1000] bg-[#09101a]`}
    >
      <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center">
        <div className="nav-links-mobile">Home</div>
        <div className="nav-links-mobile">Services</div>
        <div className="nav-links-mobile">About</div>
        <div className="nav-links-mobile">Project</div>
        <div className="nav-links-mobile">Blog</div>
        <div className="nav-links-mobile">Contact</div>
      </div>
      <div onClick={closeNav}>
        <XMarkIcon className="absolute top-[2rem] right-[2rem] h-[2rem] w-[2rem] text-white" />
      </div>
    </div>
  );
};
