import {SET_FIELD, SET_FORM_VALIDITY, SET_FORM_ERROR, SET_FETCHING_STATUS} from './formActionsTypes';


export const setField = (updates) => ({
    type: SET_FIELD,
    updates

});

export const setFormValidity = (isFormValid) => ({
    type: SET_FORM_VALIDITY,
    isFormValid
});

export const setFormErr = (formErr) => ({
    type: SET_FORM_ERROR,
    formErr
});

export const setFetchingStatus = (isFetching) => ({
    type: SET_FETCHING_STATUS,
    isFetching
});


