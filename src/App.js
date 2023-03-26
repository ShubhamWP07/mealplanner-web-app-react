import React from 'react';
import './App.css';
import "./Responsive.css"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import { Route, Routes } from 'react-router-dom';
import MealInfo from './Components/MealInfo';

function App() {
  return (
    <>
    <Header/>
      <Routes>
      <Route path='/' element={<Body/>} />
      <Route path='/:mealId' element={<MealInfo/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
