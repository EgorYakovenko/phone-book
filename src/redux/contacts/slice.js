import { createSlice, createSelector } from '@reduxjs/toolkit';

import { fetchContacts, deleteContact, addContact } from './operations';
import { selectNameFilter } from '../filters/slice';
import { logOut } from '../auth/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: bulder =>
    bulder
      .addCase(fetchContacts.pending, state => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        // console.log(state.items);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state, action) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      }),
});

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

// export const selectFillerContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectNameFilter(state);
//   return contacts.filter(contact => {
//     return contact.name.toLowerCase().includes(filter.toLowerCase());
//   });
// };

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
