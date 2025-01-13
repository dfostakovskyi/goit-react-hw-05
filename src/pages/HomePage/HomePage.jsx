// F:\Prodject\goit-react-hw-05\src\pages\HomePage\HomePage.jsx

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import style from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then((data) => {
        console.log("Fetched movies:", data.results);
        setMovies(data.results);
      })
      .catch((err) => {
        console.error("Error fetching trending movies:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log("HomePage location:", location);

  return (
    <div className={style.container}>
      <h2>Trending today</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MovieList movies={movies} state={location.state} />
      )}
    </div>
  );
};

export default HomePage;
