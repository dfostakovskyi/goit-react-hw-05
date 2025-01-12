// src\components\Navigation\Navigation.jsx
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
};

export default Navigation;
