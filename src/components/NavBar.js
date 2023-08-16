import React from "react";
import { NavLink } from "react-router-dom";

//The NavLink changes the URL
//Route conditionally renders a component when the URL matches the pattern given

function NavBar() {
    return (
        <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/add_dessert">Add Dessert</NavLink>
            <NavLink to="/baked_greats">Baked Greats</NavLink>
            <NavLink to="/let's_bake!">Let's Bake</NavLink>
        </div>
    )
}

export default NavBar