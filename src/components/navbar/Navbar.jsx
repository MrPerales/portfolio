import React from "react";
import "./navbar.css";

export default function Navbar() {
  const projectsSection = () => {
    document.getElementById("projectSection").scrollIntoView();
  };
  return (
    <header>
      <nav className="flex justify-between items-center w-full fixed bg-gray-50/[.1]">
        <div className="w-24  mx-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/63/63966.png"
            alt="logo"
            className="sm:w-full w-1/2"
          />
        </div>
        <div className="mx-9">
          <ul className="flex gap-5 sm:gap-14 list-none capitalize ">
            <li className="cursor-pointer">
              <a className="hover:underline" href="">
                Home
              </a>
            </li>
            <li className="cursor-pointer">
              <a className="hover:underline" onClick={projectsSection}>
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
