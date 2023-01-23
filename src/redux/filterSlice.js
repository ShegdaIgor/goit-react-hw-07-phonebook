import { createSlice } from '@reduxjs/toolkit';

const initialStateForFilter = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateForFilter,
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
