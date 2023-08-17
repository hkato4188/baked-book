import React from "react";
import "./css/DessertCard.css";

function DessertCard({ dessert }) {
  const { id, Image, Name, Source, Description } = dessert;
  const Method = dessert.Method.map((step) => <li>{step}</li>);
  const Ingredients = dessert.Ingredients.map((ingredient) => (
    <li>{ingredient}</li>
  ));

  return (
    <div className="dessert-card">
      <img className="dessert-image" src={Image} alt={Name} />
      <h4>{Name}</h4>
      <h5>{`${Description.substring(0, 200)} ...`}</h5>
      {/* <ol>{Ingredients}</ol> */}
      {/* <ul>{Method}</ul> */}

      <button>
        <a href={Source}>Learn More</a>
      </button>
    </div>
  );
}

export default DessertCard;
