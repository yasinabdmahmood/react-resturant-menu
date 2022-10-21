import React from 'react';
import './Catagory.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setType } from '../../redux/typesReducer';

function Catagory(props) {
  const { catagory } = props;
  const { name, src, id } = catagory;
  const dispatch = useDispatch();
  return (
    <Link to="/meals">
      <div
        role="button"
        className="catagory-container"
        onClick={() => dispatch(setType(id))}
        onKeyDown={() => dispatch(setType(id))}
        tabIndex={0}
      >
        <h1>{name}</h1>
        <img src={src} alt={name} />
      </div>
    </Link>

  );
}
Catagory.propTypes = {
  catagory: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
export default Catagory;
