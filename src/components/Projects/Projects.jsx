import React from "react";
import {
  AngularScreenFakeStore,
  AngularScreenTrello,
  NativcScreenGame,
  NativeScreenPokeDex,
  ReactScreenMovie,
  ReactScreenTodo,
} from "../../utils/constans";
import Slider from "../slider/Slider";
export default function Projects() {
  return (
    <section className=" w-full  bg-gray-600 sm:bg-gray-700 flex sm:flex-col flex-wrap  sm:justify-center">
      <article className="w-1/2  sm:w-full h-60 sm:h-full flex flex-col items-center justify-center sm:flex-row  mb-10">
        <div className="sm:w-1/4 w-40 ">
          <Slider screens={AngularScreenFakeStore} desktop={true} />
        </div>
        <div className="sm:w-2/4 w-96  hidden sm:block">description</div>
        <div className="sm:hidden">logos</div>
      </article>
      <article className="w-1/2 sm:w-full h-60 sm:h-full flex flex-col items-center justify-center sm:flex-row  mb-10">
        <div className="sm:w-1/4 w-40 ">
          <Slider screens={AngularScreenTrello} desktop={true} />
        </div>
        <div className="sm:w-2/4 w-96  hidden sm:block">description</div>
        <div className="sm:hidden">logos</div>
      </article>
      <article className="w-1/2 sm:w-full h-60 sm:h-full flex flex-col items-center justify-center sm:flex-row-reverse  mb-10">
        <div className="sm:w-1/4 w-40 ">
          <Slider screens={ReactScreenMovie} desktop={true} />
        </div>
        <div className="sm:w-2/4 w-96  hidden sm:block">description</div>
        <div className="sm:hidden">logos</div>
      </article>
      <article className="w-1/2 sm:w-full h-60 sm:h-full flex flex-col items-center justify-center sm:flex-row-reverse  mb-10">
        <div className="sm:w-1/4 w-40  flex justify-center">
          <Slider screens={ReactScreenTodo} desktop={false} />
        </div>
        <div className="sm:w-2/4 w-96  hidden sm:block">description</div>
        <div className="sm:hidden">logos</div>
      </article>
      <article className="w-1/2 sm:w-full h-60 sm:h-full flex flex-col items-center justify-center sm:flex-row  mb-10">
        <div className="sm:w-1/4 w-40  flex justify-center">
          <Slider screens={NativeScreenPokeDex} desktop={false} />
        </div>
        <div className="sm:w-2/4 w-96  hidden sm:block">description</div>
        <div className="sm:hidden">logos</div>
      </article>
      <article className="w-1/2 sm:w-full h-60 sm:h-full flex flex-col items-center justify-center sm:flex-row  mb-10">
        <div className="sm:w-1/4 w-40  flex justify-center">
          <Slider screens={NativcScreenGame} desktop={false} />
        </div>
        <div className="sm:w-2/4 w-96  hidden sm:block">description</div>
        <div className="sm:hidden">logos</div>
      </article>
    </section>
  );
}
