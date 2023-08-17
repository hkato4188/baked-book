import { Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import About from "./About";
import DessertsPage from "./DessertsPage";
import DessertDetail from "./DessertDetail";
import ErrorPage from "./ErrorPage";
function App() {
  return (
    <>
      <Header />
      <NavBar />

      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/desserts/:id">
          <DessertDetail />
        </Route>
        <Route exact path="/desserts">
          <DessertsPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
