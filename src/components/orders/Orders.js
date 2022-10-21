import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Meal from '../Meal/Meal';
import './Orders.scss';

function Orders() {
  const navigate = useNavigate();
  const emptyOrder = (
    <div className="empty-order">
      <h2>EMPTY ORDER</h2>
      <div>
        <button type="submit" onClick={() => navigate(-1)}>Back to menu</button>
      </div>

    </div>
  );
  const chooseOrderedFoods = (state) => {
    const arr = [];
    state.forEach((element) => {
      element.list.forEach((el) => {
        if (el.order > 0) {
          arr.push({ ...el, CatagoryId: element.id });
        }
      });
    });
    return arr;
  };
  const orderedMeal = useSelector((state) => chooseOrderedFoods(state.meals));
  return (
    <div className="meals-container">
      <h1>My order</h1>
      {orderedMeal.length > 0
        ? orderedMeal.map((el) => <Meal meal={el} CatagoryId={el.CatagoryId} key={el.CatagoryId} />)
        : emptyOrder}
    </div>
  );
}

export default Orders;
