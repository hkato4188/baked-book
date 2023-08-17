import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/DessertDetail.css";

function DessertDetail() {
  const [dessert, setDessert] = useState(null)
  const { id } = useParams();
  // const [selectedDessert, setSelectedDessert] = useState(); //this could be the fix!

  useEffect(() => {
    fetch(`http://localhost:8001/Recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setDessert(data));
  }, [id]);
  // const renderInstructions = dessert.instructions.map((step) => <li>{step}</li>);
  // const renderIngredients = dessert.ingredients.map((ingredient) => (
  // <li>{ingredient}</li>
  // ));
  // 



  if (!dessert) return <h1>...Loading</h1>;

  const { name,
    image,
    source,
    description,
    author,
    ingredients,
    instructions } = dessert

  const renderInstructions = dessert.instructions.map((step) => <li>{step}
  </li>);
  const renderIngredients = dessert.ingredients.map((ingredient) => (
    <li>{ingredient}</li>
  ));
  return (
    <div className="dessert-detail">
      <img
        className="dessert-image"
        src={dessert.image}
        alt={dessert.name}
      />
      <h4>{dessert.Name}</h4>
      <h5>{`${dessert.description.substring(0, 200)} ...`}</h5>
      <ol>{renderIngredients}</ol>
      <ul>{renderInstructions}</ul>
      <button>
        <a href={dessert.source}>Learn More</a>
      </button>
    </div>
  );
}

export default DessertDetail;
