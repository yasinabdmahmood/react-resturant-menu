import React from 'react';
import { Route, Routes,Link,useNavigate,useLocation  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Types from '../types/Types';
import Orders from '../orders/Orders';
import Meals from '../meals/Meals';
import goBack from '../../assets/images/arrow-left.svg'
import './Home.scss';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const types = useSelector((state) => state.meals);
  const showOrder = (input) => {
    let bool = false;
    input.forEach(element => {
      element.list.forEach(el=>{
        if(el.order>0){
          bool=true;
        }
      })
    });
    return bool
  }
  return (
    <div className="home-page">
      <img
      className={location.pathname==='/'? 'hide':'go-Back'}
       src={goBack}
       alt='go-back'
       onClick={() => navigate(-1)} />
      <Routes>
        <Route exact path="/" element={<Types />} />
        <Route exact path="/meals" element={<Meals />} />
        <Route exact path="/orders" element={<Orders />} />
      </Routes>
      <div className={showOrder(types)? 'order-display':'hide'} >
        <Link to="/orders">
        <span>Show my order</span>
        </Link>        
      </div>
    </div>
  );
}

export default Home;
