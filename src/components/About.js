import React from "react";
import "./css/About.css";

function About() {
  return (
    <div>
      <h1 className="about-header">Why bake goods?</h1>
      <h3 className="about-description">...when you can bake GREATS!</h3>
      <img
        className="about-bread"
        src="https://img.freepik.com/free-vector/isolated-bread-loaf-cartoon-style_1308-85000.jpg?w=1800&t=st=1692213516~exp=1692214116~hmac=f99a96aedfa04e5167c5449de456f539c89e39294de67df743710aa9d6ce3d69"
        alt="car toon image of bread"
      />
      <div className="about-content">
        <p className="about-paragraph">
          As the name promises, BakedBook will make your life that much sweeter
          by taking your dessert game from good to great.
        </p>
        <p className="about-paragraph">
          Explore new recipes, add your own favorites, and upvote confectionary
          contestants to see which dessert deserves the title of GOAT
        </p>
      </div>
    </div>
  );
}

export default About;
