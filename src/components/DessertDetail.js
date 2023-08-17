import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/DessertDetail.css";

function DessertDetail() {
  const [dessert, setDessert] = useState(null)
  const { id } = useParams();


  useEffect(() => {
    fetch(`http://localhost:8001/Recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setDessert(data));
  }, [id]);



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
    <div className="container">
      <div className="left">
        <img className="image-style"
          src={dessert.image}
          alt={dessert.name}
        />
      </div>
      <div className="right">
        <div className="recipe-page">
          <h4>{dessert.Name}</h4>
          <h3>Description</h3>
          <h5>{dessert.description}</h5>
          <h3>Ingredients</h3>
          <div className="scroll">
            <ol>{renderIngredients}</ol>
          </div>
          <h3>Instructions</h3>
          <div className="scroll">
            <ul>{renderInstructions}</ul>
          </div>
          <button className="info-btn">
            <a href={dessert.source} className='info-text'>Learn More</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DessertDetail;
