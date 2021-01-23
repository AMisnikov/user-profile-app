import { LOG_IN, LOG_OUT } from '../actionTypes/authActionTypes';

const defaultState = {
    user: null
}; 

export default (state = defaultState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                user: action.user
            }
        case LOG_OUT:
            return {
                user: null
            }
        default:
            return state;
    }
};