import React from "react";
import "./css/DessertCard.css";

function DessertCard({ dessert }) {
  const { id, Image, Name, Source, Description } = dessert;
  const Method = dessert.Method;
  const Ingredients = dessert.Ingredients;

  console.log(Ingredients);

  return (
    <div className="dessert-card">
      <img className="dessert-image" src={Image} alt={Name} />
      <h4>{Name}</h4>
      <h5>{Description}</h5>
      <p>{Ingredients}</p>
      <p>{Method}</p>
      <button>
        <a href={Source}>Learn More</a>
      </button>
    </div>
  );
}

export default DessertCard;
