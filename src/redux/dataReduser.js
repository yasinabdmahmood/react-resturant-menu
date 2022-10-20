import { createSlice } from '@reduxjs/toolkit';

import catagories from './data_base';

const initialState = catagories;

export const mealsReducer = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    increament(state,action){
      const {CatagoryId,typeId} =action.payload;
      state[CatagoryId].list[typeId].order+=1;
      return state
    },
    decreament(state,action){
      const {CatagoryId,typeId} =action.payload;
      state[CatagoryId].list[typeId].order-=1;
      return state
    }
  },
});

export const {increament,decreament} = mealsReducer.actions;
export default mealsReducer.reducer;
