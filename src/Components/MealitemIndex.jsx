import React from "react";

const MealitemIndex = ({ alphaIndex }) => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var num = 0;
  return (
    <>
      <div className="mealitemIndex-section">
        <div className="mealitemIndex-headig-section">
          <h1 className="mealitemIndex-headig">Browse Meals by Name</h1>
        </div>
        {alphabet.map((item) => {
          return (
            <div
              className="MealitemIndex-alphabet-section"
              key={num++}
              onClick={() => alphaIndex(item)}
            >
              <h3 className="MealitemIndex-alphabet">{item}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MealitemIndex;
