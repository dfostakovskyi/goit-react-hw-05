// src/components/MovieCast/MovieCast.jsx

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/api";
import ActorCard from "../ActorCard/ActorCard";
import style from "./MovieCast.module.css";

export const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId)
      .then((data) => {
        if (Array.isArray(data.cast)) {
          setCast(data.cast);
        } else {
          console.error("Error: data.cast is not an array", data.cast);
        }
      })
      .catch((err) => {
        console.error("Error fetching movie credits:", err);
      });
  }, [movieId]);

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
