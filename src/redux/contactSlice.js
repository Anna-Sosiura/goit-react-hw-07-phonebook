import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [...JSON.parse(localStorage.getItem('contacts'))],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});
export const { setContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
