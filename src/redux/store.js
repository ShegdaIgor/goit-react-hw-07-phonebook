import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { persistedReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
});
