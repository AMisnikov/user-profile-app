import { ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT, SET_CONTACTS } from '../actionTypes/contactsActionTypes';

export const addContact = (contact) => ({
    type: ADD_CONTACT,
    contact
});

export const updateContact = (id, updates) => ({
    type: UPDATE_CONTACT,
    id,
    updates
});

export const removeContact = (id) => ({
    type: REMOVE_CONTACT,
    id
});

export const setContacts = (contacts) => ({
    type: SET_CONTACTS,
    contacts
});

export const startAddContact = ({ type, value }) => {
    return async (dispatch, getState) => {
        const { auth } = getState();

        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${auth.user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: auth.user.id,
                type,
                value
            })
        });

        if (response.status === 201) {
            const data = await response.json();
            dispatch(addContact(data));
            return data;
        } else {
            throw new Error('!!!Error!!!');
        }
    }
};

export const startSetContacts = () => {
    return async (dispatch, getState) => {
        const { auth } = getState();

        const response = await fetch(`/api/data?userId=${auth.user.id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${auth.user.token}`
            }
        });
    
        if (response.status === 200 || response.status === 304) {
            const contacts = await response.json();
            console.log(contacts);
            dispatch(setContacts(contacts));
            return contacts;
        } else {
            throw new Error('!!!!ERORR!!!!!');
        }


    }
};


export const startUpdateContact = (id, updates) => {
    return async (dispatch, getState) => {
        const { auth } = getState();

        const response = await fetch(`/api/data/${id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${auth.user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: auth.user.id,
                ...updates
            })
        });

        if (response.status === 200) {
            const updated = response.json();
            dispatch(updateContact(id, updates));
            return updated;
        } else {
            throw new Error('!!!!ERORR!!!!!');
        }


    };
};

export const startDeleteContact = (id) => {
    return async (dispatch, getState) => {
        const { auth } = getState();

        const response = await fetch(`/api/data/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${auth.user.token}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            const deleted = response.json();
            dispatch(removeContact(id));
            return deleted;
        } else {
            throw new Error('!!!!ERORR!!!!!');
        }


    };
};