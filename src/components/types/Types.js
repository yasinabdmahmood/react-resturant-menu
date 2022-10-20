import React from 'react';
import './Types.scss';
import { useSelector, useDispatch } from 'react-redux';
import Catagory from '../catagory/Catagory';

function Types() {
  const types = useSelector((state) => state.meals);
  return (
    <div className='type-container'>
      <h1>Menue</h1>
      {types.map(el =>{
        return <Catagory catagory={el} />
      })}
    </div>
  );
}

export default Types;
