import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

export const typesReducer = createSlice({
  name: 'types',
  initialState,
  reducers: {
    setType(state, action) {
      return action.payload;
    },
  },
});
export const { setType } = typesReducer.actions;
export default typesReducer.reducer;
