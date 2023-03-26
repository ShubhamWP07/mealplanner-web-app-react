import React, { useEffect, useState } from "react";
import Mealitem from "./Mealitem";
import MealitemIndex from "./MealitemIndex";

const Body = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.meals);
        setItem(data.meals);
        setShow(true);
      });
  });
  const setIndex = (alphabet) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabet}`);
  };
  const serachRecipe = (evt) => {
    if (evt.key === "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };
  return (
    <>
      <div className="main-hero-container">
        <div className="hero-section">
          <h3 className="header_h3">DISCOVER NEW TASTE IN EVERY BITE.</h3>
          <h1 className="hero_heading">
            All happiness depends on a leisurely breakfast..
          </h1>
          <p className="hero_paragraph">
            The best way to cook burgers in bugo the ultimate goal when cooking
            a bugo burger is a perfectly cooked burger that is juicy and packed
            with flavor.
          </p>
          <div className="hero_button_section">
            <button className="hero_btn">Go to Menu</button>
          </div>
        </div>
      </div>

      <div className="input-section">
        <input
          type="search"
          className="search-bar"
          placeholder="Are you hungry ?"
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={serachRecipe}
        />
        <div className="arrow-btn-section">
          <button className="left-arrow">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="right-arrow">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="mealitem-component-container">
        {show ? <Mealitem data={item} /> : "Meal Not Found"}
      </div>

      <div className="MealitemIndex-component-container">
        <MealitemIndex alphaIndex={(alpha) => setIndex(alpha)} />
      </div>
    </>
  );
};

export default Body;
