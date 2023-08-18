import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./css/AddDessertForm.css";

function AddDessertForm() {
  const initialState = {
    image: "",
    name: "",
    source: "",
    description: "",
    author: "",
    ingredients: [],
    instructions: [],
  };
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const {
    image,
    name,
    source,
    description,
    author,
    ingredients,
    instructions,
  } = formData;

  function handleSubmit() {
    fetch(`http://localhost:8001/Recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => history.push(`/desserts`));
  }
  function handleChange(e) {
    let key = e.target.name;
    let newValue = e.target.value;
    if (key === "ingredients" || key === "instructions") {
      newValue = e.target.value.split(", ");
    }
    setFormData({
      ...formData,
      [key]: newValue,
    });
  }

  console.log(formData);
  return (
    <div className="new-container">
      <div className="new-dessert-header">
        <h2>New Dessert</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="dessert-input">
          <label>Image: </label>
          <input
            className="dessert-url"
            name="image"
            type="text"
            placeholder="Dessert Image-URL"
            value={image}
            onChange={handleChange}
          />
          <label>Name: </label>
          <input
            className="dessert-name"
            name="name"
            type="text"
            placeholder="Dessert Name"
            value={name}
            onChange={handleChange}
          />
          <label>Source: </label>
          <input
            className="dessert-source"
            name="source"
            type="text"
            placeholder="Dessert Source"
            value={source}
            onChange={handleChange}
          />
          <label>Author: </label>
          <input
            className="dessert-author"
            name="author"
            type="text"
            placeholder="Dessert Author"
            value={author}
            onChange={handleChange}
          />
          <div className="inputscroll">
            <label>Description: </label>
            <input
              className="dessert-description"
              name="description"
              type="text"
              placeholder="Dessert Description"
              value={description}
              onChange={handleChange}
            />
          </div>
          <div className="inputscroll">
            <label>Ingredients: </label>
            <input
              className="dessert-ingredients"
              name="ingredients"
              type="text"
              placeholder="Dessert Ingredients: 
                                Place comma after each ingredient without spaces"
              value={ingredients}
              onChange={handleChange}
            />
          </div>
          <div className="inputscroll">
            <label>Instructions: </label>
            <input
              className="dessert-instructions"
              name="instructions"
              type="text"
              placeholder="Dessert Instructions:
                                Place comma after each instructions without spaces"
              value={instructions}
              onChange={handleChange}
            />
          </div>

          <button className="add-dessert-btn" type="submit">
            🍰 Cake Me 🍰
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddDessertForm;
