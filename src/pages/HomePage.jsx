import React from "react";
import Header from "../components/header/Header";
import Skills from "../components/skills/Skills";
import Projects from "../components/Projects/Projects";

export default function HomePage() {
  return (
    <main className="w-full h-screen bg-gray-600 sm:bg-gray-700">
      <Header />
      <Skills></Skills>
      <div className="flex w-full pb-10 pt-10 pl-10 sm:justify-center justify-start items-center h-14 bg-gray-600 sm:bg-gray-700 ">
        <h2 className="font-bold text-white text-xl sm:text-4xl">Projects</h2>
      </div>
      <Projects></Projects>
    </main>
  );
}
