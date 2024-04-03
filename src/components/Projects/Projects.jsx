import React from "react";
import { projects } from "../../utils/constans";

import Slider from "../slider/Slider";
export default function Projects() {
  return (
    <section className=" w-full  bg-gray-600 sm:bg-gray-700 flex sm:flex-col flex-wrap  sm:justify-center">
      {projects.map((project) => {
        const StyleRowReverse = project.rowReverse
          ? "sm:flex-row-reverse"
          : "sm:flex-row";

        return (
          <article
            className={
              "w-1/2  sm:w-full h-60 sm:h-full flex flex-col items-center justify-center mb-10 " +
              StyleRowReverse
            }
          >
            <div className="sm:w-1/4 w-40 ">
              <Slider screens={project.screens} desktop={project.desktop} />
            </div>
            <div className="sm:w-2/4 w-96  hidden sm:block ">
              <div className="w-3/4 flex justify-center items-start flex-col ml-16 ">
                <h2 className="text-white font-bold text-lg">
                  {project.title}
                </h2>
                <p className=" text-white mt-6">{project.description}</p>
                <div className=" w-full flex mt-6">
                  <a href={project.repository}>
                    <button className="w-36 py-2 px-5 bg-sky-400 hover:bg-sky-800 font-medium rounded text-sm ">
                      Repository
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:hidden flex flex-col text-white font-bold py-2">
              {project.technologies.map((technology) => (
                <span>{technology.name} </span>
              ))}
            </div>
          </article>
        );
      })}
    </section>
  );
}
