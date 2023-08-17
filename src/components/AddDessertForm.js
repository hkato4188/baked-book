import React, { useState } from "react";

const initialState = {
    image: '',
    name: '',
    source: '',
    description: '',
    author: '',
    ingredients: '',
    instructions: ''
}

function AddDessertForm({ handleSubmit }) {
    // function handleSubmit(event, newDessert) {
    // event.preventDefault()
    // fetch(`http://localhost:8001/Recipes`, {
    // method: "POST",
    // headers: {
    // 'content-type': 'application/json',
    // 'accepts': 'application/json'
    // },
    // body: JSON.stringify(newDessert)
    // })
    // .then((r) => r.json())
    // // .then((newDessertData) => setDessertList([...Desserts, newDessertData]))
    // }
    const [dessertForm, setDessertForm] = useState(initialState)
    function changeDessertForm(event) {
        const { name, value } = event.target
        const updateDessertForm = { ...dessertForm, [name]: value }
        setDessertForm(updateDessertForm)
    }
    return (
        <div >
            <h2>New Dessert</h2>
            <form onSubmit={(event) => {
                handleSubmit(event, dessertForm)
                setDessertForm(initialState)

            }}>
                <h3>
                    <input
                        className=''
                        name='image'
                        type='text'
                        placeholder="Dessert Image-URL"
                        value={dessertForm.image}
                        onChange={changeDessertForm}
                    />
                    <input
                        className=''
                        name='name'
                        type='text'
                        placeholder="Dessert Name"
                        value={dessertForm.name}
                        onChange={changeDessertForm}
                    />
                    <input
                        className=''
                        name='source'
                        type='text'
                        placeholder="Dessert Source"
                        value={dessertForm.source}
                        onChange={changeDessertForm}
                    />
                    <input
                        className=''
                        name='description'
                        type='text'
                        placeholder="Dessert Description"
                        value={dessertForm.description}
                        onChange={changeDessertForm}
                    />
                    <input
                        className=''
                        name='author'
                        type='text'
                        placeholder="Dessert Author"
                        value={dessertForm.author}
                        onChange={changeDessertForm}
                    />
                    <input
                        className=''
                        name='ingredients'
                        type='text'
                        placeholder="Dessert Ingredients"
                        value={dessertForm.ingredients}
                        onChange={changeDessertForm}
                    />
                    <input
                        className=''
                        name='instructions'
                        type='text'
                        placeholder="Dessert Instructions"
                        value={dessertForm.instructions}
                        onChange={changeDessertForm}
                    />
                </h3>
                <button className='' type='submit'>🍰 Cake Me 🍰</button>
            </form>
        </div>
    )
}

export default AddDessertForm