import React from "react";
import { Link } from "react-router-dom";
import "./css/DessertCard.css";

function DessertCard({ dessert }) {
  const { id, image, name, description } = dessert;

  console.log(dessert);

  return (
    <div className="dessert-card">
      <img className="dessert-image" src={image} alt={name} />
      <h4>{name}</h4>
      <div className="dessert-description">
        <p>{`${description.substring(0, 120)} ...`}</p>
      </div>

      <button className="recipe-btn " >
        <Link className="recipe-text" to={`/desserts/${id}`}>
          Full Recipe
        </Link>
      </button>
    </div>
  );
}

export default DessertCard;
