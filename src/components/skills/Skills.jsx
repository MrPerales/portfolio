import React from "react";
import AngularIcon from "../Icons/AngularIcon";
import Html5Icon from "../Icons/Html5Icon";
import ReactIcon from "../Icons/ReactIcon";
import TailwindIcon from "../Icons/TailwindIcon";
import JavaScriptIcon from "../Icons/JavaScriptIcon";
import TypeScriptIcon from "../Icons/TypeScriptIcon";

export default function Skills() {
  return (
    <section className="w-full h-36  bg-gray-600 sm:bg-gray-700">
      <div className="flex justify-center">
        <div className="bg-gray-900 h-1 w-3/4 "></div>
      </div>
      <div className="flex justify-center flex-wrap items-center object-cover mt-8 sm:mt-10 space-x-5 sm:space-x-20">
        <div className="w-10 h-10 sm:w-14 sm:h-14  opacity-50 hover:opacity-100">
          <JavaScriptIcon />
        </div>
        <div className=" w-10 h-10 sm:w-14 sm:h-14  opacity-50 hover:opacity-100">
          <TypeScriptIcon />
        </div>
        <div className="w-10 h-10 sm:w-14 sm:h-14  opacity-50 hover:opacity-100">
          <Html5Icon />
        </div>
        <div className="w-10 h-10 sm:w-14 sm:h-14  opacity-50 hover:opacity-100">
          <TailwindIcon />
        </div>
        <div className="w-10 h-10 sm:w-14 sm:h-14  opacity-50 hover:opacity-100">
          <ReactIcon />
        </div>
        <div className="w-10 h-10 sm:w-14 sm:h-14  opacity-50 hover:opacity-100">
          <AngularIcon />
        </div>
      </div>
    </section>
  );
}
