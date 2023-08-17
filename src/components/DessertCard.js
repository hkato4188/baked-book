import React from "react";
import { Link } from "react-router-dom";
import "./css/DessertCard.css";

function DessertCard({ dessert }) {
  const { id, Image, Name, Description } = dessert;

  return (
    <div className="dessert-card">
      <img className="dessert-image" src={Image} alt={Name} />
      <h4>{Name}</h4>
      <div className="dessert-description">
        <p>{`${Description.substring(0, 200)} ...`}</p>
      </div>
      <button className="recipe-btn ">
        <Link className="recipe-text" to={`/desserts/${id}`}>
          Full Recipe
        </Link>
      </button>
    </div>
  );
}

export default DessertCard;
