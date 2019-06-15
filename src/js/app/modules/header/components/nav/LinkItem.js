import React from "react";
import { NavLink } from "react-router-dom";

function LinkItem({ url, linkText }) {
  return (
    <li className="main-nav__item">
      <NavLink to={url} className="main-nav__link">
        {linkText}
      </NavLink>
    </li>
  );
}

export default LinkItem;
