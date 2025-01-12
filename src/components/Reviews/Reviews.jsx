// src\components\Reviews\Reviews.jsx

import React from "react";
import style from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <div className={style.reviews}>
      {reviews.map(({ id, author, content }) => (
        <div key={id} className={style.reviewCard}>
          <h3 className={style.author}>{author}</h3>
          <p className={style.content}>{content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
