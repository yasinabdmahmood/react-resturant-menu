import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

export const typesReducer = createSlice({
  name: 'types',
  initialState,
  reducers: {
    setType(state, action) {
      state = action.payload;
      return state;
    },
  },
});
export const { setType } = typesReducer.actions;
export default typesReducer.reducer;
