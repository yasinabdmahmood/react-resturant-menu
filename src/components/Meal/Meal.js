import './Meal.scss'
import React from 'react';
import plus from '../../assets/images/plus.svg'

function Meal(props) {
    const {id,src,name,discription,price,order} = props.meal
    return (
        <div className='meal-container'>
            <div className='image-container'>
                <img src={src} />
            </div>
            <div className='name-container'>
                <span>{name}</span>
            </div>
            <div className='discription-container'>
                <p>{discription}</p>
            </div>
            <div className='price-and-order-container'> 
                <span>{price}</span>
                <img src={plus} alt='plus-sign' />
            </div>
        </div>
    );
}

export default Meal;