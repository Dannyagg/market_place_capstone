import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

import React from "react";

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>CapStone</div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
