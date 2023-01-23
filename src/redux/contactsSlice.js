import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchContactsActionSuccess } from './contacts/contacts.action';
import { fetchContacts } from './contacts/contacts.thunk';

const initialStateForContacts = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateForContacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { fetchContactsPending, fetchContactsError } =
  contactsSlice.actions;
export default contactsSlice.reducer;

export const { addToContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
export const persistedReducer = persistReducer(persistConfig, contactReducer);
