import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Types from '../types/Types';
import Orders from '../orders/Orders';
import Meals from '../meals/Meals';
import './Home.scss';

function Home() {
  return (
    <div className="home-page">
      <Routes>
        <Route exact path="/" element={<Types />} />
        <Route exact path="/meals" element={<Meals />} />
        <Route exact path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default Home;
