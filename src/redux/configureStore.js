import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import mealsReducer from './dataReduser';
import typesReducer from './typesReducer';

const rootReducer = combineReducers({
  meals: mealsReducer,
  types: typesReducer,

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
