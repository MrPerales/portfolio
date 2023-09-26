import React from "react";
import "./styles/homePageStyles.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
export default function HomePage() {
  return (
    <main className="main-container">
      <section>
        <div className="description-container">
          <div>
            <h1>Frontend Developer</h1>
          </div>
          <p className="txt">
            <span>Carlos Perales.</span>
            Mechatronics engineer with: Tools to integrate multidisciplinary
            technologies such as electronics, mechanical and systems. With
            knowledge in web development for the creation of modern and
            interactive interfaces
          </p>
          <div className="social">
            <div>
              <BsGithub />
              <a href="https://github.com/MrPerales">GitHub</a>
            </div>
            <div>
              <BsLinkedin />
              <a href="https://www.linkedin.com/in/cperalescabrera">Linkedin</a>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/63/63966.png"
            alt="logo"
          />
        </div>
      </section>
    </main>
  );
}
