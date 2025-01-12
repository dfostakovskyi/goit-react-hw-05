// src/pages/MovieDetailsPage/MovieDetailsPage.jsx

import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../services/api";
import style from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => {
        console.error("Error fetching movie details:", err);
      });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/movies" className={style.backButton}>
        Go Back
      </Link>
      <div className={style.details}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <h1>{movie.title}</h1>
        <p>Rating: {movie.vote_average}</p>
        <p>Overview: {movie.overview}</p>
        <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
      <div className={style.additionalInfo}>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
