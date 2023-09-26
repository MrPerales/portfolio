import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar-container">
        <div className="navbar-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/63/63966.png"
            alt="logo"
          />
        </div>
        <div className="navbar-right">
          <ul className="menu">
            {routes.map((route) => (
              <li key={route.text}>
                <NavLink
                  className="link"
                  style={({ isActive }) => ({
                    color: isActive ? "#175AAD" : "#465D7A",
                  })}
                  to={route.to}
                >
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
routes.push({
  to: "/contact",
  text: "contact",
  private: true,
});
