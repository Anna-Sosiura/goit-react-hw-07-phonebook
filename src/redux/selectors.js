import { createSelector } from '@reduxjs/toolkit';

export const getContactItems = state => state.contacts.contactItems;
export const getFilter = state => state.filter.filter;
export const getFilterContacts = createSelector(
  [getContactItems, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
