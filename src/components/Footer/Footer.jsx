import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-500 w-full">
      <div className="flex justify-center space-x-6 pt-8">
        <div>
          <a href="https://github.com/MrPerales">
            <BsGithub className="sm:w-8 sm:h-8  w-6 h-6" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/cperalescabrera">
            <BsLinkedin className="sm:w-8 sm:h-8  w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="flex justify-center pt-4 text-base  sm:text-lg pb-2">
        <span>copyright @2024</span>
      </div>
    </footer>
  );
}
