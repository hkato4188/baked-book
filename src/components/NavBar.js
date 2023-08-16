import React from "react";
import { NavLink } from "react-router-dom";
import "./css/NavBar.css";

//The NavLink changes the URL
//Route conditionally renders a component when the URL matches the pattern given

function NavBar() {
  return (
    <div className="nav-container">
      <NavLink className="nav-btn nav-text" exact to="/">
        Home
      </NavLink>
      <NavLink className="nav-btn nav-text" to="/add_dessert">
        Add Dessert
      </NavLink>
      <NavLink className="nav-btn nav-text" to="/baked_greats">
        Baked Greats
      </NavLink>
      <NavLink className="nav-btn nav-text" to="/let's_bake!">
        Let's Bake
      </NavLink>
      <NavLink className="nav-btn nav-text" to="/about">
        About
      </NavLink>
    </div>
  );
}

export default NavBar;
