// src\components\SimilarMoviesCard\SimilarMoviesCard.jsx
// src\components\SimilarMoviesCard\SimilarMoviesCard.module.css
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./SimilarMoviesCard.module.css";

const SimilarMoviesCard = ({ movie }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl(
      movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://placeholder.pics/svg/500x750/cccccc/808080/No%20Image"
    );
  }, [movie.poster_path]);

  return (
    <div className={style.card}>
      <img src={imageUrl} alt={movie.title} className={style.image} />
      <div className={style.info}>
        <h3 className={style.title}>{movie.title}</h3>
      </div>
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
