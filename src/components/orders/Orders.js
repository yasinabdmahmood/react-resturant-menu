import React from 'react';
import Meal from '../Meal/Meal';
import './Orders.scss';
import {useSelector} from 'react-redux'

function Orders(props) {
  const chooseOrderedFoods =(state) => {
    const arr = [];
    state.forEach(element => {
      element.list.forEach(el=>{
        if(el.order>0){
          arr.push({...el,CatagoryId:element.id})
        }
      })
    });
    return arr
  }
  const orderedMeal = useSelector(state => chooseOrderedFoods(state.meals))
  return (
    <div className="meals-container">
      <h1>My order</h1>
      {orderedMeal.map((el) => <Meal meal={el} CatagoryId={el.CatagoryId} />)}
    </div>
  );
}

export default Orders;
