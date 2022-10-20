import React from 'react';
import './Catagory.scss';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {setType} from '../../redux/typesReducer'

function Catagory(props) {
    const {name,src,id} = props.catagory
    const dispatch = useDispatch()
    return (
        <Link to="/meals">
            <div className='catagory-container' onClick={() => dispatch(setType(id))}>
               <h1>{name}</h1>
               <img src={src} /> 
            </div>
        </Link>
        
    );
}

export default Catagory;