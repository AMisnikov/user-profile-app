import { ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT, SET_CONTACTS } from '../actionTypes/contactsActionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [
                ...state,
                action.contact
            ];
        case REMOVE_CONTACT:
            return state.filter(contactItem => contactItem.id !== action.id);
        case UPDATE_CONTACT:
            return state.map(contactItem => {
                if (contactItem.id === action.id) {
                    return {
                        ...contactItem,
                        ...action.updates
                    };
                } else {
                    return contactItem;
                }
            });
        case SET_CONTACTS:
            return action.contacts;
        default: 
            return state;

        
    }
};