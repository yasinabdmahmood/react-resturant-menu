import React from 'react';
import {
  Route, Routes, Link, useNavigate, useLocation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Types from '../types/Types';
import Orders from '../orders/Orders';
import Meals from '../meals/Meals';
import goBack from '../../assets/images/arrow-left.svg';
import './Home.scss';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const types = useSelector((state) => state.meals);
  const showOrder = (input) => {
    let bool = false;
    input.forEach((element) => {
      element.list.forEach((el) => {
        if (el.order > 0) {
          bool = true;
        }
      });
    });
    return bool;
  };
  const navigateBack = () => { navigate(-1); };
  return (
    <div className="home-page">
      <button type="submit" onClick={navigateBack}>
        <img
          className={location.pathname === '/' ? 'hide' : 'go-Back'}
          src={goBack}
          alt="go-back"
        />
      </button>
      <div className="developer-information">
        <h1>Resturant menu</h1>
        <span className="location">
          &nbsp; Shorja , Kirkuk ,Iraq
        </span>
        <span className="phone-number">
         &nbsp; +9647507199736
        </span>
      </div>
      <Routes>
        <Route exact path="/" element={<Types />} />
        <Route exact path="/meals" element={<Meals />} />
        <Route exact path="/orders" element={<Orders />} />
      </Routes>
      <div className={showOrder(types) ? 'order-display' : 'hide'}>
        <Link to="/orders">
          <span>Show my order</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
