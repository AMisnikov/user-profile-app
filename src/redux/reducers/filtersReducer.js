import { UPDATE_FILTERS, RESET_FILTERS } from '../actionTypes/filtersActionTypes';

const defaultState = {
    searchText: '',
    id: ''
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_FILTERS:
            return {
                ...state,
                ...action.updates
            };
        case RESET_FILTERS:
            return defaultState;
        default: 
            return state;
    }
};