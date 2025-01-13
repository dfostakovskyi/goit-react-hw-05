// src/components/MovieReviews/MovieReviews.jsx

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/api";
import style from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        if (Array.isArray(data.results)) {
          setReviews(data.results);
        } else {
          throw new Error("Data results is not an array");
        }
      } catch (err) {
        console.error("Error fetching movie reviews:", err);
        setError("Failed to fetch reviews");
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={style.reviews}>
      <h2>Reviews</h2>
      {error ? (
        <p>{error}</p>
      ) : reviews.length > 0 ? (
        <ul className={style.reviewList}>
          {reviews.map((review) => (
            <li key={review.id} className={style.reviewItem}>
              <strong>{review.author}</strong>: {review.content}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default MovieReviews;
