// src\components\SimilarMoviesCard\SimilarMoviesCard.jsx
// src\components\SimilarMoviesCard\SimilarMoviesCard.module.css
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./SimilarMoviesCard.module.css";

const SimilarMoviesCard = ({ movie }) => {
  const placeholderImage =
    "https://placeholder.pics/svg/500x750/cccccc/808080/No%20Image";

  return (
    <div className={style.card}>
      <Link to={`/movies/${movie.id}`}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : placeholderImage
          }
          alt={movie.title}
          className={style.image}
        />
        <div className={style.info}>
          <h3>{movie.title}</h3>
        </div>
      </Link>
    </div>
  );
};

SimilarMoviesCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default SimilarMoviesCard;
