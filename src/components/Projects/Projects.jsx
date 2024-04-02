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
      <article className="w-1/2  sm:w-full h-60 sm:h-full flex flex-col items-center justify-center sm:flex-row  mb-10 ">
        <div className="sm:w-1/4 w-40 ">
          <Slider screens={AngularScreenFakeStore} desktop={true} />
        </div>
        <div className="sm:w-2/4 w-96  hidden sm:block ">
          <div className="w-3/4 flex justify-center items-start flex-col ml-16 ">
            {/* cambie clases  */}
            <h2 className="text-white font-bold text-lg"> FakeStore </h2>
            <p className=" text-white mt-6">
              A e-commerce where do you can add the product to shopphing car and
              see their description, developed with angular and tailwindCss for
              the website design
            </p>
            <div className=" w-full flex mt-6">
              <button className="w-36 py-2 px-5 bg-sky-400 hover:bg-sky-800 font-medium rounded text-sm ">
                Repository
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col text-white font-bold py-2">
          <span>TypeScript</span>
          <span>Tailwind</span>
          <span>Angular</span>
        </div>
      </article>
      <article className="w-1/2 sm:w-full h-60 sm:h-full flex flex-col items-center justify-center sm:flex-row  mb-10">
        <div className="sm:w-1/4 w-40 ">
          <Slider screens={AngularScreenTrello} desktop={true} />
        </div>
        <div className="sm:w-2/4 w-96  hidden sm:block">
          <div className="w-3/4 flex justify-center items-start flex-col ml-16">
            <h2 className="text-white font-bold text-lg">Trello Clon</h2>
            <p className=" text-white mt-6">
              Trello clone,developed with Angular Cdk components to imitate the
              interface and consuming fake-trello-api for user verification and
              task posting
            </p>
            <div className=" w-full flex mt-6">
              <button className="w-36  py-2 px-5 bg-sky-400 hover:bg-sky-800 font-medium rounded text-sm ">
                Repository
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col text-white font-bold py-2">
          <span>TypeScript</span>
          <span>Tailwind</span>
          <span>Angular SDK</span>
        </div>
      </article>
      <article className="w-1/2 sm:w-full h-60 sm:h-full flex flex-col items-center justify-center sm:flex-row-reverse  mb-10">
        <div className="sm:w-1/4 w-40 ">
          <Slider screens={ReactScreenMovie} desktop={true} />
        </div>
        <div className="sm:w-2/4 w-96  hidden sm:block">
          <div className="w-3/4 flex justify-center items-start flex-col ml-16 ">
            <h2 className="text-white font-bold text-lg">Movie App</h2>
            <p className=" text-white mt-6">
              A movie app developed with react framework,where would you find a
              lot of movies with their description, rating and other filters,
              using components and states to share the information got from API,
            </p>
            <div className=" w-full flex mt-6">
              <button className="w-36  py-2 px-5 bg-sky-400 hover:bg-sky-800 font-medium rounded text-sm ">
                Repository
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col text-white font-bold py-2">
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </article>
      <article className="w-1/2 sm:w-full h-60 sm:h-full flex flex-col items-center justify-center sm:flex-row-reverse  mb-10">
        <div className="sm:w-1/4 w-40  flex justify-center">
          <Slider screens={ReactScreenTodo} desktop={false} />
        </div>
        <div className="sm:w-2/4 w-96  hidden sm:block">
          <div className="w-3/4 flex justify-center items-start flex-col ml-16 ">
            <h2 className="text-white font-bold text-lg">Todo App </h2>
            <p className=" text-white mt-6">
              A task management app , you can add ,edit and check the task
              .developed with React framework , using states and hooks to save
              the all task on local storage
            </p>
            <div className=" w-full flex mt-6">
              <button className="w-36  py-2 px-5 bg-sky-400 hover:bg-sky-800 font-medium rounded text-sm ">
                Repository
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col text-white font-bold py-2">
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </article>
      <article className="w-1/2 sm:w-full h-60 sm:h-full flex flex-col items-center justify-center sm:flex-row  mb-10">
        <div className="sm:w-1/4 w-40  flex justify-center">
          <Slider screens={NativeScreenPokeDex} desktop={false} />
        </div>
        <div className="sm:w-2/4 w-96  hidden sm:block">
          <div className="w-3/4 flex justify-center items-start flex-col ml-16 ">
            <h2 className="text-white font-bold text-lg">Pokedex</h2>
            <p className=" text-white mt-6">
              A pokedex app , where would you find all pokemons , save your
              Favorites pokes , and see their stats with a friendly interface ,
              developed with ReactNative
            </p>
            <div className=" w-full flex mt-6">
              <button className="w-36  py-2 px-5 bg-sky-400 hover:bg-sky-800 font-medium rounded text-sm ">
                Repository
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col text-white font-bold py-2">
          <span>JavaScript</span>
          <span>ReactNative</span>
        </div>
      </article>
      <article className="w-1/2 sm:w-full h-60 sm:h-full flex flex-col items-center justify-center sm:flex-row  mb-10">
        <div className="sm:w-1/4 w-40  flex justify-center">
          <Slider screens={NativcScreenGame} desktop={false} />
        </div>
        <div className="sm:w-2/4 w-96  hidden sm:block">
          <div className="w-3/4 flex justify-center items-start flex-col ml-16 ">
            <h2 className="text-white font-bold text-lg">Memory Game</h2>
            <p className=" text-white mt-6">
              A memory game , is a classic board game but this is a virtual
              version developed with React Native where the objective and rules
              are same that board game
            </p>
            <div className=" w-full flex mt-6">
              <button className="w-36  py-2 px-5 bg-sky-400 hover:bg-sky-800 font-medium rounded text-sm ">
                Repository
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col text-white font-bold py-2 ">
          <span>JavaScript</span>
          <span>ReactNative</span>
        </div>
      </article>
    </section>
  );
}
