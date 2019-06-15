import React from "react";
import LinkItem from "./LinkItem";

const LINKS = [
  {
    url: "/",
    linkText: "Welcome"
  },
  {
    url: "/signin/",
    linkText: "Sign In"
  },
  {
    url: "/signout/",
    linkText: "Sign Out"
  },
  {
    url: "/random/",
    linkText: "Random Cat"
  },
  {
    url: "/favorites/",
    linkText: "Favorites"
  }
];

function LinkList() {
  const LinkListItem = LINKS.map(link => {
    return (
      <LinkItem key={link.linkText} url={link.url} linkText={link.linkText} />
    );
  });

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">{LinkListItem}</ul>
    </nav>
  );
}

export default LinkList;
