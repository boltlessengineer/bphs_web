import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">BopyungHS</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/club">Clubs</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  </header>
);
