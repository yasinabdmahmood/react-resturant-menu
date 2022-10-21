import React from 'react';
import './Types.scss';
import { useSelector } from 'react-redux';
import Catagory from '../catagory/Catagory';

function Types() {
  const types = useSelector((state) => state.meals);
  return (
    <div className="type-container">
      <h1>Menue</h1>
      {types.map((el) => <Catagory catagory={el} key={el.name} />)}
    </div>
  );
}

export default Types;
