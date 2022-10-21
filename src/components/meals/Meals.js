import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Meals.scss';
import { useSelector } from 'react-redux';
import Meal from '../Meal/Meal';

function Meals() {
  const id = useSelector((state) => state.types);
  const meals = useSelector((state) => state.meals[id].list);
  const CatagoryName = useSelector((state) => state.meals[id].name);
  const CatagoryId = useSelector((state) => state.meals[id].id);
  return (
    <div className="meals-container">
      <h1>{CatagoryName}</h1>
      {meals.map((el) => <Meal meal={el} CatagoryId={CatagoryId} key={uuidv4()} />)}
    </div>
  );
}

export default Meals;
