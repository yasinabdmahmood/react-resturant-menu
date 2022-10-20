import React from 'react';
import './Meals.scss';
import { useSelector } from 'react-redux';
import Meal from '../Meal/Meal';

function Meals() {
  const id = useSelector(state => state.types)
  const meals = useSelector(state => state.meals[id].list)
  const CatagoryName = useSelector(state => state.meals[id].name)
  return (
    <div className='meals-container'>
      <h1>{CatagoryName}</h1>
      {meals.map(el =>{
        return <Meal meal={el} />
      })}
    </div>
  );
}

export default Meals;
