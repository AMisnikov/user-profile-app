import { createSelector } from 'reselect';

const getContacts = state => state.contacts;
const getFilters = state => state.filters;

export const selectFilteredContacts = createSelector(
    [getContacts, getFilters],
    (contacts, filters) => {
        if (filters.id) {
            return contacts.filter(contact => contact.id === filters.id);
        }

        if(filters.searchText) {
            return contacts.filter(contact => {
                return contact.type.toLowerCase().includes(filters.searchText.toLowerCase()) || contact.value.toLowerCase().includes(filters.searchText.toLowerCase());
            });
        }

        return contacts;
    }
);

export const selectContactById = createSelector(
    [getContacts, getFilters],
    (contacts, filters) => {
        
        return contacts.find(contact => contact.id === filters.id);
        
    }
);