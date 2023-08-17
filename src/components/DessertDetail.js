import React from "react";
import { useParams } from "react-dom-router";

function DessertDetail(props) {
  // const params = useParams();
  // const { Image, Name, Source, Description } = dessert;
  // const Method = dessert.Method.map((step) => <li>{step}</li>);
  // const Ingredients = dessert.Ingredients.map((ingredient) => (
  //   <li>{ingredient}</li>
  // ));
  // console.log(params);
  return (
    <div className="dessert-card">
      Hello Details
      {/* <img className="dessert-image" src={Image} alt={Name} />
      <h4>{Name}</h4>
      <h5>{`${Description.substring(0, 200)} ...`}</h5>
      <ol>{Ingredients}</ol>
      <ul>{Method}</ul>
      <button>
        <a href={Source}>Learn More</a>
      </button> */}
    </div>
  );
}

export default DessertDetail;
