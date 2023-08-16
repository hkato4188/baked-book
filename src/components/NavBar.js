import React from "react";

function Navbar() {
    return (
        <div>
            <Navlink exact to="/">Home</Navlink>
            <Navlink to="/add_dessert">Add Dessert</Navlink>
            <Navlink to="/baked_greats">Baked Greats</Navlink>
            <Navlink to="/let's_bake!">Let's Bake</Navlink>
        </div>
    )
}

export default Navbar