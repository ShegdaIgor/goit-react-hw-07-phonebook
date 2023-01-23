import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialStateForContacts = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateForContacts,
  reducers: {
    addToContact: {
      reducer(state, action) {
        state.contacts = [...state.contacts, action.payload];
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addToContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
export const persistedReducer = persistReducer(persistConfig, contactReducer);
