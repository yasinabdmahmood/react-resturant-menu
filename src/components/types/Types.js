import React from 'react';
import './Types.scss';
import { useSelect, useDispatch } from 'react-redux';

function Types() {
  const types = useSelect((state) => state);
  return (
    <div>
      <h1>Types page</h1>
    </div>
  );
}

export default Types;
