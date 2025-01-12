// src\components\NavLink\NavLink.jsx
import { Link } from "react-router-dom";
import s from "./NavLink.module.css";

export const NavLink = ({ to, children }) => {
  return (
    <Link to={to} className={s.link} activeClassName={s.active} exact>
      {children}
    </Link>
  );
};

export default NavLink;
