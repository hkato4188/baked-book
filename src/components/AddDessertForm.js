import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        history.push(`desserts/${data.id}`);
      });
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
    <div>
      <h2>New Dessert</h2>
      <form onSubmit={handleSubmit}>
        <label>Image: </label>
        <input
          className=""
          name="image"
          type="text"
          placeholder="Dessert Image-URL"
          value={image}
          onChange={handleChange}
        />
        <br />
        <label>Name: </label>
        <input
          className=""
          name="name"
          type="text"
          placeholder="Dessert Name"
          value={name}
          onChange={handleChange}
        />
        <br />
        <label>Source: </label>
        <input
          className=""
          name="source"
          type="text"
          placeholder="Dessert Source"
          value={source}
          onChange={handleChange}
        />
        <br />
        <label>Description:</label>
        <input
          className=""
          name="description"
          type="text"
          placeholder="No spaces, comma separated!"
          value={description}
          onChange={handleChange}
        />
        <br />
        <label>Author: </label>
        <input
          className=""
          name="author"
          type="text"
          placeholder="Dessert Author"
          value={author}
          onChange={handleChange}
        />
        <br />
        <label>Ingredients: </label>
        <input
          className=""
          name="ingredients"
          type="text"
          placeholder="No spaces, comma separated!"
          value={ingredients}
          onChange={handleChange}
        />
        <br />
        <label>Instructions: </label>
        <input
          className=""
          name="instructions"
          type="text"
          placeholder="Dessert Instructions"
          value={instructions}
          onChange={handleChange}
        />
        <br />

        <button className="" type="submit">
          🍰 Cake Me 🍰
        </button>
      </form>
    </div>
  );
}

export default AddDessertForm;
