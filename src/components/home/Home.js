import React from 'react';
import Types from '../types/Types';
import Orders from '../orders/Orders';
import Meals from '../meals/Meals';
import './Home.scss';
import {
    Route,
    Routes,
    // Link
  } from "react-router-dom";


function Home() {
    return (
        <div className='home-page'>
           <Routes>
             <Route exact path='/' element={< Types />}></Route>
             <Route exact path='/meals' element={< Meals />}></Route>
             <Route exact path='/orders' element={< Orders />}></Route>
           </Routes>
        </div>
    );
}

export default Home;