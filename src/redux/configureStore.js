import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import mealReducer from './dataReduser';
import typeReducer from './typesReducer';

const rootReducer = combineReducers({
  meals: mealReducer,
  types: typeReducer,

});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['getCountries//fulfilled', 'getDetials//fulfilled'],
    },
  }).concat(logger),
});

export default store;
