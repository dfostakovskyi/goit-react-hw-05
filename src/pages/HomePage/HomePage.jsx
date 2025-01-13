// F:\Prodject\goit-react-hw-05\src\pages\HomePage\HomePage.jsx
import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../services/api";
import SimilarMoviesCard from "../../components/SimilarMoviesCard/SimilarMoviesCard"; // Ensure this path is correct
import style from "./HomePage.module.css"; // Ensure this path is correct

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className={style.container}>
      <h2>Trending today</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={style.list}>
          {movies.map((movie) => (
            <li key={movie.id} className={style.listItem}>
              <SimilarMoviesCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
