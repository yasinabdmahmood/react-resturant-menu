import { createSlice } from '@reduxjs/toolkit';
import catagories from './data_base';

const initialState = catagories;

export const mealsReducer = createSlice({
  name: 'meals',
  initialState,
  reducers: {

  },
});
// export const {  } = mealSlice.actions;
export default mealsReducer.reducer;
