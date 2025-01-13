// src\components\Navigation\Navigation.jsx
// src\components\Navigation\Navigation.jsx
import React from "react";
import CustomNavLink from "../NavLink/NavLink";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <CustomNavLink exact to="/">
        Home
      </CustomNavLink>
      <CustomNavLink exact to="/movies">
        Movies
      </CustomNavLink>
    </nav>
  );
};

export default Navigation;
