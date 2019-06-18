import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from '../../../../../../images/logo.svg';
import { signOut } from "../../../../actions/authActions"

function LinkItem({ url, linkText, signOut }) {
  const isHome = url === '/'
  const islogout = url ==='/signout'
  return (
    <li className="main-nav__item">
      {isHome ? (
          <NavLink to={url} className="main-nav__link">
            <img src={logo} alt={linkText} />
          </NavLink>
      ) :  (
        <NavLink
          to={url}
          className="main-nav__link"
          onClick = {islogout ? signOut : null}
          >
          {linkText}
        </NavLink>
      )
    }
    </li>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(LinkItem);
