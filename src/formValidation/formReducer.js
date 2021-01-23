import {SET_FIELD, SET_FORM_VALIDITY, SET_FORM_ERROR, SET_FETCHING_STATUS} from './formActionsTypes';

const formReducer = (state, action) => {
    switch (action.type) {
        case SET_FIELD:
            return {
                ...state,
                [action.updates.name]: action.updates.data
            };
        case SET_FORM_VALIDITY:
            return {
                ...state,
                isFormValid: action.isFormValid
            };
        case SET_FORM_ERROR:
            return {
                ...state,
                formErr: action.formErr
            };
        case SET_FETCHING_STATUS:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default: 
            return state;
    }
};

export default formReducer;