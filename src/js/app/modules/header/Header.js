import React from "react";
import LinkList from "./components/nav/LinkList";

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <LinkList />
      </div>
    </header>
  );
}

export default Header;
