// src/components/MovieCast/MovieCast.jsx

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/api";
import ActorCard from "../ActorCard/ActorCard";
import style from "./MovieCast.module.css";

export const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const data = await getMovieCredits(movieId);
        if (Array.isArray(data.cast)) {
          setCast(data.cast);
        } else {
          throw new Error("Data cast is not an array");
        }
      } catch (err) {
        console.error("Error fetching movie credits:", err);
        setError("Failed to fetch movie credits");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={style.cast}>
      <h2>Cast</h2>
      {cast.length > 0 ? (
        <div className={style.castList}>
          {cast.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </div>
      ) : (
        <p>We don't have any information about the cast for this movie.</p>
      )}
    </div>
  );
};

export default MovieCast;
