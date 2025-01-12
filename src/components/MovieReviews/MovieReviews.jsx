// src/components/MovieReviews/MovieReviews.jsx

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/api";
import Reviews from "../Reviews/Reviews";
import style from "./MovieReviews.module.css";

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then((data) => {
        if (Array.isArray(data.results)) {
          setReviews(data.results);
        } else {
          console.error("Error: data.results is not an array", data.results);
        }
      })
      .catch((err) => {
        console.error("Error fetching movie reviews:", err);
      });
  }, [movieId]);

  return (
    <div className={style.reviews}>
      <h2>Reviews</h2>
      <Reviews reviews={reviews} />
    </div>
  );
};

export default MovieReviews;
