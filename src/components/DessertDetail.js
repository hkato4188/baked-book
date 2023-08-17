import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/DessertDetail.css";

function DessertDetail() {
  const { id } = useParams();
  const [selectedDessert, setSelectedDessert] = useState(); //this could be the fix!

  useEffect(() => {
    fetch(`http://localhost:8001/Recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setSelectedDessert(data));
  }, [id]);

  const Method = selectedDessert.Method.map((step) => <li>{step}</li>);
  const Ingredients = selectedDessert.Ingredients.map((ingredient) => (
    <li>{ingredient}</li>
  ));

  if (!selectedDessert) return <h1>...Loading</h1>;
  return (
    <div className="dessert-detail">
      <img
        className="dessert-image"
        src={selectedDessert.Image}
        alt={selectedDessert.Name}
      />
      <h4>{selectedDessert.Name}</h4>
      <h5>{`${selectedDessert.Description.substring(0, 200)} ...`}</h5>
      <ol>{Ingredients}</ol>
      <ul>{Method}</ul>
      <button>
        <a href={selectedDessert.Source}>Learn More</a>
      </button>
    </div>
  );
}

export default DessertDetail;
