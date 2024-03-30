import React from "react";
import Header from "../components/header/Header";
import Skills from "../components/skills/Skills";

export default function HomePage() {
  return (
    <main className="w-full h-screen bg-gray-600 sm:bg-gray-700">
      <Header />
      <Skills></Skills>
    </main>
  );
}
