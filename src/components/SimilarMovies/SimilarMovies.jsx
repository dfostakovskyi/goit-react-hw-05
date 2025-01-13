// src/components/SimilarMovies/SimilarMovies.jsx
// src\components\SimilarMovies\SimilarMovies.modules.css

import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { getSimilarMovies } from "../../services/api";
import SimilarMoviesCard from "../SimilarMoviesCard/SimilarMoviesCard";
import style from "./SimilarMovies.module.css";

const SimilarMovies = () => {
  const { movieId } = useOutletContext();
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    if (movieId) {
      getSimilarMovies(movieId)
        .then((data) => {
          setSimilarMovies(data.results);
        })
        .catch((err) => {
          console.error("Error fetching similar movies:", err);
        });
    }
  }, [movieId]);

  return (
    <div className={style.similarMoviesContainer}>
      <h2>Similar Movies</h2>
      <div className={style.movieList}>
        {similarMovies.map((similarMovie) => (
          <SimilarMoviesCard key={similarMovie.id} movie={similarMovie} />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
