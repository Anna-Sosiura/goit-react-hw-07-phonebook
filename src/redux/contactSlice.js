import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
} from '../servise/contactsServise';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactItems: [],
    loader: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.loader = false;
        state.error = null;
        state.contactItems = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload;
      })

      .addCase(addContact.pending, (state, action) => {
        state.loader = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loader = false;
        state.error = null;
        state.contactItems = [...state.contactItems, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload;
      })

      .addCase(deleteContact.pending, (state, action) => {
        state.loader = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loader = false;
        state.error = null;
        state.contactItems = state.contactItems.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactSlice.reducer;
