// src/components/ActorCard/ActorCard.jsx

import React from "react";
import style from "./ActorCard.module.css";

const ActorCard = ({ actor }) => {
  const profilePath = actor.profile_path
    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
    : null;

  return (
    <div className={style.card}>
      {profilePath ? (
        <img src={profilePath} alt={actor.name} className={style.photo} />
      ) : (
        <div className={style.placeholder}></div>
      )}
      <div className={style.details}>
        <h3>{actor.name}</h3>
        <p>Character: {actor.character}</p>
      </div>
    </div>
  );
};

export default ActorCard;
