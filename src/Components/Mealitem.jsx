import React from "react";
import { useNavigate } from "react-router-dom";

const Mealitem = ({ data }) => {
  // console.log(data);
  var num = 0;
  let navigate = useNavigate();
  return (
    <>
      {!data
        ? "Meal Not Found"
        : data.map((item) => {
            return (
              <div className="mealitem-section" key={num++}>
                <img src={item.strMealThumb} alt="" className="mealitem-img" />
                <h3 className="mealitem-heading">{item.strMeal}</h3>
                <p className="mealitem-category">
                  Category: {item.strCategory}
                </p>
                <button
                  className="mealitem-btn"
                  key={item.idMeal}
                  onClick={() => {
                    navigate(`/${item.idMeal}`);
                  }}
                >
                  View more
                </button>
              </div>
            );
          })}
    </>
  );
};

export default Mealitem;
