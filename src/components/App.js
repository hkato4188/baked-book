import { Switch, Route } from "react-router-dom";
import React from "react";
import "./css/App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import DessertsPage from "./DessertsPage";
import About from "./About";

function App() {
  return (
    <>
      <Header />
      <NavBar />

      <Switch>
        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/desserts">
          <DessertsPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
