import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import {
  getMovieDetails,
  getMovieCredits,
  getMovieVideos,
  getSimilarMovies,
} from "../../services/api";
import style from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [director, setDirector] = useState("");
  const [trailers, setTrailers] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    getMovieDetails(movieId)
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => {
        console.error("Error fetching movie details:", err);
      });

    getMovieCredits(movieId)
      .then((data) => {
        const directorData = data.crew.find(
          (member) => member.job === "Director"
        );
        setDirector(directorData ? directorData.name : "Unknown");
      })
      .catch((err) => {
        console.error("Error fetching movie credits:", err);
      });

    getMovieVideos(movieId)
      .then((data) => {
        setTrailers(data.results);
      })
      .catch((err) => {
        console.error("Error fetching movie videos:", err);
      });

    getSimilarMovies(movieId)
      .then((data) => {
        setSimilarMovies(data.results);
      })
      .catch((err) => {
        console.error("Error fetching similar movies:", err);
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
        <p>Release Date: {movie.release_date}</p>
        <p>Runtime: {movie.runtime} minutes</p>
        <p>Director: {director}</p>
        <p>
          Production Companies:{" "}
          {movie.production_companies.map((company) => company.name).join(", ")}
        </p>
        <p>Budget: ${movie.budget.toLocaleString()}</p>
        <p>Revenue: ${movie.revenue.toLocaleString()}</p>
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
          <li>
            <Link to={`/movies/${movieId}/trailers`}>Trailers</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/similar`}>Similar Movies</Link>
          </li>
        </ul>
        <Outlet />
      </div>
      <div>
        <h2>Trailers</h2>
        {trailers.map((trailer) => (
          <div key={trailer.id}>
            <a
              href={`https://www.youtube.com/watch?v=${trailer.key}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {trailer.name}
            </a>
          </div>
        ))}
      </div>
      <div>
        <h2>Similar Movies</h2>
        {similarMovies.map((similarMovie) => (
          <div key={similarMovie.id}>
            <Link to={`/movies/${similarMovie.id}`}>{similarMovie.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailsPage;
