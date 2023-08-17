import React from "react";

import DessertCard from "./DessertCard";

import "./css/DessertContainer.css";

function DessertContainer({ dessertList }) {
  const renderedDesserts = dessertList.map((dessert) => {
    return <DessertCard key={dessert.id} dessert={dessert} />;
  });

  return <main className="wrapper">{renderedDesserts}</main>;
}

export default DessertContainer;
