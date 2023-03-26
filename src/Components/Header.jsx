import React from "react";
import "../App.css";

const Header = () => {
  return (
    <>
      <header className="Header_main_con">
        <div className="header-section">
          <div className="logo-area">
            <i className="fa-solid fa-bowl-food"></i>
            <h1 className="logo-heading">
              Meal<span className="logo-heading-span">DB.</span>
            </h1>
          </div>
          <div className="navigation-bar">
            <ul className="ul-list">
              <li className="list-item">HOME</li>
              <li className="list-item">ABOUT</li>
              <li className="list-item">HOT MEALS</li>
              <li className="list-item">CONTACT</li>
            </ul>
          </div>
          <div className="header-btn-area">
            <button className="login">Login</button>
            <button className="sign-up">Sign up</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
