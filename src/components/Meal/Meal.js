import './Meal.scss';
import React from 'react';
import plus from '../../assets/images/plus.svg';
import plus2 from '../../assets/images/plus2.svg';
import minus from '../../assets/images/dash.svg'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { increament,decreament } from '../../redux/dataReduser';

function Meal(props) {
  const dispatch = useDispatch();
  const {
    id, src, name, discription, price, order,
  } = props.meal;
  const CatagoryId = props.CatagoryId;
  const payload = {
    CatagoryId,
    typeId:id
  }
  return (
    <div className="meal-container">
      <div className="image-container">
        <img src={src} />
      </div>
      <div className="name-container">
        <span>{name}</span>
      </div>
      <div className="discription-container">
        <p>{discription}</p>
      </div>
      <div className="price-and-order-container">
        <span className='span1'>{price}</span>
        <div className={order>0? 'counter':'hide'}>
          <img src={minus}
           onClick={() => dispatch(decreament(payload))}
           className='minus' />
          <span>{order}</span>
          <img 
          className='plus2'
          src={plus2} 
          onClick={() => dispatch(increament(payload))} />
        </div>
        <img 
        src={plus} 
        alt="plus-sign"  
        onClick={() => dispatch(increament(payload))}
        className={order>0? 'hide':''} />
      </div>
    </div>
  );
}
Meal.propTypes = {
    name: PropTypes.string
  };
export default Meal;
