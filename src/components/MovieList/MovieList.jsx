// src/components/MovieList/MovieList.jsx

import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../services/api";
import { Link } from "react-router-dom";
import style from "./MovieList.module.css";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getTrendingMovies().then((data) => {
      if (isMounted) {
        if (Array.isArray(data.results)) {
          setMovies(data.results);
        } else {
          console.error("Error: data.results is not an array");
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ul className={style.list}>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
