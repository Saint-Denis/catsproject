import React from "react";
import { connect } from "react-redux";
import LinkItem from "./LinkItem";

const SIGNEDINLINKS = [
  {
    url: "/",
    linkText: "Welcome",
  },
  {
    url: "/random",
    linkText: "Random Cat"
  },
  {
    url: "/favorites",
    linkText: "Favorites"
  },
  {
    url: "/signout",
    linkText: "Log Out"
  },
];

const SIGNEDOUTLINKS = [
  {
    url: "/",
    linkText: "Welcome",
  },
  {
    url: "/signin",
    linkText: "Sign In"
  },
  {
    url: "/signup",
    linkText: "Sign Up"
  },
];

function LinkList({auth}) {
  const LINKS = auth.uid ? SIGNEDINLINKS : SIGNEDOUTLINKS
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
      {
        LINKS.map(link => {
          return (
            <LinkItem key={link.linkText} url={link.url} linkText={link.linkText} />
        )
      })
    }
      </ul>
    </nav>
  );
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(LinkList);
