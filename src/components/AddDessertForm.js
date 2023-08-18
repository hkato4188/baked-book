import React, { useState } from "react";

import { useHistory } from 'react-router-dom'
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
  return(
    <div className="new-container">
            <div className='new-dessert-header'>
                <h2>New Dessert</h2>
            </div>
            <form onSubmit={(event) => {
                handleSubmit(event, dessertForm)
                setDessertForm(initialState)

            }}>
                <div className="dessert-input">

                    <input
                        className='dessert-url'
                        name='image'
                        type='text'
                        placeholder="Dessert Image-URL"
                        value={dessertForm.image}
                        onChange={changeDessertForm}
                    />
                    <input
                        className='dessert-name'
                        name='name'
                        type='text'
                        placeholder="Dessert Name"
                        value={dessertForm.name}
                        onChange={changeDessertForm}
                    />
                    <input
                        className='dessert-source'
                        name='source'
                        type='text'
                        placeholder="Dessert Source"
                        value={dessertForm.source}
                        onChange={changeDessertForm}
                    />
                    <input
                        className='dessert-author'
                        name='author'
                        type='text'
                        placeholder="Dessert Author"
                        value={dessertForm.author}
                        onChange={changeDessertForm}
                    />
                    <div className="inputscroll">
                        <input
                            className='dessert-description'
                            name='description'
                            type='text'
                            placeholder="Dessert Description"
                            value={dessertForm.description}
                            onChange={changeDessertForm}
                        />
                    </div>
                    <div className="inputscroll">
                        <input
                            className='dessert-ingredients'
                            name='ingredients'
                            type='text'
                            placeholder="Dessert Ingredients: 
                                Place comma after each ingredient without spaces"
                            value={dessertForm.ingredients}
                            onChange={changeDessertForm}
                        />
                    </div>
                    <div className="inputscroll">
                        <input
                            className='dessert-instructions'
                            name='instructions'
                            type='text'
                            placeholder="Dessert Instructions:
                                Place comma after each instructions without spaces"
                            value={dessertForm.instructions}
                            onChange={changeDessertForm}
                        />
                    </div>

                    <button className='add-dessert-btn' type='submit'>🍰 Cake Me 🍰</button>
                </div>
            </form>
        </div>
    )

}

export default AddDessertForm;
