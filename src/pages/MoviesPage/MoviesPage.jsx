// src/pages/MoviesPage/MoviesPage.jsx

import { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { searchMovies } from "../../services/api";
import { Link, useSearchParams } from "react-router-dom";
import style from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      searchMovies(query)
        .then((data) => {
          if (Array.isArray(data.results)) {
            setMovies(data.results);
          } else {
            console.error("Error: data.results is not an array", data.results);
          }
        })
        .catch((err) => {
          console.error("Error fetching movies:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className={style.container}>
      <h2>Movies</h2>
      <SearchForm />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={style.list}>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesPage;
