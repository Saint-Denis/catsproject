import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../../../../../images/logo.svg'

function LinkItem({ url, linkText }) {
  const isHome = url === '/'
  return (
    <li className="main-nav__item">
      {isHome ? (
          <NavLink to={url} className="main-nav__link">
            <img src={logo} alt={linkText} />
          </NavLink>
      ) :  (
        <NavLink to={url} className="main-nav__link">
          {linkText}
        </NavLink>
      )
    }
    </li>
  );
}

export default LinkItem;
