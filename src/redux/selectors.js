import { createSelector } from '@reduxjs/toolkit';

export const getContactItems = state => state.contacts.contactItems;
export const getFilter = state => state.filter.filter;
export const selectLoader = state => state.contacts.loader;
export const selectError = state => state.contacts.error;
export const getFilterContacts = createSelector(
  [getContactItems, getFilter],
  (contacts, filter) => {
    console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
