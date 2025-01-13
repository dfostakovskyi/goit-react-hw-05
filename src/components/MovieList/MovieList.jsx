// src\components\MovieList\MovieList.jsx
import { useLocation, Link } from "react-router-dom";
import SimilarMoviesCard from "../SimilarMoviesCard/SimilarMoviesCard";
import style from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation(); // Використовуємо useLocation для отримання поточного місцезнаходження

  return (
    <ul className={style.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={style.listItem}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {" "}
            {/* Передаємо значення як проп state */}
            <SimilarMoviesCard movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
