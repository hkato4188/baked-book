import { Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import About from "./About";
import DessertsPage from "./DessertsPage";
import DessertDetail from "./DessertDetail";
import ErrorPage from "./ErrorPage";
import AddDessertForm from "./AddDessertForm";

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
        <Route path='/add_dessert'>
          <AddDessertForm />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>

      </Switch>
    </>
  );
}

export default App;
