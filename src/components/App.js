import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import NavBar from "./NavBar"
import About from './About'
import Home from './Home'
import Header from './Header'
// import DessertContainer from "./DessertContainer"

function App() {
    return (
        <>
            <Header />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Switch>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>

                <NavBar />

            </div>
        </>
    )
}

export default App

