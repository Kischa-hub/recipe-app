import React from "react";
import style from "./recipe.module.css";

function Recipe({ title, imageSrc, calories, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {" "}
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <h3>{calories}</h3>
      <img className={style.image} src={imageSrc} alt={title} />
    </div>
  );
}

export default Recipe;
