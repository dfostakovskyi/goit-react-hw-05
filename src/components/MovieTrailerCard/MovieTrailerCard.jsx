import React from "react";
import PropTypes from "prop-types";
import style from "./MovieTrailerCard.module.css";

const MovieTrailerCard = ({ trailer }) => {
  return (
    <div className={style.card}>
      <a
        href={`https://www.youtube.com/watch?v=${trailer.key}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`}
          alt={trailer.name}
          className={style.image}
        />
      </a>
      <div className={style.info}>
        <h3>{trailer.name}</h3>
        <p>Type: {trailer.type}</p>
        <p>
          Published at: {new Date(trailer.published_at).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

MovieTrailerCard.propTypes = {
  trailer: PropTypes.object.isRequired,
};

export default MovieTrailerCard;
