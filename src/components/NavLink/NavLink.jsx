// src\components\NavLink\NavLink.jsx
// src/components/NavLink/NavLink.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./NavLink.module.css";

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${style.link} ${style.active}` : style.link
      }
      exact="true"
    >
      {children}
    </NavLink>
  );
};

CustomNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomNavLink;
