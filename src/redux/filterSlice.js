import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onChangeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { onChangeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
