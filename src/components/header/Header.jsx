import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Header() {
  return (
    <section className="w-full h-full flex gap-20 justify-center items-center">
      <div className="w-2/4 flex flex-col gap-14">
        <h1 className="font-sans font-bold text-center text-gray-50 text-3xl sm:text-7xl ">
          Hey , I´m Carlos Perales
          {/* Frontend Developer */}
        </h1>
        <div className="text-gray-50 sm:w-full text-center sm:text-lg ">
          <p>
            Mechatronics engineer with: Tools to integrate multidisciplinary
            technologies such as electronics, mechanical and systems. With
            knowledge in web development for the creation of modern and
            interactive interfaces
          </p>
        </div>
        <div className="flex flex-col justify-center text-gray-50 items-center  gap-2 md:space-x-2  md:flex-row">
          <div className="flex flex-col gap-2 items-center">
            <BsGithub />
            <a href="https://github.com/MrPerales">GitHub</a>
          </div>
          <span class="text-gray-500 hidden md:block">•</span>
          <div className="flex flex-col gap-2 items-center">
            <BsLinkedin />
            <a href="https://www.linkedin.com/in/cperalescabrera">Linkedin</a>
          </div>
        </div>
      </div>
      {/* <div className="relative w-full h-full hidden sm:block ">
        <img
          src="https://cdn-icons-png.flaticon.com/512/63/63966.png"
          className="absolute w-52 sm:w-56 md:w-60 lg:w-96 right-0"
          alt="logo"
        />
      </div> */}
    </section>
  );
}
