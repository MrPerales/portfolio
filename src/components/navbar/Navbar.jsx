import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
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
          <ul className="flex gap-5 sm:gap-14 list-none capitalize">
            {routes.map((route) => (
              <li key={route.text}>
                <NavLink className="text-white hover:underline" to={route.to}>
                  {route.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
const routes = [];
routes.push({
  to: "/",
  text: "home",
  private: true,
});

routes.push({
  to: "/projects",
  text: "projects",
  private: true,
});
