import React from "react";
import "./card.css";

export default function Card({ data }) {
  const { name, url, description } = data;
  return (
    <>
      <section className="card-container ">
        <figure className="folder">
          <img
            src="https://cdn.icon-icons.com/icons2/1379/PNG/512/folderblackgithub_93133.png"
            alt="folderBlackGitHub"
          />
        </figure>
        <div className="information">
          <p className="title-project">{name}</p>
          <p className="description-project">{description}</p>
          <a href={url} className="goTo">
            go to repository
          </a>
        </div>
      </section>
    </>
  );
}
