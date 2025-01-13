// src\components\Navigation\Navigation.jsx
import React from "react";
import CustomNavLink from "../NavLink/NavLink"; // Corrected relative path
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <CustomNavLink to="/">Home</CustomNavLink>
      <CustomNavLink to="/movies">Movies</CustomNavLink>
    </nav>
  );
};

export default Navigation;
