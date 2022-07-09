import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <h1>React Users</h1>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
