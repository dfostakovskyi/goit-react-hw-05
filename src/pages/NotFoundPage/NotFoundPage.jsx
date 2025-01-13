// src\pages\NotFoundPage\NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import style from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={style.notFoundContainer}>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className={style.homeLink}>
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
