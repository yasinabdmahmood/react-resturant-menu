import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import mealsReducer from './dataReduser';

const rootReducer = combineReducers({
  meals: mealsReducer,

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
