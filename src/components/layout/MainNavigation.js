import classes from "./MainNavigation.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import cocktail from "../../assets/cocktail.png";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={cocktail} />
      <p>Cocktail-o-hour</p>

      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/About">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
