/* eslint-disable */
import './Meal.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import plus from '../../assets/images/plus.svg';
import plus2 from '../../assets/images/plus2.svg';
import minus from '../../assets/images/dash.svg';
import { increament, decreament } from '../../redux/dataReduser';

function Meal(props) {
  const { CatagoryId, meal } = props;
  const {
    id, src, name, discription, price, order,
  } = meal;
  const dispatch = useDispatch();
  const payload = {
    CatagoryId,
    typeId: id,
  };
  const decrease = () => { dispatch(decreament(payload)); };

  return (
    <div className="meal-container">
      <div className="image-container">
        <img src={src} alt={name} />
      </div>
      <div className="name-container">
        <span>{name}</span>
      </div>
      <div className="discription-container">
        <p>{discription}</p>
      </div>
      <div className="price-and-order-container">
        <span className="span1">{price}</span>
        <div className={order > 0 ? 'counter' : 'hide'}>

          <img
            src={minus}
            alt="minus"
            onClick={decrease}
            onKeyDown={decrease}
            className="minus"
            role="button"
            tabIndex={0}
          />
          <span>{order}</span>
          <img
            className="plus2"
            src={plus2}
            alt="plus"
            onClick={() => dispatch(increament(payload))}
          />
        </div>
        <img
          src={plus}
          alt="plus-sign"
          onClick={() => dispatch(increament(payload))}
          className={order > 0 ? 'hide' : ''}
        />
      </div>
    </div>
  );
}
Meal.propTypes = {
  meal: PropTypes.shape({
    name: PropTypes.string,
    src: PropTypes.string,
    id: PropTypes.number,
    discription: PropTypes.string,
    order: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  CatagoryId: PropTypes.number.isRequired,
};
export default Meal;
