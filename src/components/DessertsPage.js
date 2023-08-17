import React from "react";
import { useState, useEffect } from "react";
import DessertContainer from "./DessertContainer";

function Desserts() {
  const [dessertList, setDessertList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8001/Recipes`)
      .then((response) => response.json())
      .then((data) => setDessertList(data));
  }, []);

  return (
    <div>
      <DessertContainer dessertList={dessertList} />
    </div>
  );
}

export default Desserts;
