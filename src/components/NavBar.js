import React from "react";
import { NavLink } from "react-router-dom";
import "./css/NavBar.css";

//The NavLink changes the URL
//Route conditionally renders a component when the URL matches the pattern given

function NavBar() {
  return (
    <div className="nav-container">
      <NavLink
        activeStyle={{ backgroundColor: "#7895CB" }}
        className="nav-btn nav-text"
        exact
        to="/desserts"
      >
        Desserts
      </NavLink>
      <NavLink
        activeStyle={{ backgroundColor: "#7895CB" }}
        className="nav-btn nav-text"
        exact
        to="/add_dessert"
      >
        Add Dessert
      </NavLink>
      <NavLink
        activeStyle={{ backgroundColor: "#7895CB" }}
        exact
        className="nav-btn nav-text"
        to="/baked_greats"
      >
        Baked Greats
      </NavLink>
      <NavLink
        activeStyle={{ backgroundColor: "#7895CB" }}
        className="nav-btn nav-text"
        exact
        to="/let's_bake!"
      >
        Let's Bake
      </NavLink>
      <NavLink
        activeStyle={{ backgroundColor: "#7895CB" }}
        className="nav-btn nav-text"
        exact
        to="/about"
      >
        About
      </NavLink>
    </div>
  );
}

export default NavBar;
