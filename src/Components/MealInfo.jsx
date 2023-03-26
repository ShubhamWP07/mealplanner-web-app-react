import React, { useState } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const [item, setItem] = useState();
  const { mealId } = useParams();
  if (mealId !== "") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }
  return (
    <>
      {!item ? (
        ""
      ) : (
        <>
          <div className="mealinfo-main-container">
            <div className="mealinfo-section">
              <div className="mealinfo-img-section">
                <img src={item.strMealThumb} alt="" className="mealinfo-img" />
              </div>
              <div className="mealinfo-heading-section">
                <h1 className="mealinfo-heading">{item.strMeal}</h1>
                <ul>
                  <li className="mealinfo-list">
                    Category: {item.strCategory}
                  </li>
                  <li className="mealinfo-list">Origin: {item.strArea}</li>
                  <li className="mealinfo-list">Tags: {item.strTags}</li>
                </ul>
              </div>
            </div>
            <div className="maelinfo-ingredient-section">
              <h1 className="ingredient-heading">Ingredients</h1>
              <ul>
                <li className="ingredients">
                  {item.strIngredient1} : {item.strMeasure1}
                </li>
                <li className="ingredients">
                  {item.strIngredient2} : {item.strMeasure2}
                </li>
                <li className="ingredients">
                  {item.strIngredient3} : {item.strMeasure3}
                </li>
                <li className="ingredients">
                  {item.strIngredient4} : {item.strMeasure4}
                </li>
                <li className="ingredients">
                  {item.strIngredient5} : {item.strMeasure5}
                </li>
                <li className="ingredients">
                  {item.strIngredient6} : {item.strMeasure6}
                </li>
                <li className="ingredients">
                  {item.strIngredient7} : {item.strMeasure7}
                </li>
                <li className="ingredients">
                  {item.strIngredient8} : {item.strMeasure8}
                </li>
                <li className="ingredients">
                  {item.strIngredient9} : {item.strMeasure9}
                </li>
              </ul>
            </div>

            <div className="mealinfo-instruction-section">
              <h1 className="instructio-heading">Instructions</h1>
              <p className="instructions">{item.strInstructions}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MealInfo;
