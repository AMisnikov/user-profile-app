import { combineReducers } from 'redux';

import authReducer from './authReducer';
import contactsReducer from './contactsReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer
});