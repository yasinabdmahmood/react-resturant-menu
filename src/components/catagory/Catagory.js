import React from 'react';
import './Catagory.scss'

function Catagory(props) {
    const {name,src} = props.catagory
    return (
        <div className='container'>
            <h1>{name}</h1>
           <img src={src} /> 
        </div>
    );
}

export default Catagory;