// src\components\MovieTrailer\MovieTrailer.jsx
// src\components\MovieTrailer\MovieTrailer.modules.css

import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import { getMovieVideos } from "../../services/api";
import MovieTrailerCard from "../MovieTrailerCard/MovieTrailerCard";
import style from "./MovieTrailer.module.css";

const MovieTrailer = () => {
  const { movieId } = useOutletContext();
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    if (movieId) {
      getMovieVideos(movieId)
        .then((data) => {
          setTrailers(data.results);
        })
        .catch((err) => {
          console.error("Error fetching movie videos:", err);
        });
    }
  }, [movieId]);

  return (
    <div className={style.trailerContainer}>
      <h2>Trailers</h2>
      <div className={style.cardContainer}>
        {trailers.map((trailer) => (
          <MovieTrailerCard key={trailer.id} trailer={trailer} />
        ))}
      </div>
    </div>
  );
};

MovieTrailer.propTypes = {
  movieId: PropTypes.string,
};

export default MovieTrailer;
