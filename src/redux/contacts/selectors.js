import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.contacts.filter;

export const selectAllTasks = state => state.contacts.items;

export const selectError = state => state.contacts.error;

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
