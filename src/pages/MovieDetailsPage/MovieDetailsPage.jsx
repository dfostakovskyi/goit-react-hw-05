// src\pages\MovieDetailsPage\MovieDetailsPage.jsx
import { useState, useEffect } from "react";
import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { getMovieDetails, getMovieCredits } from "../../services/api";
import style from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [director, setDirector] = useState("");
  const placeholderImage =
    "https://placeholder.pics/svg/500x750/cccccc/808080/No%20Image";
  const placeholderBackdrop =
    "https://placeholder.pics/svg/1280x720/cccccc/808080/No%20Image"; // Плейсхолдер для backdrop

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
  }, [movieId]);

  const handleGoBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from);
    } else {
      navigate("/movies");
    }
  };

  if (!movie) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <RotatingLines
          strokeColor="#00BFFF"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className={style.container}>
      <button className={style.backButton} onClick={handleGoBack}>
        Go Back
      </button>

      <div
        className={style.pageContainer}
        style={{
          backgroundImage: `url(${
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
              : placeholderBackdrop
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={style.details}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                : placeholderImage
            }
            alt={movie.title}
          />
          <div className={style.info}>
            <h1>{movie.title}</h1>
            <p>Rating: {movie.vote_average}</p>
            <p>Overview: {movie.overview}</p>
            <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Runtime: {movie.runtime} minutes</p>
            <p>Director: {director}</p>
            <p>
              Production Companies:{" "}
              {movie.production_companies
                .map((company) => company.name)
                .join(", ")}
            </p>
            <p>Budget: ${movie.budget.toLocaleString()}</p>
            <p>Revenue: ${movie.revenue.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <div className={style.additionalInfo}>
        <h2>Additional Information</h2>
        <ul className={style.additionalInfoList}>
          <li>
            <Link to={`/movies/${movieId}/cast`} state={{ from: location }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`} state={{ from: location }}>
              Reviews
            </Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/trailers`} state={{ from: location }}>
              Trailers
            </Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/similar`} state={{ from: location }}>
              Similar movies
            </Link>
          </li>
        </ul>
        <Outlet context={{ movieId }} />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
